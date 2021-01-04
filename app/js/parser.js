"use strict"; // dbase.js
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
  var tAreas = document.querySelectorAll('main .textarea-wrapper textarea');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tAreas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tArea = _step.value;
      tArea.value = '';
      tArea.contentEditable = "false";
      console.log("tArea", tArea);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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