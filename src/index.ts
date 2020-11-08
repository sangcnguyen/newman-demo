import newman from 'newman';
import collection from '../src/collection/Booking.collection.json';
import environment from '../src/enviroment/Booking Playground.environment.json'

const test = newman.run({
    collection: collection, 
    environment: environment,
    reporters: ['cli','htmlextra'],
    iterationCount:1,
    reporter: {
        htmlextra: {
            export: './public/report.html',
            logs: true,
            browserTitle: "Booking API Report",
            title: "Booking Report",
            showEnvironmentData: true,
            showGlobalData: true,
            showFolderDescription: true,
            timezone: "Asia/Ho_Chi_Minh"
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

export default test;