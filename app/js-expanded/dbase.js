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
      name   : 'Lustige Naturwissenschaft', // 42
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00002',
      author : 'Hanns Heinz Ewers',
      name   : 'Die Spinne', // 46
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00003',
      author : 'Theodor Storm',
      name   : 'Immensee', // 55
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00004',
      author : 'Theodor Storm',
      name   : 'Die Regentrude', // 57
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00005',
      author : 'Joseph Roth',
      name   : 'Die Legende vom heiligen Trinker', // 61
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00006',
      author : 'E.T.A. Hoffmann',
      name   : 'Der Sandmann', // 71
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00007',
      author : 'Klaus-Peter Wolf',
      name   : 'Total wahre Flunkergeschichten. Erzählt von einem rotzfrechen Mädchen', // 77
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00008',
      author : 'Wilhelm Hauff',
      name   : 'Das kalte Herz', // 79
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00009',
      author : 'I.Frank',
      name   : 'Dies Leben kömmt mir vor als eine Renne-Bahn. Deutsche Gedichte aus dem 17. Jahrhundert.', // 80
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00010',
      author : 'Stefan Zweig',
      name   : 'Schachnovelle', //89
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00011',
      author : 'Jacob und Wilhelm Grimm',
      name   : 'Irische Elfenmärchen', // 92
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00012',
      author : 'Otfried Preußler',
      name   : 'Die kleine Hexe', // 94
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00013',
      author : 'Stefan Zweig',
      name   : 'Brief einer Unbekannten', // 96
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00014',
      author : 'Adelbert von Chamisso',
      name   : 'Peter Schlemihls wundersame Geschichte', // 104
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00015',
      author : 'Wilhelm Hauff',
      name   : 'Kalif Storch. Der kleine Muck. Der Zwerg Nase', // 109
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00016',
      author : 'Franz Kafka',
      name   : 'Die Verwandlung', // 112
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00017',
      author : 'Heinrich Böll',
      name   : 'Das Brot der frühen Jahre', // 113
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00018',
      author : 'Wolfgang Borchert',
      name   : 'Draußen vor der Tür', // 121
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00019',
      author : 'Ludwig Thoma',
      name   : 'Lausbubengeschichten', // 129
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00020',
      author : 'Ludwig Thoma',
      name   : 'Tante Frieda', // 143
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00021',
      author : 'Friedrich Durrenmatt',
      name   : 'Der Richter und sein Henker', // 141
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00022',
      author : 'Arthur Schnitzler',
      name   : 'Traumnovelle', // 150
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00023',
      author : 'Erich Kästner',
      name   : 'Das doppelte Lottchen', // 154
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00024',
      author : 'Jacob und Wilhelm Grimm',
      name   : 'Grimms Märchen', // 154
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00025',
      author : 'Irmgard Keun',
      name   : 'Das Mädchen, mit dem die Kinder nicht verkehren durften', // 154
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00026',
      author : 'Hans Fallada',
      name   : 'Zwei zarte Lämmchen weiß wie Schnee', // 162
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00027',
      author : 'noname',
      name   : 'Der liebe Augustin (Sagen aus Wien)', // 165
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00028',
      author : 'Erich Kästner',
      name   : 'Emil und die Detektive', // 171
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00029',
      author : 'Friedrich Glauser',
      name   : 'Beichte in der Nacht. Erzählungen', // 175
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00030',
      author : 'Gerhard Holtz-Baumert',
      name   : 'Alfons Zitterbacke. Geschichten eines Pechvogels', // 199
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00031',
      author : 'Joseph Roth',
      name   : 'Hotel Savoy', // 201
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00032',
      author : 'Erich Kästner',
      name   : 'Drei Männer im Schnee', // 261
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00033',
      author : 'Annemarie Selinko',
      name   : 'Heute heiratet mein Mann', // 265
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00034',
      author : 'Hansjorg Martin',
      name   : 'Meine schone Morderin', // 271
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00035',
      author : 'Otfried Preußler', // 273
      name   : 'Krabat',
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00036',
      author : 'I.Frank',
      name   : 'Wandrers Nachtlied', // 298
      genre  : 'метод Франка: нім.мова'
    },
    {
      id     : '00037',
      author : 'E. M. Remarque',
      name   : 'Drei Kameraden', // 409
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Fitzgerald_The Diamond As Big As The Ritz_M - 157.doc
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Fitzgerald_Tales_of_the_Jazz_Age_M - 162.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Pocahontas_M - 163.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Dreiser_Will_You_Walk_Into_My_Parlor_M - 169.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Lawrence_The_Shadow_in_the_Rose_Garden_and_Other_Stories_M - 171.doc
    {
      id     : '00',
      author : 'John W. Smith',
      name   : 'Longer Wacky Stories With Twist Endings',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Jacobs_A_Love_Passage_and_Other_Stories_M - 173.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stoker_Stories_M - 173.doc
    {
      id     : '00',
      author : 'Ernest Hemingway',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Hemingway_The Old Man And The Sea_M - 174.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Collins_The_Dream_Woman_M - 176.doc
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wilde_The_Importance_of_Being_Earnest_M - 176.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Lovecraft_The_Call_Of_Cthulhu_The_Rats_In_The_Walls_M - 177.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Hardy_The_Distracted_Preacher_M - 182.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Swift_Gulliver's Travels_M - 183.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The_Bottle_Imp_The_Isle_of_Voices_M - 186.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    James_Daisy_Miller_M - 189.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Milne_Pooh_M - 189.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_Silver_Blaze_M - 192.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The_Suicide_Club_M - 194.doc
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Fitzgerald_Jacob's_Ladder_and_Other_Stories_M - 200.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Ivanhoe_M - 200.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Saki_Stories_M - 206.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The Rajahs Diamond_M - 206.doc
    {
      id     : '00',
      author : 'Graham Greene',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    GREENE_THE THIRD MAN_M - 212.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Steinbeck_Of_Mice_and_Men_M - 214.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_Strange_Case_of_Dr_Jekyll_and_Mr_Hyde_M - 215.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Austin_Lady_Susan_M - 218.doc
    {
      id     : '00',
      author : 'Oscar Wilde',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wilde_Legends_M - 220.doc
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Shaw_Pygmalion_M - 227.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Charley's_Aunt_M - 233.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    London_ALL GOLD CANYON_Stories_M - 234.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Japanese_Tales_M - 237.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    London_IN A FAR COUNTRY-Stories_M - 237.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Anderson_Winesburg_Ohio_M - 244.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Robinson Crusoe Written Anew for Children_M - 246.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Carroll_Through_The_Looking_Glass_M - 251.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    London_South_Sees_M - 257.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Dickens_A_Christmas_Carol_M - 259.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wells_The_Time_Machine_M - 264.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Maugham_Stories_Na okraine imperii_M - 265.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Carrol_Alice's adventures in Wonderland_M - 266.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Maugham_Stories_Mister_M - 268.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The_Beach_of_Falesa_M - 272.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Gallico_Mrs_Harris_Goes_to_Paris_M - 274.doc
    {
      id     : '00',
      author : 'O’Henry',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    O_Henry_Stories_M - 276.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Indian_Wonder_Tales_M - 281.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Chesterton_The_Innocence_of_Father_Brown_M - 285.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Buchan_The_Thirty_Nine_Steps_M - 286.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Kipling_Just_So_Stories_M - 287.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wells_Stories_M - 287.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    London_The_Call_Of_The_Wild_M - 292.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Travers_Mary_Poppins_M - 300.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Baum_The_Wonderful_Wizard_of_Oz_M - 303.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Greene_The_Tenth_Man_M - 306.rtf
    {
      id     : '00',
      author : 'Arthur Conan Doyle',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Conan_Doyle_The_Adventures_Of_Gerard_M - 313.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_Sherlock_Holmes_Stories_1_M - 319.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    English_Fairy_Tales_M - 321.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Tales_Of_The_Round_Table_M - 326.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_A Study In Scarlet_M - 327.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_THE SIGN OF THE FOUR_M - 328.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Baum_The_Marvelous_Land_of_Oz_M - 335.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Irish_Fairy_Tales_M - 343.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Great_Ghost_Stories_M - 356.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wodehouse_Short_Stories_M - 356.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    JEAN WEBSTER_DADDY-LONG-LEGS_M - 358.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Hammett_The_adventures_of_Sam_Spade_M - 371.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Maugham_Ashenden_M - 372.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Grimm_English_M - 373.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Howard_Conan_M - 373.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    London_LOVE OF LIFE_Stories_M - 378.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Howard_THE TOWER OF THE ELEPHANT_Stories_M - 381.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wells_The Invisible Man_M - 386.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Barrie_Peter_Pan_M - 390.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Burgess_Peter_Rabbit_M - 390.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Lovecraft_At_The_Mountains_Of_Madness_M - 404.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Hope_The_Prisoner_Of_Zenda_M - 408.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_The Hound of the Baskervilles_M - 425.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Grahame_The Wind in the Willows_M - 425.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Moorcock_The Knight of the Swords_M - 425.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Kipling_The_Jungle_Book_1_M - 202.doc + Kipling_The_Jungle_Book_2_M - 226.doc 428
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Doyle_Sherlock_Holmes_Stories_2_M - 430.doc
    {
      id     : '00',
      author : 'Francis Scott Fitzgerald',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Fitzgerald_The_Great_Gatsby_M - 447.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wells_The_War_of_the_Worlds_M - 462.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Sheridan_Le_Fanu_The_Room_in_the_Dragon_Volant_M - 469.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Cohen_Midnight_M - 470.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Greene_A_Gun_for_Sale_M - 472.doc
    {
      id     : '00',
      author : 'Jerome K. Jerome.',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Jerome_Three Men In A Boat_M - 479.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Christie_The_ABC_Murders_M - 482.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_Treasure_Island_M - 482.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Godfather_1 - 267.doc + Godfather_2 - 226.doc 493
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Burroughs_A Princess Of Mars_M - 499.doc
    {
      id     : '00',
      author : 'Mark Twain',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Twain_The_Prince_and_the_Pauper_M - 518.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Sayers_Whose_Body_M - 527.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Hammett_The_Maltese_Falcon_M - 556.doc
    {
      id     : '00',
      author : 'Mark Twain',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Twain_The_Adventures_of_Tom_Sawyer_M - 570.doc
    {
      id     : '00',
      author : 'R. L. Stevenson',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The Black Arrow_M - 581.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Christie_Murder_On_The_Orient_Express_M - 587.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Maugham_Theatre_M - 632.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Tolkien_The Hobbit_M - 664.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Haggard_King_Solomon's_Mines_M - 679.doc