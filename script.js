// let numberEnter = prompt("enter month name");
//
// let daysTotal;
// console.log(numberEnter);
//
// switch (numberEnter) {
//     case "january":
//         daysTotal = "31";
//         break;
//     case "february":
//         daysTotal = "29";
//         break;
//     case 'march':
//         daysTotal = "31";
//         break;
//     case "april":
//         daysTotal = "30";
//         break;
//     case "may":
//         daysTotal = "31";
//         break;
//     case "june":
//         daysTotal = "30";
//         break;
//     case "july":
//         daysTotal = "30";
//         break;
//     case"august":
//         daysTotal = "30";
//         break;
//     case"september":
//         daysTotal = "36";
//         break;
//     case"october":
//         daysTotal = "306";
//         break;
//     case "november":
//         daysTotal = "34";
//         break;
//     case "december":
//         daysTotal = "30";
//         break;
//     default:
//         daysTotal = "unknown word";
//         break;
// }
// //
//
// let num = 1;
// let word;
// switch (num) {
//     case 1:
//         word = 'one';
//         break;
//     case 2:
//         word = 'two';
//         break;
//     case 3:
//         word = 'three';
//         break;
//     default:
//         word = 'unknown';
//         break;
// }
// alert(daysTotal + " days in this month.");


/* просим пользователя ввести число.*/
//
// let numberVar = prompt("Введите любое число.")
// function integerCheck(number) {
//
//     return number === 0 ? "Число равно нулю"
//         : number > 0 ? "Число положительное"
//             : number < 0 ? "Число отрицательное"
//                 : "Недопустимые данные";
//
// }
//
// /* Проверяем полученные данные. Плюсик нужен, чтоб преобразовать строку в число. Результат проверки сохраняем в переменную testResult и выводим её в alert().*/
//
// let testResult = integerCheck(+numberVar);
//
// alert(testResult);


function addFunction() {
    let wife = document.getElementById('womanW').value;
    let children = document.getElementById('childN').value;
    let country = document.getElementById('targetC').value;
    let year = document.getElementById('futureY').value;

    document.getElementById("joker").innerHTML = "In " + year + " you will be in " + country + " with your beautiful wife " + wife + " and " + children + " children!!!";

    document.querySelector(".joker__wrapper").style.display = "block";
}


// function Oracle(wife, children, country, year) {
//
// }
//
// let joke = Oracle(woman, childNumber, targetCountry, futureYear);

//
// function test() {
//
//     alert(`The function 'test' is executed`);
// }
//
// console.log(woman);