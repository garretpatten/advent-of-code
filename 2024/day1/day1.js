// Node Dependencies
const fs = require('fs');

function solve() {
    const leftList = [];
    const rightList = [];

    const inputMetadata = fs.readFileSync('./input.txt', 'utf8');
    let items;
    let delimiter = '   ';
    for (let line of inputMetadata.split('\n')) {
        if (line.indexOf(delimiter) !== -1) {
            items = line.split('   ');
            leftList.push(Number(items[0]));
            rightList.push(Number(items[1]));
        }
    }

    const sortedLeftList = leftList.sort();
    const sortedRightList = rightList.sort();

    let acc = 0;
    for (let i = 0; i < leftList.length; i++) {
        acc += Math.abs(sortedLeftList[i] - sortedRightList[i]);
    }

    console.log('The solution is: ' + acc);
    return acc;
}

solve();
