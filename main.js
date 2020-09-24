'use strict';

//ПЕРВАЯ ЗАДАЧА
const firstRow = prompt('Введите первую строку');
const secondRow = prompt('Введите вторую строку');
const letter = prompt('Введите букву, которую будем считать в строках')
let firstRowLetter = 0;
let seconfRowLetter = 0;

function getRow(firstRow, secondRow) {
  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow.charAt(i) == letter) {
      firstRowLetter++;
    }
  }
  for (let i = 0; i < secondRow.length; i++) {
    if (secondRow.charAt(i) == letter) {
      seconfRowLetter++;
    }
  }
  if (firstRowLetter > seconfRowLetter) {
    return firstRow;
  } else if (firstRowLetter < seconfRowLetter) {
    return secondRow;
  } else {
    alert('Кол-во букв в строках равно');
  }
}

alert(getRow(firstRow, secondRow));

//ВТОРАЯ ЗАДАЧА реализовать могу, но очень громоздко и по-видимому не очень правильно
// const phoneNumber = prompt('Введите номер телефона без пробелов и тире');

// function formattedPhone(phoneNumber) {
//   if (phoneNumber.length = 12) {
//     let correctPhoneNumber = phoneNumber.charAt(0) + и так далее через кучу вызовов символов и постоянную конкатенацию
//   }
// }
// console.log(formattedPhone(phoneNumber));