// alert('Hello World');


// let hello = 'Hello World';
// alert(hello);


// let int1 = 1;
// alert(int1);


// alert(4 + 3);


// alert('Hello' + 'こんにちは');


// let str1 = 'World';
// let str2 = '世界';
// alert(str1 + str2);


// let orange = 100;
// let apple = 10;
// if (orange < apple) {
//   alert('みかんの値段がりんごより安い');
// } else if (orange == apple){
//   alert('みかんとりんごの値段は同じ');
// } else {
//   alert('みかんの値段がりんごより高い');
// }


// while文では条件式がtrueである間は制限なく繰り返し処理が実行される
// let max = 10000;
// let num = 5;
// let count = 0;
// while (num < max) {
//   num = num * 6;
//   count = count + 1;
// }
// alert('6を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');



// for文は決められた回数の処理を繰り返す
let i; //変数iを宣言
let num = 0; //変数numを宣言し、初期値を0に設定

// 変数iの初期値を1に設定し、変数iが11未満のときは変数iに1を足す
// 「i++」は「i = i + 1」と同じ
for (i = 1; i < 11; i++) {
  num = num + i; //変数numにnum + iを代入
}

alert('1から10まで足し算した結果は' + num + 'です');