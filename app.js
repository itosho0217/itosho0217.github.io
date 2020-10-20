console.log('セブ島'+'留学');//結果
// セミコロンは処理が終わった時のもの
console.log('① 5 たす 8=' + String(5 + 8));
console.log(4 - 2);
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);


// 練習問題
let country ='Japan';
console.log(country);
country = 'Philippines'
console.log(country)

let schoolName = 'NexSeed';
console.log('私の所属先は、' + schoolName + 'です');
console.log(`私の所属先は、${schoolName}です`);

let job ='engineer'
console.log(`私の仕事は、${job}です`);

// 変数applicationsを作成して、配列['LINE', 'Facebook', 'Twitter']を代入してください。
let applications = ['LINE','Facebook','Twitter'];
console.log(applications);
applications.push('instagram');
console.log(applications[3]);

let capitalCities = {Japan: 'Tokyo', Philippines: 'Manira'}
// 変数capitalCitiesをconsoleに表示
console.log(capitalCities);
// 変数capitalCitiesにAmerica: Washingtonを追加
capitalCities.America =' Washington';
console.log(capitalCities);

 // 宿題

let studentList =[
{name:"Seedくん",from:"セブ島",hobby:"サーフィン"},
{name:"ErikoIchinohe",form:"青森",hobby:"旅"},
{name:"Yudai",from:"大阪",hobby:"狩野英孝ちゃん"},
{name:"奥村よしや",from:"京都",hobby:"サッカー"},
{name:"Yuko",from:"沖縄",hobby:"外人ハンター"},
{name:"めぐさん",from:"東京",hobby:"アウトドア"},
{name:"ビーちゃん",from:"和歌山",hobby:"ウクレレ"},
{name:"ゆたか",from:"千葉",hobby:"映画"},
]

// クラスのみんなの名簿を二次元配列で作っていきましょう
console.log(studentList);
 // リストの0番目の人の名前をconsoleで表示しましょう
 console.log(studentList[0].name);
  // リストの3番目の人の出身地をconsoleで表示しましょう
 console.log(studentList[3].from);
  // リストの4番目の人の趣味をconsoleで表示しましょう
 console.log(studentList[4].hobby);

