import { error } from "console";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([{ 
        message: " type the url: ", 
        name: "URL",
    }])
    .then((answers)=>{
        // console.log(answers);
        const url=answers.URL;
        var qr_svg=qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr-img.png"));
    })
    .catch((error)=>{
        if(error.isTtyError){
            console.log(error);
        }
        else{
            console.log("error not defined");
        }
    });