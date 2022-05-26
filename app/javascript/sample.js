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
var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()
console.log(y) //yはfooの関数内で定義されたものであるためfooの関数外で呼び出すとエラーになる