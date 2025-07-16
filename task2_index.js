import express from 'express';
import dotenv from 'dotenv';
import url from 'url';
import {join} from 'path';
import { parse } from 'querystring';

dotenv.config();
const app=express();
app.use(express.urlencoded({extended: false}));
const PORT= process.env.PORT;
let email="";
let password="";
let name="";

const __dirname = url.fileURLToPath(new URL(".",import.meta.url));
app.use("/assets",express.static(join(__dirname,"views")));
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.render('login');

})
app.post('/submit',(req,res)=>{
    const {email,password}=req.body;
    const name = email.split('@')[0];
    if(email==='bhavtosh@mail.com' && password==='1234'){
        res.render("dashboard",{uname:name});
    }
    else{
        res.send("this is a custom error page :401");
    }
})
app.listen(PORT,()=>{
    console.log(`started server on http://localhost:${PORT}`)
})
