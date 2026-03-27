const fs = require('fs');

// fs.writeFileSync("./test.txt","hello my world"); 
fs.readFile("./test.txt","utf-8",(err,res)=>{ 
    if(err){
        console.error(err);
    }
    else{
        console.log(res);
    }
});

// const res = fs.readFileSync("./test.txt","utf-8");
// console.log(res);
