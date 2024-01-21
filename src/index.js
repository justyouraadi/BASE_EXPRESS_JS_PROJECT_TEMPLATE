const express = require("express");
const app = express();
const {PORT} = require("./config")

app.get('/',(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log(`successfully started the server on PORT : ${PORT}`);
});