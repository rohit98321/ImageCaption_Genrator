
const app = require('./src/app')
const connectToDB = require('./src/db/db')

console.log(process.env.MONGODB_URL);

connectToDB();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})