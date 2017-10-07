var MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect('mongodb://localhost:27017/paperless', function (err, database) {
    if (err) throw err

    db = database;

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('chennai-bus.txt')
    });

    lineReader.on('line', function (line) {
        let spArr = line.split('|');
        if (!spArr || spArr.length < 1) {
            return;
        }
        let busNo = spArr[0].trim();
        let start = spArr[1].replace(/\[/g, '').replace(/\]/g, '').trim();
        let stopsCSV = spArr[spArr.length - 2];
        let end = spArr[spArr.length - 3].replace(/\[/g, '').replace(/\]/g, '').trim();

        let stopsArr = stopsCSV.split(',').map((val) => val.trim());

        stopsArr.unshift(start);
        stopsArr.push(end);

        let busRecord = {
            bus: busNo,
            stops: stopsArr
        }
        console.log(busRecord)

        db.collection('busses').insert(busRecord)

    });

})