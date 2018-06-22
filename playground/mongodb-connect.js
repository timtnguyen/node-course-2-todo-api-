//const MongoClient = require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); 
    }
    console.log('Connected to MongoDB server'); 
    const db = client.db('TodoApp'); 
 
    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false 
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err); 
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2)); 
    // })

    // db.collection('Users').insertOne({
    //     name: 'Huong Khuu', 
    //     age: 42,
    //     location: 'Sacramento'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err); 
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    client.close(); // connect to mongodb 
});