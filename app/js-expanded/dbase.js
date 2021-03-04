"use strict";
// dbase.js
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ DATA BASE ↓↓↓ */
  let books = [
    {
      id     : '00000',
      author : 'А. Тест Тестович',
      name   : 'Ідеальна книга',
      genre  : 'тестова книга'
    },
    {
      id     : '00001',
      author : 'Irina Weber',
      name   : 'Lustige Naturwissenschaft',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00002',
      author : 'Hanns Heinz Ewers',
      name   : 'Die Spinne',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00003',
      author : 'Theodor Storm',
      name   : 'Immensee',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00004',
      author : 'Theodor Storm',
      name   : 'Die Regentrude',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00005',
      author : 'Joseph Roth',
      name   : 'Die Legende vom heiligen Trinker',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00006',
      author : 'E.T.A. Hoffmann',
      name   : 'Der Sandmann',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00007',
      author : 'Klaus-Peter Wolf',
      name   : 'Total wahre Flunkergeschichten. Erzählt von einem rotzfrechen Mädchen',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00008',
      author : 'Wilhelm Hauff',
      name   : 'Das kalte Herz',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00009',
      author : 'I.Frank',
      name   : 'Dies Leben kömmt mir vor als eine Renne-Bahn. Deutsche Gedichte aus dem 17. Jahrhundert.',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00010',
      author : 'Stefan Zweig',
      name   : 'Schachnovelle',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00011',
      author : 'Jacob und Wilhelm Grimm',
      name   : 'Irische Elfenmärchen',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00012',
      author : 'Otfried Preußler',
      name   : 'Die kleine Hexe',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00013',
      author : 'Stefan Zweig',
      name   : 'Brief einer Unbekannten',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00014',
      author : 'Adelbert von Chamisso',
      name   : 'Peter Schlemihls wundersame Geschichte',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00015',
      author : 'Wilhelm Hauff',
      name   : 'Kalif Storch. Der kleine Muck. Der Zwerg Nase',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00016',
      author : 'Franz Kafka',
      name   : 'Die Verwandlung',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00017',
      author : 'Heinrich Böll',
      name   : 'Das Brot der frühen Jahre',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00018',
      author : 'Wolfgang Borchert',
      name   : 'Draußen vor der Tür',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00019',
      author : 'Ludwig Thoma',
      name   : 'Lausbubengeschichten',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00020',
      author : 'Ludwig Thoma',
      name   : 'Tante Frieda',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00021',
      author : 'Friedrich Durrenmatt',
      name   : 'Der Richter und sein Henker',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00022',
      author : 'Arthur Schnitzler',
      name   : 'Traumnovelle',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00023',
      author : 'Erich Kästner',
      name   : 'Das doppelte Lottchen',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00024',
      author : 'Jacob und Wilhelm Grimm',
      name   : 'Grimms Märchen',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00025',
      author : 'Irmgard Keun',
      name   : 'Das Mädchen, mit dem die Kinder nicht verkehren durften',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00026',
      author : 'Hans Fallada',
      name   : 'Zwei zarte Lämmchen weiß wie Schnee',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00027',
      author : 'noname',
      name   : 'Der liebe Augustin (Sagen aus Wien)',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00028',
      author : 'Erich Kästner',
      name   : 'Emil und die Detektive',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00029',
      author : 'Friedrich Glauser',
      name   : 'Beichte in der Nacht. Erzählungen',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00030',
      author : 'Gerhard Holtz-Baumert',
      name   : 'Alfons Zitterbacke. Geschichten eines Pechvogels',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00031',
      author : 'Joseph Roth',
      name   : 'Hotel Savoy',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00032',
      author : 'Erich Kästner',
      name   : 'Drei Männer im Schnee',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00033',
      author : 'Annemarie Selinko',
      name   : 'Heute heiratet mein Mann',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00034',
      author : 'Hansjorg Martin',
      name   : 'Meine schone Morderin',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00035',
      author : 'Otfried Preußler',
      name   : 'Krabat',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00036',
      author : 'I.Frank',
      name   : 'Wandrers Nachtlied',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00037',
      author : 'E. M. Remarque',
      name   : 'Drei Kameraden',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00038',
      author : 'Макаров Н.А., Антонов Г.В.',
      name   : 'Психологическая самоподкоговка к рукопашному бою',
      genre  : 'Психологія'
    },
    {
      id     : '00039',
      author : 'Тарас А.Е.',
      name   : 'Психологическая подготовка бойца',
      genre  : 'Психологія'
    },
    {
      id     : '00040',
      author : 'Сашко А.',
      name   : 'Боль',
      genre  : 'Психологія'
    },
    {
      id     : '00041',
      author : 'Adolf Hitler',
      name   : 'Mein Kampf',
      genre  : 'ідеологія'
    },
    {
      id     : '00042',
      author : 'Йооп Сгрийверс',
      name   : 'Как быть крысой. Искусство интриг и выживания на работе',
      genre  : 'Психологія'
    },
    {
      id     : '00043',
      author : 'Ігнатій Лойола',
      name   : 'Духовні вправи',
      genre  : 'Психологія'
    },
    {
      id     : '00044',
      author : 'Іваничук Роман',
      name   : 'Орда',
      genre  : 'Укр.література'
    },
    {
      id     : '00045',
      author : 'Форсайт Фредерик',
      name   : 'День Шакала',
      genre  : 'політичний детектив'
    },
    {
      id     : '00046',
      author : 'waldteufel',
      name   : 'Англійська фонетика',
      genre  : 'англійська граматика'
    },
    // {
    //   id     : '00047',
    //   author : 'Ernest Hemingway',
    //   name   : 'The Killers',
    //   genre  : 'метод Франка: англ.мова'
    // },
    // {
    //   id     : '00048',
    //   author : 'Ray Bradbury',
    //   name   : 'A Sound of Thunder',
    //   genre  : 'метод Франка: англ.мова'
    // },
    // {
    //   id     : '00049',
    //   author : 'Washington Irving',
    //   name   : 'Rip Van Winkle',
    //   genre  : 'метод Франка: англ.мова'
    // },
    // {
    //   id     : '00050',
    //   author : 'Francis Scott Fitzgerald',
    //   name   : 'The diamond as big as the Ritz',
    //   genre  : 'метод Франка: англ.мова'
    // },
  ];
