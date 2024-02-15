# <center> Belly Button Challenge <center>

## Autor
> **David Castano.** David.castanoe@yahoo.com

## Description 
The Objective of this project is to build an interactive dashboard to explore the Belly Button Biodiversity dataset Links to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
We will Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. also you are welcome to create any layout that you would like for your dashboard. the step guide are divide into the following sections:

    1. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        1.1 Use `sample_values` as the values for the bar chart.
        1.2 Use `otu_ids` as the labels for the bar chart.
        1.3 Use `otu_labels` as the hovertext for the chart.

    2. Create a Bubble chart that displays each sample.
        2.1 Use otu_ids for the x values.
        2.2 Use sample_values for the y values.
        2.3 Use sample_values for the marker size.
        2.4 Use otu_ids for the marker colors.
        2.5 Use otu_labels for the text values.

    3. Display the sample metadata, i.e., an individual's demographic information.
        3.1 Display each key-value pair from the metadata JSON object somewhere on the page.

## GitHub Pages
https://dav9nchi.github.io/belly-button-challenge/

## Credits
> The research support to make this challenge succesfull comes from edX Tutors, Chat Gpt, AskBCS, Teachers, TA, Google.
