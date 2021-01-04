"use strict";
// dbase.js
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES DECLARATION ↓↓↓ */
  // let keyForCompare    = 'author',
  //     bookList         = document.querySelector('.books-list'),
  //     ls               = localStorage,
  //     isSerchFieldOpen = false,
  //     bookListType;
/* ↑↑↑ /VARIABLES DECLARATION ↑↑↑ */

/* ↓↓↓ MAIN LOGIC ↓↓↓ */

/* ↑↑↑ /MAIN LOGIC ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ FUNCTIONS DECLARATION ↓↓↓ */
  /**
   * здійснює лексикографічне сортування масиву об'єктів phoneBook за ключем,
   * записаним в змінній keyForCompare
   * @param  {object} a об'єкт, елемент масиву
   * @param  {object} b об'єкт, елемент масиву
   * @return {[number]} результат порівняння
   */
  // function compare( a, b ) {
  //   return a[keyForCompare].localeCompare(b[keyForCompare]);
  // }

  function cleanTextArea(id) {
    document.querySelector('#' + id).value = '';
  }

  function cleanAllTextArea() {
    let tAreas = document.querySelectorAll('main .textarea-wrapper textarea');
    for (let tArea of tAreas) {
      tArea.value = '';
      tArea.contentEditable = "false";
      console.log("tArea", tArea);
    }
  }
/* ↑↑↑ /FUNCTIONS DECLARATION ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////

console.log(document.querySelector('.test p').isContentEditable);
document.querySelector('.test p').contentEditable = "true";
console.log(document.querySelector('.test p').isContentEditable);
function test() {
  console.log('test');
  document.querySelector('.test p').contentEditable = "false";
  console.log(document.querySelector('.test p').isContentEditable);
}

