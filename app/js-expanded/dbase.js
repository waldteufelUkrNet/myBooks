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
      id     : '00',
      author : 'Stephen King',
      name   : 'Strawberry Spring',
      genre  : 'метод Франка: англ.мова'
    },
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_Luckey_Quarter_M - 37.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Irving_RIP VAN WINKLE_M - 47.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_The_Cat_From_Hell_M - 48.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Thompson_Seton_Lobo_the_King_of_Currumpaw_M - 48.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Thompson_Seton_Vixen_the_Springfield_Fox_M - 56.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    The_Story_of_the_Three_Goblins_M - 58.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Keats_Selected_Poems_M - 59.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Thompson_Seton_Raggylug_M - 63.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Poe_The_Purloined_Letter_M - 64.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Fitzgerald_On_Schedule_M - 65.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Hemingway_The Snows of Kilimanjaro_M - 71.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_The_End_Of_The_Whole_Mess_M - 78.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Ruskin_The King of the Golden River_M - 81.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Robin_Hood_M - 82.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_Sometimes_They_Come_Back_M - 86.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Conrad_An_Outpost_Of_Progress_M - 88.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Canadian_Wonder_Tales - 91.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wilde_The Canterville Ghost_M - 93.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_Children_Of_The_Corn_M - 96.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Yeats_Stories_of_Red_Hanrahan_M - 102.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Conan_Doyle_The_Adventure_of_the_Priory_School_M - 103.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    O_Henry_The_Octopus_Marooned_M - 103.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Smith_Twist-ending_Stories_M - 106.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Seton_Thompson_The_Slum_Cat_M - 108.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Beowulf_For_Children_M - 109.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_The_Monkey_M - 111.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Fitzgerald_Pat_Hobby's_Secret_M - 111.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    William_Tell_M - 112.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Lear_A_Book_of_Nonsense_M - 113.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Thompson_Seton_Tito_M - 114.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Woolf_A_Haunted_House_and_other_stories_M - 115.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Jerome_K_Jerome_Stories_M - 116.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_Riding_The_Bullet_M - 117.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wilde_Lord_Arthur_Savile_s_crime_and_other_stories_M - 119.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Poe_The_Murders_in_the_Rue_Morgue_M - 120.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Bret_Harte_Miss_Peggy’s_Proteges_and_Other_Stories_M - 124.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    John_Smith_Stories_M - 128.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Joyce_The Dead_M - 132.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Smith_Scary_Stories_M - 132.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_Night_Flier_M - 134.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wilde_Fairy_Tales_M - 134.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Indian_Legends_M - 139.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Melville_Bartleby_M - 139.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Poe_The_Fall_of_the_House_of_Usher_Stories_M - 143.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The_Pavilion_On_The_Links_M - 145.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Bret_Harte_Stephen_Leacock_Nonsense_M - 150.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Scott_Fitzgerald_The_Popular_Girl_M - 150.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Greene_No_Man_s_Land_M - 151.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Conan_Doyle_Tales_of_Pirates_M - 153.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    King_Dolan_s_Cadillac_M - 155.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Sir_Gawain_and_the_Green_Knight_M - 155.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Twain_The_Million_Pound_Bank_Note_M - 155.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Fitzgerald_The Diamond As Big As The Ritz_M - 157.doc
    {
      id     : '00',
      author : '',
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Smith_Longer_Wacky_Stories_M - 172.doc
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
      author : '',
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
      author : '',
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
      author : '',
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The_Suicide_Club_M - 194.doc
    {
      id     : '00',
      author : '',
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Stevenson_The Rajahs Diamond_M - 206.doc
    {
      id     : '00',
      author : '',
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
      author : '',
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Wilde_Legends_M - 220.doc
    {
      id     : '00',
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Smith_More_Longer_Wacky_Stories_With_Twist_Endings_M - 221.doc
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
      author : '',
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
      author : '',
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
      author : '',
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
      author : '',
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
      author : '',
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
      author : '',
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
      author : '',
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
      author : '',
      name   : '',
      genre  : 'метод Франка: англ.мова'
    },
    Twain_The_Adventures_of_Tom_Sawyer_M - 570.doc
    {
      id     : '00',
      author : '',
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