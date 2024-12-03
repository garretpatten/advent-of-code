// Node Dependencies
const fs = require('fs');

function isReportSafe(report) {
    let reportArray = report.split(' ').map(Number);
    let reportArrayAsc = [...reportArray].map(Number).sort((a, b) => a - b);
    let reportArrayDesc = [...reportArray].map(Number).sort((a, b) => b - a);

    let reportArrayString = JSON.stringify(reportArray);
    if (reportArrayString != JSON.stringify(reportArrayAsc)
        && reportArrayString != JSON.stringify(reportArrayDesc)) {
        return false;
    }

    let difference;
    for (let i = 1; i < reportArray.length; i++) {
        difference = Math.abs(reportArray[i] - reportArray[i - 1]);
        if (difference < 1 || difference > 3) {
            return false;
        }
    }

        return true;
}

function solve() {
    const inputMetadata = fs.readFileSync('./input.txt', 'utf8');
    const reports = inputMetadata.split('\n');

    let acc = 0;
    for (let report of reports) {
        if (report.length > 0 && isReportSafe(report)) {
            acc++;
        }
    }

    console.log('The solution to part 1 is: ' + acc);
}

solve();
