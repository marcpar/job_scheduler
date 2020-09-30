import Bree from "bree";

const bree = new Bree({
    jobs: [

        {
            name: 'test',
            worker: {
                workerData: {
                    foo: 'bar',
                    beep: 'boop'
                }
            }
            interval: 30s,
            // cron : '* * * * *'
            // timeout : '30s' //run the script after 30 seconds from the start
        }
    ]
})

bree.start();