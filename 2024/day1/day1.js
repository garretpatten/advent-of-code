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

    console.log('The solution to part 1 is: ' + acc);

    let similarityAcc = 0;
    let similarityScore = 0;
    for (let leftItem of sortedLeftList) {
        if (sortedRightList.includes(leftItem)) {
            for (let rightItem of sortedRightList) {
                if (leftItem == rightItem) {
                    similarityAcc++;
                } else if (leftItem < rightItem) {
                    break;
                }
            }

            similarityScore += (leftItem * similarityAcc);
            similarityAcc = 0;
        }
    }

    console.log('The solution to part 2 is: ' + similarityScore);
}

solve();
