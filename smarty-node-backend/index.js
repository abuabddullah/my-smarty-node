/* onsole.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 11 ||Module 64 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 64-1,2,3 installing node app in projects    `);




const express = require('express')
const app = express()
const port = process.env.PORT || 5000;  // process.env.PORT is Heroku's port

// declare node route
app.get('/', (req, res) => {
  res.send('Hello from my smarty node')
})

// command line console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




console.log(`   // **************************  64-1,2,3 installing node app in projects  `);

 */







// console.log(`       // ************************** 64-3,4,5 creating own node API in projects and loading it in the front end      `);



/* 
const express = require('express')
const cors = require('cors') // sharing data for frontend use
const app = express()
const port = process.env.PORT || 5000;  // process.env.PORT is Heroku's port

app.use(cors()) // sharing data for frontend use

// declare node route
app.get('/', (req, res) => {
  res.send('Hello from my smarty node')
})


//creating a users array of objects
const users = [
    { id: 1, name: 'John', email: 'john@cena.com' },
    { id: 2, name: 'Peter', email: 'peter@cena.com' },
    { id: 3, name: 'Paul', email: 'paul@cena.com' },
    { id: 4, name: 'Ringo', email: 'ringo@cena.com' },
    { id: 5, name: 'George', email: 'george@cena.com' },
]


// declare new users route and sending the users array in the response
app.get('/users', (req, res) => {
  res.send(users)
})


// declare single user by neste-routing and sending the user/id in the response
app.get('/user/:id', (req, res) => {
    console.log(req.params); // watch id  { id: "5000/user/typedAfter" } in console 
    let id = parseInt(req.params.id); // get id = "5000/user/typedAfter" in console 
    let user = users.find(user => user.id === id); // find the user with the id = "5000/user/typedAfter"
    res.send(user)
})

// command line console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 */



// console.log(`   // **************************   64-3,4,5 creating own node API in projects and loading it in the front end    `);











// console.log(`       // ************************** 64-6,7 creating input fields in frontend to add new user in the backend server and load again the users from backend in the frontend    `);



/* 
const express = require('express')
const cors = require('cors') // sharing data for frontend use
const app = express()
const port = process.env.PORT || 5000;  // process.env.PORT is Heroku's port

app.use(cors()) // sharing data for frontend use
app.use(express.json()) // parse json data

// declare node route
app.get('/', (req, res) => {
  res.send('Hello from my smarty node')
})


//creating a users array of objects
const users = [
    { id: 1, name: 'John', email: 'john@cena.com' },
    { id: 2, name: 'Peter', email: 'peter@cena.com' },
    { id: 3, name: 'Paul', email: 'paul@cena.com' },
    { id: 4, name: 'Ringo', email: 'ringo@cena.com' },
    { id: 5, name: 'George', email: 'george@cena.com' },
]


// declare new users route and sending the users array in the response
app.get('/users', (req, res) => {
  res.send(users)
})


// declare single user by neste-routing and sending the user/id in the response
app.get('/user/:id', (req, res) => {
    console.log(req.params); // watch id  { id: "5000/user/typedAfter" } in console 
    let id = parseInt(req.params.id); // get id = "5000/user/typedAfter" in console 
    let user = users.find(user => user.id === id); // find the user with the id = "5000/user/typedAfter"
    res.send(user)
})


// create a get.post to recieve the data from frontend by "request"
app.post('/user', (req, res) => {
    console.log(req.body); // watch  in console
    const user = req.body; // get the data from frontend
    user.id = users.length + 1; // add id to the user
    users.push(user); // push the user to the users array
    res.send(user); // send the user to the frontend
})


// command line console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 */



// console.log(`   // **************************   64-6,7 creating input fields in frontend to add new user in the backend server and load again the users from backend in the frontend    `);










// console.log(`       // ************************** 64-7 applying serach querry in backend database     `);




const express = require('express')
const cors = require('cors') // sharing data for frontend use
const app = express()
const port = process.env.PORT || 5000;  // process.env.PORT is Heroku's port

app.use(cors()) // sharing data for frontend use
app.use(express.json()) // parse json data

// declare node route
app.get('/', (req, res) => {
  res.send('Hello from my smarty node')
})


//creating a users array of objects
const users = [
    { id: 1, name: 'John paul', email: 'john@cena.com' },
    { id: 2, name: 'Peter', email: 'peter@cena.com' },
    { id: 3, name: 'Paul', email: 'paul@cena.com' },
    { id: 4, name: 'Ringo paul', email: 'ringo@cena.com' },
    { id: 5, name: 'George', email: 'george@cena.com' },
]


// declare new users route and sending the users array in the response
app.get('/users', (req, res) => {
  console.log(req.query); // watch search keys in console
  let searchedName = req.query.name.toLowerCase(); // get search keys for name from website

if (searchedName) { // if there is a search key for name
    let matchedUsers = users.filter(user => user.name.toLowerCase().includes(searchedName)); // filter the users array by name
    res.send(matchedUsers); // send the filtered users array to the frontend
} else {
    res.send(users); // send the users array to the frontend
  
}
})


// declare single user by neste-routing and sending the user/id in the response
app.get('/user/:id', (req, res) => {
    console.log(req.params); // watch id  { id: "5000/user/typedAfter" } in console 
    let id = parseInt(req.params.id); // get id = "5000/user/typedAfter" in console 
    let user = users.find(user => user.id === id); // find the user with the id = "5000/user/typedAfter"
    res.send(user)
})


// create a get.post to recieve the data from frontend by "request"
app.post('/user', (req, res) => {
    console.log(req.body); // watch  in console
    const user = req.body; // get the data from frontend
    user.id = users.length + 1; // add id to the user
    users.push(user); // push the user to the users array
    res.send(user); // send the user to the frontend
})


// command line console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// console.log(`   // **************************   64-7 applying serach querry in backend database  `);




