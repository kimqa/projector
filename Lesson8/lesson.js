// 'use strict';
//
// const taskInput = document.querySelector('.task-input');
// const tasksList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const form = document.querySelector('.create-task-form');
//
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (taskInput.value.trim() === '') {
//         return;
//     }
//     createSingleTaskElement(taskInput.value);
//     storeTaskInLocalStorage(taskInput.value);
//     taskInput.value = '';
// })
//
// function createSingleTaskElement(taskInput) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(taskInput));
//     tasksList.appendChild(li);
// }
//
// function storeTaskInLocalStorage(task) {
//     const tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//     const tasks = localStorage.getItem('tasks') !== null
//         ? JSON.parse(localStorage.getItem('tasks'))
//         : [];
//
//     tasks.forEach((task) => {
//         createSingleTaskElement(task);
//     })
// })
let test = ["6602ebc91ce46ba878053ebd","620b8de791286833a3165201","610a8a5e1dad417f08714564","60b8bc45027b191f582395ce","53d04d35eefe4410628b4568","616d7d7ef2520b00342630b2","65940a6cc62ee3ee0b0b95b2","62a33e8b93f49708750e0ad6","60acd8c813a42a2695016539","60b60dcc154094131c147f53","6229fcf93cbbf971e5513bb3","6213a10d3c5f53702d68935b","611f9a970f4fca31490a444b","60dc7b50679b9539063eeaa0","60a4cefec828ff70bb012710","5f0c285e75035f6c135df54a","61966a6316c6ed716a2f0071","665f2740d979954efe05b833","61a0fa2525d892417d2ea94e","53d04d35eefe4410628b4568","61fa76991893ab096119c5f9","60b77da72bb80c19d379c7a3","60dc86a86514cb37803c3ad1","620f858501cac71213521e97","60e830da69fa5e56546f1f39","6319ad3bc81a534b54002842","61966a6316c6ed716a2f0071","620f847af4dccf49960e0045","60a65669781c810fb83d57ed","61eac13f4e631252b8012f80","620f93db7d1b96185130d9a9","5ef1f8ea49ab2b7f8e26dc2e","620f94ba16815f78ec33245c","60a4cefec828ff70bb012710","659417b51defabf09f01c5ad","53d04d4eeefe4458638b4568","620f84d080a4bf201476c5a7","611246ad8ccd9619ec112efe","60acd8c813a42a2695016539","5f0c23e968cb9d0be212448d","620f85d790aebb09c81e25bc","620f86440e335b3890456159","610104b8d80aa631ac14665d","6405ec5a097a34c97c08fb59","61850a3de492f81b58006741","61a0ecb430a15152a435680d","61966a6316c6ed716a2f0071","62064676859bd06985225f25","60eed703145ef13af00eea22","620b75bc9f89ed3be20093d8","620f94ba16815f78ec33245c","6112457ee04fe0296b740087","60ab9711ded89d395e304ece","5f0c256367f8ea340506335c","60e572099570bc37390a518c","61716ac8e3a9f7095164cf72","60c3261e533fd046ea4cda43","6213a10d3c5f53702d68935b","60c3261e533fd046ea4cda43","53d04d74eefe44a5638b4568","620523766ee97d563c29a548","60928b9d59668b0adf03254b","60928b9d59668b0adf03254b","53d04d4eeefe4458638b4568","612f625d68a057306c359079","5ef1f8ea49ab2b7f8e26dc2e","62c2db9fc3027bbed8032f12","620f852a0e335b3890456128","6221d01cd2d05470d62bab33","610b943d3a3fbb0b31249d79","620b7511d1d84c712074cbc2","60b60dcc154094131c147f53","61fa76991893ab096119c5f9","53d04d74eefe44a5638b4568","671f525c67bc237ec00ea505","620f847af4dccf49960e0045","620b7565eec3d74cb77feaff","669d5aa0e5292d07740bdcdf","620f94ba16815f78ec33245c","61716ac8e3a9f7095164cf72","6114e7a8360b57242346e1ce","60b6149f2326292d0956445c","60818236c692720e0d634661","5f0c23e968cb9d0be212448d","5f116b3bff2cf87aeb288026","53d04d74eefe44a5638b4568","64103ce4969e18d9a7070263","61c1d82ca8d37e14a8057f32","5f0c27663e0b056324123247","61fa76991893ab096119c5f9","60b77da72bb80c19d379c7a3","60b6149f2326292d0956445c","60a65669781c810fb83d57ed","5f0c22431fdcf50fd3521a03","620a6b4c34ca0f20d15c4c7b","673c624acae8686a840726de","634e98e7b19790195009a5a7","66f42f3be27fd8dbd606183e","5835670c9b5e3637098b456a","62260b779494be6bc0181f97","5835670c9b5e3637098b456a"]
console.log(test.length);
let test2 = [
    "61eac13f4e631252b8012f80",
    "6213a10d3c5f53702d68935b",
    "61966a6316c6ed716a2f0071",
    "634e98e7b19790195009a5a7",
    "61716ac8e3a9f7095164cf72",
    "61a0ecb430a15152a435680d",
    "6213a10d3c5f53702d68935b",
    "64103ce4969e18d9a7070263",
    "60dc86a86514cb37803c3ad1",
    "5f0c23e968cb9d0be212448d",
    "6114e7a8360b57242346e1ce",
    "53d04d4eeefe4458638b4568",
    "611246ad8ccd9619ec112efe",
    "53d04d4eeefe4458638b4568",
    "620f94ba16815f78ec33245c",
    "60acd8c813a42a2695016539",
    "620a6b4c34ca0f20d15c4c7b",
    "5ef1f8ea49ab2b7f8e26dc2e",
    "6229fcf93cbbf971e5513bb3",
    "620f852a0e335b3890456128",
    "610b943d3a3fbb0b31249d79",
    "5ef1f8ea49ab2b7f8e26dc2e",
    "60e572099570bc37390a518c",
    "60dc7b50679b9539063eeaa0",
    "53d04d35eefe4410628b4568",
    "61a0fa2525d892417d2ea94e",
    "60c3261e533fd046ea4cda43",
    "53d04d35eefe4410628b4568",
    "611f9a970f4fca31490a444b",
    "53d04d74eefe44a5638b4568",
    "66f42f3be27fd8dbd606183e",
    "620f84d080a4bf201476c5a7",
    "60b77da72bb80c19d379c7a3",
    "61fa76991893ab096119c5f9",
    "60b6149f2326292d0956445c",
    "620f85d790aebb09c81e25bc",
    "53d04d74eefe44a5638b4568",
    "61716ac8e3a9f7095164cf72",
    "620f847af4dccf49960e0045",
    "612f625d68a057306c359079",
    "659417b51defabf09f01c5ad",
    "65940a6cc62ee3ee0b0b95b2",
    "60928b9d59668b0adf03254b",
    "620b7565eec3d74cb77feaff",
    "60818236c692720e0d634661",
    "60a4cefec828ff70bb012710",
    "60a65669781c810fb83d57ed",
    "620b7511d1d84c712074cbc2",
    "5f0c256367f8ea340506335c",
    "6602ebc91ce46ba878053ebd",
    "61850a3de492f81b58006741",
    "620f94ba16815f78ec33245c",
    "6319ad3bc81a534b54002842",
    "61966a6316c6ed716a2f0071",
    "60b60dcc154094131c147f53",
    "620f93db7d1b96185130d9a9",
    "620523766ee97d563c29a548",
    "6405ec5a097a34c97c08fb59",
    "616d7d7ef2520b00342630b2",
    "5f0c22431fdcf50fd3521a03",
    "671f525c67bc237ec00ea505",
    "620b75bc9f89ed3be20093d8",
    "60a65669781c810fb83d57ed",
    "61fa76991893ab096119c5f9",
    "60928b9d59668b0adf03254b",
    "620f847af4dccf49960e0045",
    "61fa76991893ab096119c5f9",
    "5835670c9b5e3637098b456a",
    "665f2740d979954efe05b833",
    "5f116b3bff2cf87aeb288026",
    "62a33e8b93f49708750e0ad6",
    "60eed703145ef13af00eea22",
    "60b60dcc154094131c147f53",
    "5835670c9b5e3637098b456a",
    "61966a6316c6ed716a2f0071",
    "6221d01cd2d05470d62bab33",
    "5f0c27663e0b056324123247",
    "669d5aa0e5292d07740bdcdf",
    "620f86440e335b3890456159",
    "620b8de791286833a3165201",
    "60e830da69fa5e56546f1f39",
    "60b77da72bb80c19d379c7a3",
    "620f94ba16815f78ec33245c",
    "60c3261e533fd046ea4cda43",
    "60acd8c813a42a2695016539",
    "5f0c285e75035f6c135df54a",
    "62c2db9fc3027bbed8032f12",
    "610a8a5e1dad417f08714564",
    "610104b8d80aa631ac14665d",
    "6112457ee04fe0296b740087",
    "62064676859bd06985225f25",
    "62260b779494be6bc0181f97",
    "61c1d82ca8d37e14a8057f32",
    "673c624acae8686a840726de",
    "60a4cefec828ff70bb012710",
    "5f0c23e968cb9d0be212448d",
    "53d04d74eefe44a5638b4568",
    "60b6149f2326292d0956445c",
    "60ab9711ded89d395e304ece",
    "60b8bc45027b191f582395ce",
    "620f858501cac71213521e97"
];
console.log(test2.length)

const test = "{test : test}"
const test1 = JSON.parse(test);