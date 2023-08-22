function calcsum(){
    let max = document.getElementById("max").valus;
//ここにコードを書いていく。
//for文で書く for(初期化分;ループ継続の条件式;カウンタ変数の更新)｛
//命令文　｝
//まずは変数の定義

let total = 0;
for (let i = 1; i <= max; i++) { //繰り返し文で指定した数字の回数まで、全部足す？
  total += i;

    document.getElementById("val").textCont = max;
    document.getElementById("sum").textCont = total;
}
}