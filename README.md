Data taken from https://insights.stackoverflow.com/survey/2020

### Starting the task server (localhost)
```shell
# install the servev
npm install --global http-server
# start on http://127.0.0.1:8080
http-server
```

### Generating JSON data file
```shell
# go to raw data folder
cd raw_data
# install dependencies
npm install
# run the script
node csv2json.js
```