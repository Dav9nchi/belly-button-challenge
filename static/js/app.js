// 1. Set up URL where we are going to get the data from
let url ="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// 2. Get data From JSON for Charts (Metadata, Hbar, Bubble)
d3.json(url).then(function(data) 

    // 2.1 Find the "Drop Down Menu" under the Test Subject ID No. inside of HTML
    {let IDNumber =  d3.select("#selDataset")

        // 2.2 Get the METADATA(ID,Ethnicity,Gender,Age,Location,Belly Button,Wfreq) from JSON and STORE it in a VARIABLE
         meta_data = data.metadata

        // 2.3 Get the SAMPLES DATA(ID^otu_ids^Sample_values^otu_labels)from JSON and STORE it in a VARIABLE
         samples = data.samples

    // 2.1.1 Reference Each ID from NAMES inside of JSON, 
    // Continue... Reference the Drop Down menu (IDNumber) and Append an OPTION in the HTML
    // Continue... Add the ID text ".text(id)" of each ID reffered from NAMES
    // Coninue...  Add Each ID as a Value of the Drop Down menu.
    data.names.forEach((id) => {IDNumber.append("option").text(id).property("value", id)})

    // meta_data[0] inside of metaData FUNCTION refers to the First DICTIONARY of the JSON METADATA to create the metadata Chart
    metaData(meta_data[0])

    // samples[0] inside of hbarChart FUNCTION refers to the First DICTIONARY of the JSON SAMPLES to create the HBAR Chart
    hbarChart(samples[0])

    // samples[0] inside of bubbleChart FUNCTION refers to the First DICTIONARY of the JSON SAMPLES to create the bubbleChart
    bubbleChart(samples[0])})

// "optionChanged" FUNCITON change the DROPDOWN MENU, update & display the 3 different charts based on the selected ID
function optionChanged(value)
    {let Sample_info=      samples.find((item) => item.id === value)
     let Demographic_Info= meta_data.find((item) => item.id == value)

    // Getting the Information for Metadata
    metaData(Demographic_Info)

    // Getting the Information for Bar Chart
    hbarChart(Sample_info)

    // Getting the Information for Bubble Chart
    bubbleChart(Sample_info)}

// "metaData" FUNCTION incorporate Demographic_Info with their 7 values (ID,Ethnicity,Gender,Age,Location,Belly Button,Wfreq) to be display in the metadata chart
function metaData(Demographic_Info) 
    {let IDselect = d3.select("#sample-metadata")
    IDselect.html(` <strong> ID:       </strong>         ${Demographic_Info.id}            <br> <hr>
                    <strong> Ethnicity:</strong>         ${Demographic_Info.ethnicity}     <br> <hr>
                    <strong> Gender:   </strong>         ${Demographic_Info.gender}        <br> <hr>
                    <strong> Age:      </strong>         ${Demographic_Info.age}           <br> <hr>
                    <strong> Location: </strong>         ${Demographic_Info.location}      <br> <hr>
                    <strong> Belly Button Type:</strong> ${Demographic_Info.bbtype}        <br> <hr>
                    <strong> Wfreq:    </strong>         ${Demographic_Info.wfreq}`)}

// Create "hbarChart" FUNCTION and incorporate Sample_info with values as (sample_values,otu_ids & otu_labels) and specific adjustments as (slice, reverse) to be display in Horizontal Bar Chart
function hbarChart(Sample_info) 
    {let sample_values =    Sample_info.sample_values.slice(0, 10).reverse()
     let otu_ids =          Sample_info.otu_ids.slice(0, 10).reverse().map((item) => `OTU ${item}`)
     let otu_labels =       Sample_info.otu_labels.slice(0, 10).reverse()

    Hbar = {x:    sample_values,
            y:    otu_ids,
            text: otu_labels,
            type: "bar",
            orientation: "h"}
    let chart =  [Hbar]
    let layout = {  title: "Top 10 OTUs for Current ID",
                    height: 500,
                    width: 600}
    Plotly.newPlot("bar", chart, layout)}

// Create "bubbleChart" FUNCTION incorporate Sample_info with values as (sample_values,otu_ids & otu_labels)  to be display in the Bubble chart
function bubbleChart(Sample_info) 
    {let otu_ids =                     Sample_info.otu_ids;
    let  sample_values =               Sample_info.sample_values;
    let  marker_size_sample_values =   Sample_info.sample_values;
    let  color_otu_ids =               Sample_info.otu_ids;
    let  text_otu_labels =             Sample_info.otu_labels;

    Bubble = {x:    otu_ids,
              y:    sample_values,
              text: text_otu_labels,
              mode: "markers",
              marker:{type: "scatter", 
                      color: color_otu_ids, 
                      size: marker_size_sample_values}}
    let chart = [Bubble]
    let layout = {x: {title: { text: "OTU ID" }},
                      title: 'Bubble Chart for Current ID'}
    Plotly.newPlot("bubble", chart, layout)}