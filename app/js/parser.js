"use strict";
// parser.js
// Є два підходи:
// 1. чистий regexp
// 2. посимвольний перебір рядка
// зробити тренувальний текст!!!
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES DECLARATION ↓↓↓ */
/* ↑↑↑ /VARIABLES DECLARATION ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ FUNCTIONS DECLARATION ↓↓↓ */
  /**
   * description
   * @param  {type} name description
   * @return {type} description
   */

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

    // console.log("str", str);
    // console.log("str.length", str.length);

    let pugTextArea = document.getElementById('pugText');

    // початок абзацу
    pugTextArea.value = '    p\n      span.btext ';

    for (let i = 0; i < str.length; i++) {

      // наступний абзац
      if ( str[i].match(/\n/) ) {
        pugTextArea.value += '\n    p\n      span.btext ';
      }

      // відкривається дужка
      if ( str[i].match(/\(/) ) {
        console.log('відкривається дужка');
        pugTextArea.value += '(\n      |\n      |';
      }

      // додати символ, якщо це не перевід рядка і не дужка (
      if ( !str[i].match(/\n/) ) {
        pugTextArea.value += str[i];
      }

      // if( char.match(/[([^\\n])\p{P}\w\säüöß]/iu) ) {
      //   pugTextArea.value += char;
      // }
      // if( char.match(/\p{P}/iu) ) {

      // }
    }
  }
/* ↑↑↑ /FUNCTIONS DECLARATION ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////

