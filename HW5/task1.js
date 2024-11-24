/*
1. Задача про обчислення різниці часу

Напишіть функцію яка буде буде приймати 3 параметри

— початкову дату (string)

— кінцеву дату (string)

— розмірність ('days',  'hours', 'minutes', seconds)

Функція повертатиме часовий період між цими датами згідно розмірності.

Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).

Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

Приклади:
 */
function durationBetweenDates(start= '01 Jan 1970', end = '01 Jan 1970', size = 'days') {
    const startDate = new Date(start);
    const endDate = new Date(end);
    let dif = Math.abs(startDate - endDate)
    switch (size) {
        case 'seconds':
            console.log(`${dif/1000} ${size}`);
            break;
        case 'minutes':
            console.log(`${dif/1000/60} ${size}`);
            break;
        case 'hours':
            console.log(`${dif/1000/60/60} ${size}`);
            break;
        case 'days':
            console.log(`${dif/1000/60/60/24} ${size}`);
            break;
        default:
            console.log(`${dif} ${size}`);


    }


}
durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'
durationBetweenDates()
