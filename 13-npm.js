// npm global command comes with node 
// npm --version

// local dependepcy - use it in this particular project
// npm i <packageName>

// global dependency use it in any project 
// npm install -g <packageName>


// package.json  - manifest file (stores important info about project/ packagae )
// manual approach (create package.json  in the root , create properties e.t.c)
// npm init (step by step ,press enter to skip )
// npm init -y (everything default)

const load = require('lodash')
const items =[1,[2,[3,[3]]]]
 const newItems =  load.flattenDeep(items)

 console.log(newItems);