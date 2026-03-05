const http = require("http");

const userData =[
    {
name:'kaushiki kesarwani',
age:20,
email:'kaushikikes@gmail.com'
    },

    {
name:'Palak kesarwani',
age:20,
email:'Palakkes@gmail.com'
    },

    {
name:'Ananya kesarwani',
age:20,
email:'Ananyakes@gmail.com'
    }


]
http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/json');
res.write(JSON.stringify(userData));
res.end();
}).listen(4000);