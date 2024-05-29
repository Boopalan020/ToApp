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
        this.before("GET", "ToDoLists", async (req, next) => {
            console.log("For validating the inputs ", next);

        });

        this.on("GET", "ToDoLists", async (req, next) => {
            console.log("While reading", req);
            const {ToDoLists} = cds.entities();
            // *********************************** simple query ****************************************************
            // To get a record specific to a key
            // const result = await SELECT.from(ToDoLists).byKey('e8346f9d-0c3a-48a8-9b97-dc48d9674a12');
            // *********************************** simple query ****************************************************



            // *********************************** Start of WHERE clause ********************************************
            // const result = await SELECT.from(ToDoLists).where({TargetDate : '2024-09-11'});
            
            // OR condition in WHERE clause
            // const result = await SELECT.from(ToDoLists).where(`Priority='1' or Priority='2'`);
            // const result = await SELECT.from(ToDoLists).where({or:{Priority:{'>' : '1'},TargetDate:'2024-09-11' }}); // not working sometimes

            // AND condition in WHERE clause
            // const result = await SELECT.from(ToDoLists).where(`Priority='1' and TargetDate='2024-09-11'`);
            // const result = await SELECT.from(ToDoLists).where({and:{ Priority:{'>': '1'}, Priority:{'<':'3'} }});

            // BETWEEN, AND, IN operators with multiple non-key fields in WHERE clause
            // const result = await SELECT.from(ToDoLists).where({Priority:{ between: '1', and: '3'}, TargetDate:{in : ['2024-09-11']}});

            // ***********************************  End of WHERE clause ********************************************



            // *********************************** Start of RETRIEVE ONLY FEW FIELDS ********************************************
            //
            // const result = await SELECT.from(ToDoLists).columns(['TaskID','TaskDescription']);
            const result = await SELECT.from(ToDoLists).columns(r=>{r.TaskID, r.TaskDescription});
            //
            // ***********************************   End of RETRIEVE ONLY FEW FIELDS ********************************************
            console.log(result);
            return result;
        });

        this.after("GET", "ToDoLists", async (data) => {
            console.log("After reading", data);
        });

        this.on("aCalculate_Estimation", async () => {
            console.log("Custom action is called and triggered!!!");
        });
        return super.init()
    }
  }
