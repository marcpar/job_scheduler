import chalk from "chalk";
import figlet from "figlet";
import envlist from "./config/env";
import express from "express";




//BANNER
console.log(
    chalk.yellow(
        figlet.textSync(envlist.parsed.PROJECT, { horizontalLayout: 'default' })
    )
);


const app = express();


app.get("/", (req, res) => {
    // render the index template
    res.json("test");
});

// start the express server
app.listen(envlist.parsed.PORT, () => {
    // tslint:disable-next-line:no-console
    console.info(`server started at PORT:${envlist.parsed.PORT}`);
});