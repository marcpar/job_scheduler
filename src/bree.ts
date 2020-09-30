import Bree from "bree";
console.log(123);
const bree = new Bree({
    jobs: [

        {
            name: 'test',
            worker: {
                workerData: {
                    foo: 'kris',
                    beep: 'boop'
                }
            },

            // cron : '* * * * *'
            // timeout : '30s' //run the script after 30 seconds from the start
        },
        {
            name: 'sendSms',
            worker: {
                workerData: {
                    mall: 'Mall A'
                }
            },
            interval: "10s"
        },
        {
            name: 'sendSmsa',
            path: "./jobs/sendSms.js",
            worker: {
                workerData: {
                    mall: 'Mall B'
                }
            },
            interval: "5s"
        }
    ]
})

export default bree;
