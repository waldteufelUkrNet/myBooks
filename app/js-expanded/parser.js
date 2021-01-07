"use strict";
// parser.js
// Є два підходи:
// 1. чистий regexp
// 2. посимвольний перебір рядка
// зробити тренувальний текст!!!
// в дужках можуть бути:
//   1. тільки мова оригіналу - дужка є частиною оригінального тексту - усе жирне
//   2. простий переклад (тільки кацапська мова) - не жирний
//   3. переклад зі словами (переклад, слово - переклад) - переклад не жирний, переклад слів - не жирний курсив
//   4.слова з перекладом - не жирний курсив
//   
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES DECLARATION ↓↓↓ */
  let testString = `Ich stellte also den Projektor (итак, я установила проектор) auf die Fensterbank (das Fenster, die Bank – скамья, лавка), legte den Drakulafilm ein (вложила = поставила дракула-фильм; einlegen) und besorgte eine Verlängerungsschnur (и достала удлинитель; lang – длинный, verlängern – удлинять, die Schnur, besorgen – доставать, раздобыть), weil ich sonst nicht bis an die Steckdose kam (так как иначе я не доставала до розетки; kommen-kam-gekommen – доходить, stecken – вставлять, die Dose – розетка). Dann konnte ich mühelos (тогда я смогла легко (т.е. без усилий); die Mühe – усилие) Drakulas Gesicht (лицо дракулы; das Gesicht) auf die Fassade des Hochhauses (на фасад высотного здания) werfen (бросить = спроецировать). Drakula war dort (дракула был там) mindestens (по меньшей мере) dreimal so groß (втрое больше) wie in einem echten Kino (чем в настоящем кино; das Kíno). Nur war meine Lampe im Projektor nicht stark genug (только моя лампа в проекторе не была достаточно сильной). Sein Gesicht erschien also (его /дракулы/ лицо появлялось, таким образом; erscheinen-erschien-erschienen) wie im Nebel (как в тумане; der Nebel). Verschwommen (расплывчато; verschwimmen – расплываться, schwimmen-schwamm-geschwommen – плыть). 
Das machte die Geschichte (это сделало историю) erst mal (сначала = как раз-то) richtig unheimlich (по-настоящему, жуткой).
***
«Wieso (почему)?» fragte ich (спросила я). «Hat einer den Löwen auf Sie losgelassen (разве кто-то спустил на Вас львов)?»
Sie musterte mich von oben bis unten (она осмотрела меня с головы до ног; mustern – осматривать; обозревать; разглядывать; окидывать взглядом) und überlegte (и обдумывала), ob ich eine Antwort wert war (достойна ли я была ответа; wert – стоящий), dann hauchte sie (потом она прошептала) kaum hörbar (чуть слышно): «Man hat schon oft genug gehört (уже достаточно часто слышно = ходят слухи), dass so eine Bestie ausgebrochen ist (что так один зверь вырвался; ausbrechen, brechen-brach-gebrochen – ломать).»
«Ich finde es aber gut (но я нахожу, однако, что это хорошо: «это хорошим»), dass die Löwen noch alle Zähne und Klauen haben (что у львов еще есть все зубы и когти; die Klaue).»
«So, warum denn (так, почему же)?»
«Ja, weil (да, потому что) – weil die (потому что они /львы/) auf meinen Schatz aufpassen (присматривают за моим сокровищем).»
«Auf deinen Schatz?»
«Mhm.»
«Du hast in dem Gehege einen Schatz versteckt (ты спрятала в канаве какое-то сокровище)?»
«Ja, aber das erzähle ich nicht (да, но это я не расскажу), das ist nämlich mein Geheimnis (это, именно, моя тайна = дело в том, что это моя тайна; das Geheimnis).»`;
  document.querySelector('#plainText').value = testString;
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
        pugTextArea.value += '\n      |\n      |';
      }

      // додати символ, якщо це не перевід рядка
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

