import {stuffData} from "./file.mjs";

function parsingStuff(workersData, property) {
    const workersArray = [];
    flatStuff(workersData, workersArray);
    // console.log(workersData);
    // filterUniqueWorkers(workersArray);
    const uniqueWorkers = filterUniqueWorkers(workersArray);
    const sortedWorkersArray = uniqueWorkers.sort(byProperty(property));
}

function flatStuff(stiffStructure, accumulatingArray) {
    accumulatingArray.push(stiffStructure);
    if(stiffStructure.subordinators === null) {
        return;
    }
    stiffStructure.subordinators.forEach((subordinator) => {
        flatStuff(subordinator, accumulatingArray);

    })
}

// [[key, {}], [key, {}]]
function filterUniqueWorkers(workers) {
    const allWorkers = workers.map((worker) => {
        return [`${worker.firstName} ${worker.secondName}`, worker]
    });
    return Array.from(new Map(allWorkers).values());
    // const map = new Map(allWorkers);
    // console.log(map.values());
}

function byProperty(property = 'age') {
    return(a, b) => a[property] < b[property] ? 1 : -1;
    }

function printStuff(workers) {
    workers.forEach((workers) => {
        console.log(`${workers[0].firstName} ${workers[0].secondName} work here ${workers[0].yearsOfExperience`);
    }
}   

parsingStuff(stuffData)