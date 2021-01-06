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

  function cleanAllTextArea() {
    let tAreas = document.querySelectorAll('main .textarea-wrapper textarea');
    for (let tArea of tAreas) {
      tArea.value = '';
      tArea.contentEditable = "false";
    }
  }

  function copy() {
    document.querySelector('#pugText').select();
    document.execCommand('copy');
    document.querySelector('#pugText').blur();
  }

  function convert() {
    let str = document.querySelector('#plainText').value;
    if (str == '') return;

    //
  }
/* ↑↑↑ /FUNCTIONS DECLARATION ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////

