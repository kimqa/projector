'use strict';

/*
1. Задача на селектори
Для сторінки з вебінару (https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html) напишіть селектори для наступних елементів:  

— для елементу з текстом 'Навігація по DOM дереву'

— для першого елементу <section>

— для елементу списку з текстом 'Пункт 5'

— для елементу з класом 'hatredLevelBlock'

Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.

    Приклад:
let spanWithClass = document.querySelector('.hatredLevelCounter');
 */

//для елементу з текстом 'Навігація по DOM дереву'
let headerTwo = document.querySelector('#headerTwo');

//для першого елементу <section>
let firstSectionElem = document.querySelector('section :first-child')

//для елементу списку з текстом 'Пункт 5'
let section5 = document.querySelector('ul li:nth-child(5)')

//для елементу з класом 'hatredLevelBlock'
let levelBlock = document.querySelector('.hatredLevelBlock');