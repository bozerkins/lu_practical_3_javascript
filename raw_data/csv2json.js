const csv = require('csv-parser');
const fs = require('fs');

let list = [];
fs.createReadStream(__dirname+'/survey.csv')
  .pipe(csv())
  .on('data', (row) => {
    // don't save all the data
    if (list.length === 532) {
      return;
    }
    row.CreatedAt = randomDate(new Date(2020, 01, 01), new Date(), 0, 24).getTime();
    list.push(JSON.stringify(row));
  })
  .on('end', () => {
      let path = __dirname + '/../task/survey.json';
      fs.writeFileSync(path, list.join("\n") + "\n");
      console.log(`Survey data saved into ${path}`);
  });

function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}