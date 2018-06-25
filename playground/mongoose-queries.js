const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo'); 
const {User} = require('./../server/models/user'); 

// let id = '5b2fccd9d4069e03c1725d4c'; 
let userId = '5b2e55b1d7a2970352f6fdcf';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid'); 
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo); 
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found'); 
//     }
//     console.log('Todo by Id', todo); 
// }).catch((e) => console.log(e)); 

if (!ObjectID.isValid(userId)) {
    console.log('ID not valid'); 
}

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found'); 
    } 
    console.log('User', user);    
}).catch((e) => console.log(e)); 
