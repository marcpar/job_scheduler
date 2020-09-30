import chalk from "chalk";
import figlet from "figlet";
import express from "express";

import envlist from "./config/env";
import bree from "./bree";

//BANNER
console.log(
    chalk.yellow(
        figlet.textSync(envlist.parsed.PROJECT, { horizontalLayout: 'default' })
    )
);


const app = express();
bree.start();

app.get("/", (req, res) => {
    console.log(bree);

    res.json("test");
});

app.get("/add", (req, res) => {
    // render the index template
    console.info("adding");
    bree.add({
        name: "boop", path: "./jobs/sendSms.js", interval: "2s", worker: {
            workerData: {
                mall: 'dynamic mall'
            }
        }
    });
    bree.start();
    res.json("test");
});

app.get("/remove", (req, res) => {
    // render the index template
    console.info("removing");
    bree.remove("boop")
    bree.start();
    res.json("test");
});



// start the express server
app.listen(envlist.parsed.PORT, () => {
    // tslint:disable-next-line:no-console
    console.info(`server started at PORT:${envlist.parsed.PORT}`);
});