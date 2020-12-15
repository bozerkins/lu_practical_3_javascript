# Practical Task 3 - JavaScript
The data for this assignment is taken from https://insights.stackoverflow.com/survey/2020

Record in the dataset
```json 
{
   "Respondent":"15024",
   "Age":"31",
   "Country":"United States",
   "DatabaseWorkedWith":"MariaDB;Oracle",
   "OrgSize":"100 to 499 employees",
   "UndergradMajor":"Computer science, computer engineering, or software engineering",
   "WebframeWorkedWith":"ASP.NET;ASP.NET Core",
   "WorkWeekHrs":"35",
   "CreatedAt":1602441714725
}
```

## Task description

The task consists of several parts. **You can get a total of 5 points for this practical task.** 

- Loading the data into JavaScript (1p)
    - Use ```XMLHttpRequest``` or ```$.get``` functions
    - Load the data into an array of records (for easier further usage)
    - Each record is on it's on line (separated with ```\n```)
    - Each record is in JSON format
- Display amount of records in the dataset (1p)
    - Count amount of records received (should be ~500)
    - Place the count somewhere on the page
- Display the table with the data (1p)
    - The table should have 9 columns total (for each attribute in records)
    - ```CreatedAt``` field should be displayed in human readable format
- Create filters for the table (2p)
    - Date & Time filter by using ```CreatedAt``` field (use human-readable field format)
    - Create a drop-down filter for ```OrgSize``` field
    - Multi-select filer for ```DatabaseWorkedWith```. The field contains a list of items. 
- *Optional* - Complete those who want to practice JavaScript a bit more (0p)
    - Display more statistics about the dataset: age range, different databases in the dataset, different web frameworks in the dataset
    - Explore the dataset. That is an actual data from the survey about developers (and check the survey).
    - Create a form to add records to the page and display them in the table
    - Create a simple pagination for the table


## Task template

The template is located in the ```./task``` folder. 

The ```./task/index.html``` is the file where all the html is located and the entrypoint for the application.

The ```./task/app.js``` would contain all the relevant javascript.

The dataset with all the records is located in ```./task/survey.json```.

## Start the web-server (localhost)
```shell
# install the server
npm install --global http-server
# start on http://127.0.0.1:8080
http-server ./task
```