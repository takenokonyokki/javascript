// // メイン部分
// let alertString;
// alertString = addString("Webcamp");

// // 作成した関数を呼び出す
// alert(alertString);

// // 作成した関数
// function addString(strA) { //関数名addStringの引数をstrAと定義
//   let addStr = "Hello" + strA; //変数名addStr
//   return addStr; //関数の戻り値で出力結果が表示される
// }



// let promptStr = prompt('何か好きな文字を入力してください。');　//入力された文字列はprompt()関数の戻り値として変数promptStrに格納されてアラートウィンドウ上に表示される
// alert(promptStr);




// ジャンケンの手を入力するプロンプト欄を生成
let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// ジャンケンの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね");
}

// ジャンケンの手をランダムに作成する関数
function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3); //0~2までのランダムな整数値を生成

  // ランダム生成された数値をもとに条件分岐させる
  if(js_hand_num == 0) {
    js_hand = "グー";
  } else if(js_hand_num == 1) {
    js_hand = "チョキ";
  } else if(js_hand_num == 2) {
    js_hand = "パー";
  }

  return js_hand; //関数の戻り値として、グーチョキパーの文字列を返す
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js) {
  let winLoseStr;

  if(user == "グー") {
    if(js == "グー") {
      winLoseStr = "あいこ";
    } else if(js == "チョキ") {
      winLoseStr = "勝ち";
    } else if(js == "パー") {
      winLoseStr = "負け";
    }
  } else if(user == "チョキ") {
    if(js == "グー") {
      winLoseStr = "負け";
    } else if(js == "チョキ") {
      winLoseStr = "あいこ";
    } else if(js == "パー") {
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー") {
      winLoseStr = "勝ち";
    } else if(js == "チョキ") {
      winLoseStr = "負け";
    } else if(js == "パー") {
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr; //関数の戻り値として、文字列を返す
}