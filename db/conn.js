const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodedynamic",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("mongoose is connected....!");
}).catch((e)=>{
    console.log(e);
})