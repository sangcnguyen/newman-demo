import newman from 'newman';
import json from '../src/collection/sample-collection.json';

const test = newman.run({
    collection: json, 
    reporters: ['htmlextra'],
    iterationCount:1,
    reporter: {
        htmlextra: {
            export: './report.html',
            logs: true,
            showOnlyFails: true,
            noSyntaxHighlighting: true,
            testPaging: true,
            browserTitle: "My Newman report",
            title: "My Newman Report",
            titleSize: 4,
            omitHeaders: true,
            skipHeaders: "Authorization",
            hideRequestBody: ["Login"],
            hideResponseBody: ["Auth Request"],
            showEnvironmentData: true,
            skipEnvironmentVars: ["API_KEY"],
            showGlobalData: true,
            skipGlobalVars: ["API_TOKEN"],
            skipSensitiveData: true,
            showMarkdownLinks: true,
            showFolderDescription: true,
            timezone: "Australia/Sydney"
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

export default test;