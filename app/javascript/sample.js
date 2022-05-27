// varは再宣言できる
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)


// letは再宣言できない
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)


// constも再宣言できない
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)


// varは再代入できる
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


// letは再代入できる
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


// constは再代入できない
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


// スコープ = 定義した変数の有効範囲
// グローバルスコープ = どこからでも参照できる変数
// 関数スコープ = 関数の中でvarによって宣言された変数(有効範囲は関数内)
// var str = "webcamp" //グローバルスコープ

// function foo() {
  // console.log(str)
  // var y = "hello" //関数スコープ
// }

// foo()
// console.log(y) //yはfooの関数内で定義されたものであるためfooの関数外で呼び出すとエラーになる



// ブロックスコープ = ブロックとは()、{}で区切られたもの
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
// console.log(y) //ブロック外から呼び出しているためエラーが発生
// }

// foo()



// 変数iの初期値0、変数iが10未満のときは、1を足し続ける
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i) //ブロック外から呼び出しているためエラーになる



// constもletと同じでブロックスコープ



// 巻き上げとは、関数内のどこで変数宣言をしても関数の最初の1行目で変数を宣言をしたということになる
// また、巻き上げで宣言されたものには値が入っていないため、初期値であるundefinedが出力される
var str = "巻き上げ" //グローバルスコープ（どこからでも参照できるスコープ）

function foo() {
  //var str
  console.log(str) //グローバルスコープが参照されると思いきや1行目で変数宣言がされているためundefinedが出力される
  var str = "巻き上げ？" //ここでは、実際は str = "巻き上げ？" と再代入の形になっている
  console.log(str) //再代入された巻き上げ？が出力される
}

foo()

//var は再宣言、再代入できる
//let は再宣言はできない、再代入はできる
//const は再宣言、再代入できない
//スコープが広いと意図しない参照エラーが発生したり、期待通りの結果が得られないリスクが高くなってしまうことからvarは使用しない方がよい
// ループのための変数等の場合は letを使用
//基本的にはconstを使用する
//constを使用していれば長いコードでも宣言部分だけ見ればよくなる
//再代入しなくても新しいconst変数を増やせば対応できる