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
        let busNo = spArr[0].trim();
        let start = spArr[1].replace('[', '').replace(']', '').trim();
        let stopsCSV = spArr[spArr.length - 1];
        let end = spArr[spArr.length - 2].replace('[', '').replace(']', '').trim();

        let stopsArr = stopsCSV.split(',').map((val) => val.trim());

    });

    let busCode = '12A';
    db.collection('busses').find({
        bus: busCode
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

        db.close();
    })

})