const fs=require("fs");
// fs.writeFile("message.txt", "Hello from pNodeJs!", (err)=>{
//     if(err) throw err;
//     console.log("file saved success fully");
// });
fs.readFile("./message.txt","utf8", (err, data)=>{
    if(err) throw err;
    console.log(data);
});