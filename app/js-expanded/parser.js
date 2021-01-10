"use strict";
// parser.js
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES DECLARATION ↓↓↓ */
  let testString = `Ich stellte also den Projektor (mein Projektor) (итак, я установила проектор (мой проектор)) auf die Fensterbank (das Fenster, die Bank – скамья, лавка), legte den Drakulafilm ein (вложила = поставила дракула-фильм; einlegen) und besorgte eine Verlängerungsschnur (и достала удлинитель; lang – длинный, verlängern – удлинять, die Schnur, besorgen – доставать, раздобыть), weil ich sonst nicht bis an die Steckdose kam (так как иначе я не доставала до розетки; kommen-kam-gekommen – доходить, stecken – вставлять, die Dose – розетка). Dann konnte ich mühelos (тогда я смогла легко (т.е. без усилий); die Mühe – усилие) Drakulas Gesicht (лицо дракулы; das Gesicht) auf die Fassade des Hochhauses (на фасад высотного здания) werfen (бросить = спроецировать). Drakula war dort (дракула был там) mindestens (по меньшей мере) dreimal so groß (втрое больше) wie in einem echten Kino (чем в настоящем кино; das Kíno). Nur war meine Lampe im Projektor nicht stark genug (только моя лампа в проекторе не была достаточно сильной). Sein Gesicht erschien also (его /дракулы/ лицо появлялось, таким образом; erscheinen-erschien-erschienen) wie im Nebel (как в тумане; der Nebel). Verschwommen (расплывчато; verschwimmen – расплываться, schwimmen-schwamm-geschwommen – плыть).
Das machte die Geschichte (это сделало историю) erst mal (сначала = как раз-то) richtig unheimlich (по-настоящему жуткой).

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

    let resultArea = document.getElementById('pugText');
    let aT  = 'span.btext';    // activeTag
    let oBA = 0;               // openedBracketsAmount
    let startItalicIndex = -1;

    // початок абзацу
    resultArea.value = '    p\n      span.btext ';

    for (let i = 0; i < str.length; i++) {
      // наступний абзац
      if ( str[i].match(/\n/) ) {
        resultArea.value += '\n    p\n      span.btext ';
        aT  = 'span.btext';
      }

      // відкриття дужок
      if ( str[i].match(/\(/) ) {
        oBA += 1;
        if (oBA > 1) {
          // відкриття внутрішньої дужки
          resultArea.value += '(';
        } else {
          // відкриття зовнішньої дужки

          // пошук вмісту дужок (із урахуванням вкладених)
          let subStr = '',
              startPosition,
              endPosition1,
              endPosition2;

          // try тут по суті є милицею. Тут наступна логіка: пошук відкриваючої
          // дужки після закриваючої. В кінці тексту логічно буде помилка, бо
          // інтерпретарор після останньої закриваючої дужки нічого не знайде.
          // Можна було б переписати з урахуванням цього і перевірки, чи закри-
          // ваюча дужка остання, щоб потім не шукати відсутню відкриваючу
          // дужку. Але try теж канає.
          try {
            startPosition = i;
            let regexp1 = /\)/g,
                regexp2 = /\(/g;

            regexp1.lastIndex = startPosition + 1;
            regexp2.lastIndex = startPosition + 2;

            endPosition1 = regexp1.exec(str).index;
            endPosition2 = regexp2.exec(str).index;

            if (endPosition1>endPosition2) {
              regexp1.lastIndex = endPosition1 + 1;
              endPosition1 = regexp1.exec(str).index;
            }
          } catch {} finally {
            subStr = str.slice(startPosition+1,endPosition1);
          }


          // що в дужках?
          if ( subStr.match(/[абвгґдеєжзіїйклмнопрстуфхцчшщьюяёэы]/iu) ) {
            // тут є переклад, значить дужка в адаптованому тексті
            resultArea.value += '\n      |\n      |(';
            aT = 'p';

            // у дужках крім перекладу є і слова
            if ( subStr.match(/[abcdefghijklmnopqrstuvwxyzäüöß]/iu) ) {
              if ( subStr[0].match(/[abcdefghijklmnopqrstuvwxyzäüöß]/iu) ) {
                // підрядок зі словами та їх перекладами
                aT = 'span.f-coni';
                resultArea.value += '\n      span.f-coni ';
              } else {
                let startItalic = subStr.match(/[abcdefghijklmnopqrstuvwxyzäüöß]/iu).index;
                startItalicIndex = str.indexOf(subStr) + startItalic;
              }
            }
          } else {
            // тут тільки латиниця, отже це оригінальна дужка в тексті
            resultArea.value += '(';
          }
        }
      }

      // початок похилого тексту
      if ( i == startItalicIndex ) {
        startItalicIndex = -1;
        aT = 'span.f-coni';
        resultArea.value += '\n      |\n      span.f-coni ';
      }

      // закриття дужок
      if ( str[i].match(/\)/) ) {
        oBA -= 1;
        if (oBA > 0) {
          // закриття внутрішньої дужки
          resultArea.value += ')';
        } else {
          // закриття зовнішньої дужки
          if (aT == 'span.btext') {
            resultArea.value += ')';
          } else if (aT == 'p') {
            aT == 'span.btext';
            if ( str[i+1].match(/[\.,:;?!»'"]/iu) ) {
              resultArea.value += ')\n      span.btext ';
            } else {
              resultArea.value += ')\n      |\n      span.btext ';
            }
          } else if (aT == 'span.f-coni') {
            aT == 'span.btext';
            resultArea.value += '\n      |)\n      ';
            if ( str[i+1].match(/[\.,:;?!»'"]/iu) ) {
              resultArea.value += 'span.btext ';
            } else {
              resultArea.value += '|\n      span.btext ';
            }
          }
        }
      }

      // додати символ, якщо це не перевід рядка та не дужки
      if ( !str[i].match(/[\n\)\(]/) ) {
        resultArea.value += str[i];
      }
    }
  }
/* ↑↑↑ /FUNCTIONS DECLARATION ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////