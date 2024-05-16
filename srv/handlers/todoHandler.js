const cds = require("@sap/cds");

// ------- Three ways to implement Custom logic
// 1. Javascript Way
// 2. Using the cds.service.impl() Method
// 3. Using the cds.ApplicationSerivce     <------- Best Practise

// 1. Javascript way of implementing Custom Logic
// module.exports = function (){
//     // START OF - Post - TodoLists - Handler
//     this.before("READ", "ToDoLists", async (req) => {
//         console.log("Input data can be validated");
//     });
// }

// 2. Using the cds.service.impl() Method
// module.exports = cds.service.impl(async function() {

//     // START OF - Post - TodoLists - Handler
//     this.before("POST", "ToDoLists", async (req) => {
//         console.log("Input data can be validated");
//     });

//     this.on("POST", "ToDoLists", async (req, next) => {

//         console.log("Data modification can be done here!!!");
//         return next();
//     });

//     this.after("POST", "ToDoLists", async (req) => {
//         console.log("Data can be Enriched");
//     });

//     // END OF - Post - TodoLists - Handler
// })


// 3. Using the cds.ApplicationSerivce     <------- Best Practise
module.exports = class MyCatalogServices extends cds.ApplicationService {
    init(){
        this.before("READ", "ToDoLists", async (req) => {
            console.log("For validating the inputs ")
        })

        this.on("aCalculate_Estimation", async () => {
            console.log("Custom action is called and triggered!!!");
        })
        return super.init()
    }
  }
  
