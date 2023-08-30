"use strict"
//例題
//テスト点数ｘによって
//通知表の成績をコンソールに出力

//90点以上 a
//80点以上 b
//60点以上 c
//60点未満 d

let test1 = 90;
let test2 = 80;
let test3 = 60;
let test4 = 60;

if ( test1>= 90){
console.log("A");
}
else if(test2> 80){
console.log("B");
}

else if(test3> 60)
{
console.log("C");
}

else{
console.log("D");
} // なぜelseだけ{}と()がくっつとエラーになる？ 条件式はいらない。
