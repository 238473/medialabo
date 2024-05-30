// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;



// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b1=document.querySelector('button#button');
b1.addEventListener('click',changebutton);

function changebutton(){
  let i=document.querySelector('input[name="kaitou"]');
  let yoso=i.value;
  //let yoso=Integer.parseInt(kaitou);
  let s1=document.querySelector('span#kaisu');
s1.textContent=(kaisu+1)+'回目の予想:';
let s2=document.querySelector('span#answer');
s2.textContent=''+yoso;
kaisu=kaisu+1;
//hantei()
if(yoso==kotae){
  let p11=document.querySelector('p#result');
  p11.textContent='正解です。おめでとう!';

}else if(yoso<kotae){
  let p2=document.querySelector('p#result');
  p2.textContent='まちがい.答えはもっと大きいですよ';
}else if(yoso>kotae){
  let p2=document.querySelector('p#result');
  p2.textContent='まちがい.答えはもっと小さいですよ';
};
if(kaisu==2&&yoso==kotae){
  let p3=document.querySelector('p#tesult');
  p3.textContent='答えは '+kotae+' でした.すでにゲームは終わっています'
}
if(kaisu==3&&yoso==kotae){
  let p3=document.querySelector('p#tesult');
  p3.textContent='答えは '+kotae+' でした.すでにゲームは終わっています'
}

if(yoso!=kotae&&kaisu==3){
  let p12=document.querySelector('p#result');
  p12.textContent='まちがい.残念でした答えは '+kotae+' です.'
}
if(kaisu>=4){
  let p123=document.querySelector('p#result');
  p123.textContent='答えは '+kotae+' でした.すでにゲームは終わっています'
}
}

/*let s1=document.querySelector('span#kaisu');
s1.textContent=(kaisu+1);
let s2=document.querySelector('span#answer');
s2.textContent=yoso;
if(yoso===kotae){
  let p1=document.querySelector('p#result');
  let p=document.createElement('p');
  p.textContent='正解です。おめでとう!';
  p1.insertAdjacentElement('afterend',p);

}else if(yoso<kotae){
  let p2=document.querySelector('p#result');
  let p=document.createElement('p');
  p.textContent='まちがい.答えはもっと大きいですよ';
  p2.insertAdjacentElement('afterend',p);
}else if(yoso>kotae){
  let p2=document.querySelector('p#result');
  let p=document.createElement('p');
  p.textContent='まちがい.答えはもっと小さいですよ';
  p2.insertAdjacentElement('afterend',p);
};
/*hantei();console.log((kaisu+2)+'回目の予想:'+yoso);
if(yoso===kotae){
  console.log('答えは 4でした.すでにゲームは終わっています');
}else if(yoso<kotae){
  console.log('まちがい.答えはもっと大きいですよ');
}else if(yoso>kotae){
  console.log('まちがい.答えはもっと小さいですよ');
}
hantei();console.log((kaisu+3)+'回目の予想:'+yoso);

if(yoso===kotae){
  console.log('答えは 4 でした．すでにゲームは終わっています');
}else {
  console.log('まちがい.残念でした答えは '+kotae+" です.");
}
hantei();console.log((kaisu+4)+'回目の予想:'+yoso);
if(yoso===kotae){
  console.log('答えは 4 でした．すでにゲームは終わっています');
}else {
  console.log("答えは "+kotae+" でした.すでにゲームは終わっています");
}

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
if(yoso===kotae){
  console.log((kaisu+4)+'回目の予想:'+yoso);
  console.log('正解です.おめでとう！');
}else if(yoso<kotae){
  console.log((kaisu+1)+'回目の予想:'+yoso);
  console.log('まちがい.答えはもっと大きいですよ');
}else if(yoso>kotae){
  console.log((kaisu+1)+'回目の予想:'+yoso);
  console.log('まちがい.答えはもっと小さいですよ');
};

if(yoso===kotae){
  console.log((kaisu+5)+'回目の予想:'+yoso);

  console.log('答えは 4でした.すでにゲームは終わっています');
}else if(yoso<kotae){
  console.log((kaisu+2)+'回目の予想:'+yoso);

  console.log('まちがい.答えはもっと大きいですよ');
}else if(yoso>kotae){
  console.log((kaisu+2)+'回目の予想:'+yoso);

  console.log('まちがい.答えはもっと小さいですよ');
}
if(yoso===kotae){
  console.log((kaisu+6)+'回目の予想:'+yoso);

  console.log('答えは 4 でした．すでにゲームは終わっています');
}else {
  console.log((kaisu+3)+'回目の予想:'+yoso);

  console.log('まちがい.残念でした答えは '+kotae+" です.");
}
  if(yoso===kotae){
    console.log((kaisu+7)+'回目の予想:'+yoso);

    console.log('答えは 4 でした．すでにゲームは終わっています');
  }else {
    console.log((kaisu+4)+'回目の予想:'+yoso);

    console.log("答えは "+kotae+" でした.すでにゲームは終わっています");
  }

}
*/