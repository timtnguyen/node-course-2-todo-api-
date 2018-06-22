//const MongoClient = require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); 
    }
    console.log('Connected to MongoDB server'); 
    const db = client.db('TodoApp'); 
    
    // db.collection('Users').deleteMany({name: 'Huong Khuu'}).then((result) => {
    //     console.log(result); 
    // });
    // db.collection('Users').find({name: 'Tam Nguyen'}).toArray().then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2)); 
    // }); 

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b2c7b79eff708048cd6abaf')
    }).then((result) => {
        console.log(result); 
    }); 
    //db.close 

    //client.close(); // connect to mongodb 
});