/* ↑↑↑ /DATA BASE ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////



    {
      id     : '00047',
      author : 'Ernest Hemingway',
      name   : 'The Killers',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00048',
      author : 'Ray Bradbury',
      name   : 'A Sound of Thunder',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00049',
      author : 'Stephen King',
      name   : 'Strawberry Spring',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00050',
      author : 'Stephen King',
      name   : 'Luckey Quarter',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00051',
      author : 'Washington Irving',
      name   : 'Rip Van Winkle',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00051',
      author : 'Stephen King',
      name   : 'The Cat from Hell',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00052',
      author : 'E. Thompson Seton',
      name   : 'Lobo, the King of Currumpaw',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00053',
      author : 'E. Thompson Seton',
      name   : 'Vixen, the Springfield Fox',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00054',
      author : 'Mabel G. Taggart',
      name   : 'The story of the three goblins',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00055',
      author : 'John Keats',
      name   : 'Beauty that must die (Selected Poems)',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00056',
      author : 'E. Thompson Seton',
      name   : 'Raggylug. The Story of a Cottontail Rabbit',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00057',
      author : 'Edgar Allan Poe',
      name   : 'The purloined letter',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : 'On schedule',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Ernest Hemingway',
      name   : 'The Snows of Kilimanjaro',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : 'The end of the whole mess',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John Ruskin',
      name   : 'The King of the Golden River',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Robin Hood',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : 'Sometimes they come back',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Joseph Conrad',
      name   : 'An outpost of progress',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Cyrus Mac Millan',
      name   : 'Canadian Wonder Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : 'The Canterville Ghost',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : 'Children of the Corn',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'W.B. Yeats',
      name   : 'Stories Of Red Hanrahan',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'The Adventure of the Priory School',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'O’Henry',
      name   : 'The Octopus Marooned',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John W. Smith',
      name   : 'Twist-ending Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'E. Thompson Seton',
      name   : 'The Slum Cat',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Beowulf For Children',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : 'The Monkey',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : "Pat Hobby's Secret And Other Stories",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'William Tell',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Edward Lear',
      name   : 'A Book of Nonsense',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'E. Thompson Seton',
      name   : 'Tito. The Story of the Coyote That Learned How',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Virginia Woolf',
      name   : 'A Haunted House and other stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jerome K. Jerome',
      name   : 'Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : 'Riding the Bullet',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : 'Lord Arthur Savile’s crime and other stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Edgar Allan Poe',
      name   : 'The Murders In The Rue Morgue',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Bret Harte',
      name   : 'Miss Peggy’s Proteges and Other Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John W. Smith',
      name   : 'Too Good To Be True And Other Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'James Joyce',
      name   : 'The Dead',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John W. Smith',
      name   : 'Scary Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : 'The Night Flier',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : 'The Happy Prince And Other Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'North American Indian Legends',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Herman Melville',
      name   : 'Bartleby, The Scrivener',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Edgar Allan Poe',
      name   : 'The Fall of the House of Usher And Other Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : 'The Pavilion On The Links ',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Bret Harte',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    розбити на дві книги! Bret_Harte_Stephen_Leacock_Nonsense_M - 150.doc
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : 'The Popular Girl',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Graham Greene',
      name   : "No Man's Land",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'Tales Of Pirates',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Stephen King',
      name   : "Dolan's Cadillac",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Sir Gawain and the Green Knight',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Mark Twain',
      name   : 'The Million Pound Bank Note and other stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : 'The diamond as big as the Ritz',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Brian Doherty',
      name   : 'The Story Of Pocahontas',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Theodore Dreiser',
      name   : 'Will You Walk Into My Parlor?',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'D. H. Lawrence',
      name   : 'The Shadow in the Rose Garden and Other Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John W. Smith',
      name   : 'Longer Wacky Stories With Twist Endings',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'W. W. Jacobs',
      name   : 'A Love Passage and Other Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Bram Stoker',
      name   : "Dracula's Guest and Other Weird Stories",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Ernest Hemingway',
      name   : 'The Old Man And The Sea',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Wilkie Collins',
      name   : 'The Dream Woman',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : 'The Importance of Being Earnest.A Trivial Comedy for Serious People',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. P. Lovecraft',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    розбити на дві книги! Lovecraft_The_Call_Of_Cthulhu_The_Rats_In_The_Walls_M - 177.doc
    {
      id     : '00',
      author : 'Thomas Hardy',
      name   : 'The Distracted Preacher',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jonathan Swift',
      name   : "Gulliver's Travels",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The_Bottle_Imp_The_Isle_of_Voices_M - 186.doc
    {
      id     : '00',
      author : 'Henry James',
      name   : 'Daisy Miller',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Milne_Pooh_M - 189.doc
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'Silver Blaze',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : 'The Suicide Club ',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : "Jacob's Ladder and Other Stories",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Sir Walter Scott',
      name   : 'Ivanhoe',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Saki',
      name   : 'Shock Tactics And Other Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : "The Rajah's Diamond",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Graham Greene',
      name   : 'The Third Man ',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John Steinbeck',
      name   : 'Of Mice And Men',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : 'The strange case of dr. Jekyll and mr. Hyde',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jane Austen',
      name   : 'Lady Susan',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : 'The Star-Child And Other Legends',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John W. Smith',
      name   : 'More Longer Wacky Stories With Twist Endings',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Milne_Pooh corner_M - 222.doc
    {
      id     : '00',
      author : 'George Bernard Shaw',
      name   : 'Pygmalion',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Walter Brandon Thomas',
      name   : "Charley's Aunt",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jack London',
      name   : 'All Gold Canyon (Stories)',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Japanese Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jack London',
      name   : 'In A Far Country (Stories)',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Sherwood Anderson',
      name   : 'Winesburg, Ohio',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname`',
      name   : 'Robinson Crusoe Written Anew for Children by James Baldwin',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Lewis Carroll',
      name   : 'Through The Looking-Glass',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jack London',
      name   : 'South Sea Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Charles Dickens',
      name   : 'A Christmas Carol',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. G. Wells',
      name   : 'The Time Machine',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'William Somerset Maugham',
      name   : 'Stories1',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Lewis Carroll',
      name   : "Alice's adventures in Wonderland",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'William Somerset Maugham',
      name   : 'Stories2',
      genre  : 'метод Франка: англ.мова'
    },
    звести в одну! Maugham_Stories_Mister_M - 268.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : "The Beach of Falesá (Island Nights' Entertainments)",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Paul Gallico',
      name   : "Mrs. ‘Arris Goes to Paris",
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'O’Henry',
      name   : 'Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Cyrus Mac Millan',
      name   : 'Indian Wonder Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Gilbert Keith Chesterton',
      name   : 'The Innocence of Father Brown',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John Buchan',
      name   : 'The Thirty-Nine Steps',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Rudyard Kipling',
      name   : 'Just So Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. G. Wells',
      name   : 'Short Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jack London',
      name   : 'The Call Of The Wild',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'P. L. Travers',
      name   : 'Mary Poppins',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'L. Frank Baum',
      name   : 'The Wonderful Wizard Of Oz',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'L. Frank Baum',
      name   : 'The Marvelous Land Of Oz',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Graham Greene',
      name   : 'The Tenth Man',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'The Adventures Of Gerard',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'Stories',
      genre  : 'метод Франка: англ.мова'
    },
    звести в одну книгу Doyle_Sherlock_Holmes_Stories_1_M - 319.doc
    {
      id     : '00',
      author : 'Joseph Jacobs',
      name   : 'English Fairy Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Andrew Lang',
      name   : 'King Arthur. Tales of the Round Table.',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'A Study In Scarlet',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'The Sign Of The Four',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Irish Fairy Tales',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Great Ghost Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'P. G. Wodehouse',
      name   : 'Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jean Webster',
      name   : 'Daddy-Long-Legs',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Dashiell Hammett',
      name   : 'The adventures of Sam Spade',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'William Somerset Maugham',
      name   : 'Ashenden. The British Agent',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'noname',
      name   : 'Grimm Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Robert E. Howard',
      name   : 'Conan',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jack London',
      name   : 'Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Robert E. Howard',
      name   : 'Stories',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. G. Wells',
      name   : 'The Invisible Man',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'James Matthew Barrie',
      name   : 'Peter Pan',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Thornton W. Burgess',
      name   : 'Peter Rabbit',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. P. Lovecraft',
      name   : 'At The Mountains Of Madness',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Anthony Hope',
      name   : 'The Prisoner Of Zenda',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : 'The Hound of the Baskervilles',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Kenneth Grahame',
      name   : 'The Wind in the Willows',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Michael Moorcock',
      name   : 'The Knight of the Swords',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Rudyard Kipling',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Kipling_The_Jungle_Book_1_M - 202.doc + Kipling_The_Jungle_Book_2_M - 226.doc 428
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_Sherlock_Holmes_Stories_2_M - 430.doc
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : 'The Great Gatsby',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. G. Wells',
      name   : 'The War of the Worlds',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'J. Sheridan LeFanu',
      name   : 'The Room in the Dragon Volant',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Octavus Roy Cohen',
      name   : 'Midnight',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Graham Greene',
      name   : 'A Gun for Sale',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Jerome K. Jerome.',
      name   : 'Three Men In A Boat ',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Agatha Christie',
      name   : 'The ABC Murders',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : 'Treasure Island',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Godfather_1 - 267.doc + Godfather_2 - 226.doc 493
    {
      id     : '00',
      author : 'Edgar Rice Burroughs',
      name   : 'A Princess Of Mars',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Mark Twain',
      name   : 'The Prince and the Pauper',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Dorothy L. Sayers',
      name   : 'Whose Body?',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Dashiell Hammett',
      name   : 'The Maltese Falcon',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Mark Twain',
      name   : 'The Adventures of Tom Sawyer',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : 'The Black Arrow ',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'Agatha Christie',
      name   : 'Murder On The Orient Express',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'William Somerset Maugham',
      name   : 'Theatre',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'John Ronald Reuel Tolkien',
      name   : 'The Hobbit',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : 'H. R. Haggard',
      name   : "King Solomon's Mines",
      genre  : 'метод Франка: англ.мова'
    }