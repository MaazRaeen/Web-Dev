const fs=require("fs");
fs.writeFile("message.txt", "Hello from pNodeJs!", (err)=>{
    if(err) throw err;
    console.log("file saved success fully");
});