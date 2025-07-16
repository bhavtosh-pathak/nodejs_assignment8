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
let name="";

const __dirname = url.fileURLToPath(new URL(".",import.meta.url));
app.use("/assets",express.static(join(__dirname,"views")));
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.render('login');

})
app.post('/submit',(req,res)=>{
        res.render('image');
    });
app.listen(PORT,()=>{
    console.log(`started server on http://localhost:${PORT}`)
})
