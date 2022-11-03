//Notice we remove the "sync"
const { readFile, writeFile } = require("fs");

//In async we run the callback function only when we are done with the previous function

//We pass a call back function as a second parameter
//In the call back function we pass the error and the data

//TODO: test async and sync
console.log("start");

//TODO: provide the encoding or it will print the buffer
readFile('./content/first.txt', 'utf-8',(err,result)=>{
    //If there's an error return immediately back
    if(err){
        console.log(err);
        return;
    }
    // console.log(result)
    const first = result;
        //TODO: if we want to use the result of the first file we need to NEST the second file

    readFile('./content/second.txt', 'utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        // console.log(first,second);
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

// Before finishing the execution of the block, it will keep going with the next line!!
console.log("starting the next task ");

//Using async approach messes up the code quickly