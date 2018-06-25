const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo'); 
const {User} = require('./../server/models/user'); 

// Mongoose give us 3 method to remove 
// Todo.remove()

// Todo.remove({}).then((result) => {
//     console.log(result); 
// });

//Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5b31283387db97f48f5cd6fc'}).then((todo) => {
    console.log(todo); 
})

//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5b31283387db97f48f5cd6fc').then((todo) => {
//     console.log(todo); 
// });