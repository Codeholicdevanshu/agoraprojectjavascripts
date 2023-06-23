async function fetchWeatherData() {
    let url = 'http://localhost:8000/api/country';
    let options = {
        method: 'GET',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        fetch(url, options)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                //console.log(data)
                //logic fetching unique generation form array
                //unique generation as we have to remove multiple same data
                let generationColors = {
                    "AT": "#C42525",
                    "Battery storage": "#00CED1",
                    "BE": "#97BA43",
                    "Biomass": "#467850",
                    "CH": "#EA899A",
                    "CZ": "#3C8C90",
                    "Dam Hydro": "#97BAD5",
                    "Day-ahead prices": "#64B9E4",
                    "DK": "#5DB7BB",
                    "FR": "#1E83B3",
                    "Future demand (flexible)": "#FF85C6",
                    "Geothermal": "#008080",
                    "Grid emission factor": "#733E88",
                    "Hard Coal": "#000000",
                    "Hydro": "#79A8CA",
                    "Industrial waste (non-renewable)": "#32CD32",
                    "Lignite": "#423429",
                    "LU": "#BDBDBD",
                    "Natural Gas": "#9ABBCA",
                    "NL": "#F28F43",
                    "NO": "#791C13",
                    "Non-renewable": "#617494",
                    "Non-renewable municipal waste": "#8A9A5B",
                    "Non-renewable waste": "#478778",
                    "Nuclear": "#5F605C",
                    "Oil": "#1D565C",
                    "Other": "#B6C0C6",
                    "Other fossil fuel": "#B6C0C6",
                    "Other renewables": "#93C572",
                    "PL": "#000000",
                    "price": "#64B9E4",
                    "Pumped storage generation": "#00396B",
                    "Renewable": "#88BB3C",
                    "Renewable municipal waste": "#0BDA51",
                    "Renewables": "#88BB3C",
                    "Residual load": "#B6C0C6",
                    "Run-of-River Hydro": "#5D95BF",
                    "SE": "#FFD744",
                    "Solar": "#FFD744",
                    "Solar photovoltaic": "#FFEBA3",
                    "Total": "#733E88",
                    "Total conventional power plant": "#617494",
                    "Total electricity demand": "#D05094",
                    "Total electricity demand without pumped hydro": "#AF87B4",
                    "Total electricity demand with pumped hydro": "#AF87B4",
                    "Total grid emission": "#733E88",
                    "Wind": "#0089DE",
                    "Wind offshore": "#006099",
                    "Wind onshore": "#1F82C0"
                 };

                //let uniqueGeneration = new Set(data.map(item => item.generation))
                //console.log(uniqueGeneration)

                 let generationColorstr = "";

                for (let property in generationColors) {
                    generationColorstr += `${property}: ${generationColors[property]}\n`
                }
                
                console.log(generationColorstr)
        
                //same date unique generation with unique value
                //creating an object to store the unique combination of date and generation
                let transformedData = [];
                let uniqueGeneration = [];

                // Loop through the uniqueDataArray to create the desired format
                for (let item of data) {
                    let date = item.date_id;
                    let generation = item.generation;
                    let value = item.value;
                    //console.log(uniqueGeneration)
                    // Check if the date already exists in the transformedData
                    let existingData = transformedData.find(obj => obj.date_id === date);

                    if (existingData) {
                        // If the date already exists, add the generation and value to the existing object
                        existingData[generation] = value;
                    } else {
                        // If the date doesn't exist, create a new object with the date, generation, and value
                        let newData = {
                        date_id: date,
                        }
                        transformedData.push(newData);
                        
                    }
                    if (!uniqueGeneration.includes(generation)){
                        uniqueGeneration.push(generation)
                    }
                }
                

                //console.log(transformedData);
                //console.log(uniqueGeneration)
            
                var opts = {
                    template: "@flourish/line-bar-pie",
                    version: "25.0.5",
                    container: "#chart",
                    api_key: "qkHM-wY20jommCekPI007E6VSaaQ3rm0_UBUuW4p012j422dWhWnkhxeXMicFt4Q",
                    
                    bindings: {
                        "data": {
                          "label": "date_id",
                          "value": [...uniqueGeneration],
                        },
                       
                      },
                    data: {
                        data:transformedData
                    },
                    state: {
                        "animate_on_load": true,
                        "chart_type": "column_stacked",
                        "facet_layout": "single",
                        "background_color_enabled": false,
                        layout: {
                            title: "This is an API Example"
                        },
                        "color":{
                            "categorical_custom_palette":generationColorstr,
                        }
                        
                        
                    }
                };
                //function to change chart_type column stacked to column grouped or simple update chart
                var flourish_visualisation = new Flourish.Live(opts);
                let updateButton = document.getElementById('updateButton')
                updateButton.addEventListener('click',()=>{
                    //Toggle button stacked and grouped chart type
                    opts.state.chart_type = opts.state.chart_type = "column_stacked"?"column_grouped":"column_stacked";
                    flourish_visualisation.update(opts)

                })

                //function to change chart_type column grouped to column stacked 

                let groupButton = document.getElementById('updateGtoS')
                groupButton.addEventListener('click',()=>{
                    opts.state.chart_type = opts.state.chart_type = "column_grouped"?"column_stacked":"column_grouped";
                    flourish_visualisation.update(opts)

                })
            })
    } catch (error) {
        console.log(error);
    }
}

fetchWeatherData();
