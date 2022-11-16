// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a, b) {
//     area = a * b
//     console.log(c)
//     return area
// }
// rectangle(7, 3)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area_radius(radius){
//     area = 3.14 * radius ** 2
//     console.log(area)
//     return area
// }
// area_radius(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area_cylinder(height, radius) {
//     area = 2 * 3.14 * radius * (height + radius)
//     console.log(area)
//     return area
// }
// area_cylinder(4, 5)

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arr_output(arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// arr_ = [1, 2, 3, 4, 'qqq', true, null]
// arr_output(arr_)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par_text(text){
//     document.write(`<p>`)
//     document.write(text)
//     document.write(`</p>`)
// }
// par_text('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// list('qwerty')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list_any_li(text, how_many){
//     document.write(`<ul>`)
//     for (let i = 0; i < how_many; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list_any_li('qwerty', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arr_list(arr) {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//let arr = [1, 2, 'rr', true,]
// arr_list(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function object(arr) {
//     for (let arrElement of arr) {
//         document.write(`<div>`)
//             document.write(`${arrElement.id} ${'name:'} ${arrElement.name} ${`<br>`} ${'age:'} ${arrElement.age}`)
//             document.write(`<hr>`)
//         document.write(`</div>`)
//     }
// }
// let arr_obj = [
//     {
//         id: 1,
//         name: 'Oleksiy',
//         age: 18
//     },
//     {
//         id: 2,
//         name: 'Sasha',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Vasya',
//         age: 23
//     }
// ]
// object(arr_obj)

// - створити функцію яка повертає найменьше число з масиву
// function min(arr) {
//     let min_num = arr[0]
//     for (let arrElement of arr) {
//         if (arrElement < min_num){
//             min_num = arrElement
//         }
//     }
//     console.log(min_num)
//     return min_num
// }
// let arr_num = [11, 2, 5, 6, 3, 75, -54, 8]
// min(arr_num)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(arr) {
//     let suma = 0
//     for (let arrElement of arr) {
//         suma = arrElement + suma
//     }
//     console.log(suma)
//     return suma
// }
//
// let arr_suma = [1, 2, 10]
// sum(arr_suma)