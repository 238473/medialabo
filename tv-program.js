let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
/*let div=document.querySelector('div#result');



let ul1=document.createElement('ul');
let li7=document.createElement('li');
let li8=document.createElement('li');
let li9=document.createElement('li');
let li10=document.createElement('li');
let li11=document.createElement('li');
let li12=document.createElement('li');



li7.textContent="開始時刻:"+data.list.g1[1].start_time;
li8.textContent="終了時刻;"+data.list.g1[1].end_time;
li9.textContent="タイトル:"+data.list.g1[1].title;
li10.textContent="サブタイトル:"+data.list.g1[1].subtitle;
li11.textContent="番組説明:"+data.list.g1[1].content;
li12.textContent="出演者:"+data.list.g1[1].act;

ul1.insertAdjacentElement('beforeend',li7);
ul1.insertAdjacentElement('beforeend',li8);
ul1.insertAdjacentElement('beforeend',li9);
ul1.insertAdjacentElement('beforeend',li10);
ul1.insertAdjacentElement('beforeend',li11);
ul1.insertAdjacentElement('beforeend',li12);
div.insertAdjacentElement('afterend',ul1);





let h21=document.createElement('h2');
h21.textContent='検索結果2件目';
div.insertAdjacentElement('afterend',h21);



let ul3=document.createElement('ul');
let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
let li4=document.createElement('li');
let li5=document.createElement('li');
let li6=document.createElement('li');



li1.textContent='開始時刻:'+data.list.g1[0].start_time;
li2.textContent='終了時刻;'+data.list.g1[0].end_time;
li3.textContent="タイトル:"+data.list.g1[0].title;
li4.textContent="サブタイトル:"+data.list.g1[0].subtitle;
li5.textContent="番組説明:"+data.list.g1[0].content;
li6.textContent="出演者:記載なし"+data.list.g1[0].act;

ul3.insertAdjacentElement('beforeend',li1);
ul3.insertAdjacentElement('beforeend',li2);
ul3.insertAdjacentElement('beforeend',li3);
ul3.insertAdjacentElement('beforeend',li4);
ul3.insertAdjacentElement('beforeend',li5);
ul3.insertAdjacentElement('beforeend',li6);
div.insertAdjacentElement('afterend',ul3);


let h2=document.createElement('h2');
h2.textContent='検索結果1件目';
div.insertAdjacentElement('afterend',h2);

let h1=document.createElement('h1');
h1.textContent='NHKの番組表（検索結果は2件）';
div.insertAdjacentElement('afterend',h1);



let b1=document.querySelector('select#tyann');
b1.addEventListener('click',changebutton);
*/
let p=document.querySelector('button#kennsaku');
p.addEventListener('click',changebutton);
let o1,o;

function changebutton(){
  let s1 = document.querySelector('select#tyann');
    let idx1 = s1.selectedIndex; 
    
    let os1 = s1.querySelectorAll('option'); 
     o1= os1.item(idx1); 

    let s = document.querySelector('select#janru');
    let idx = s.selectedIndex; 
    
    let os = s.querySelectorAll('option'); 
     o = os.item(idx);  
  console.log('チャンネル:'+o1.getAttribute("value"));
  console.log('ジャンル:'+o.getAttribute("value"));



}

let b=document.querySelector('button#kennsaku');
b.addEventListener('click',sendRequest);



// 通信を開始する処理
function sendRequest() {
    // URL を設定
   let url= 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+o1.getAttribute("value")+'-'+o.getAttribute("value")+'-j.json';
    // 通信開始
    
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理

    // data が文字列型なら，オブジェクトに変換する
    function showResult(resp) {
      let previousUl = document.querySelector('ul');
      if (previousUl) previousUl.remove();
      let previousH2 = document.querySelector('h2');
      if (previousH2) previousH2.remove();
      let previousH3 = document.querySelector('h2');
      if (previousH3) previousH2.remove();
      let previousH4 = document.querySelector('h4');
      if (previousH4) previousH4.remove();

      
      // 結果が表示されている場合には一度削除する
      
      

      let data = resp.data;
  
      
      
    // data.x を出力
    let div=document.querySelector('div#result');


if(o1.value === 'e1' && data.list && data.list.e1 && data.list.e1.length > 1){
  
  let ul1=document.createElement('ul');
  let li7=document.createElement('li');
  let li8=document.createElement('li');
  let li9=document.createElement('li');
  let li10=document.createElement('li');
  let li11=document.createElement('li');
  let li12=document.createElement('li');
  
  
    
    li7.textContent = "開始時刻:" + data.list.e1[1].start_time;
    li8.textContent = "終了時刻;" + data.list.e1[1].end_time;
    li9.textContent = "タイトル:" + data.list.e1[1].title;
    li10.textContent = "サブタイトル:" + data.list.e1[1].subtitle;
    li11.textContent = "番組説明:" + data.list.e1[1].content;
    li12.textContent = "出演者:" + data.list.e1[1].act;

    
  
  
  
  
  
  ul1.insertAdjacentElement('beforeend',li7);
  ul1.insertAdjacentElement('beforeend',li8);
  ul1.insertAdjacentElement('beforeend',li9);
  ul1.insertAdjacentElement('beforeend',li10);
  ul1.insertAdjacentElement('beforeend',li11);
  ul1.insertAdjacentElement('beforeend',li12);
  div.insertAdjacentElement('afterend',ul1);
  
  
  
  
  
  
  let h21=document.createElement('h2');
  h21.textContent='検索結果2件目';
  div.insertAdjacentElement('afterend',h21);
  
  
  
  let ul3=document.createElement('ul');
  let li1=document.createElement('li');
  let li2=document.createElement('li');
  let li3=document.createElement('li');
  let li4=document.createElement('li');
  let li5=document.createElement('li');
  let li6=document.createElement('li');
  
  
  
  li1.textContent='開始時刻:'+data.list.e1[0].start_time;
  li2.textContent='終了時刻;'+data.list.e1[0].end_time;
  li3.textContent="タイトル:"+data.list.e1[0].title;
  li4.textContent="サブタイトル:"+data.list.e1[0].subtitle;
  li5.textContent="番組説明:"+data.list.e1[0].content;
  li6.textContent="出演者:"+data.list.e1[0].act;
  
  ul3.insertAdjacentElement('beforeend',li1);
  ul3.insertAdjacentElement('beforeend',li2);
  ul3.insertAdjacentElement('beforeend',li3);
  ul3.insertAdjacentElement('beforeend',li4);
  ul3.insertAdjacentElement('beforeend',li5);
  ul3.insertAdjacentElement('beforeend',li6);
  div.insertAdjacentElement('afterend',ul3);
  
  let h2=document.createElement('h2');
h2.textContent='検索結果1件目';
div.insertAdjacentElement('afterend',h2);

let h1=document.createElement('h4');
h1.textContent='NHKの番組表（検索結果は2件）';
div.insertAdjacentElement('afterend',h1);
  
  

}else if(o1.value === 'g1' && data.list && data.list.g1 && data.list.g1.length > 1) {
 

  
  
  let ul1=document.createElement('ul');
let li7=document.createElement('li');
let li8=document.createElement('li');
let li9=document.createElement('li');
let li10=document.createElement('li');
let li11=document.createElement('li');
let li12=document.createElement('li');


  
  li7.textContent = "開始時刻:" + data.list.g1[1].start_time;
  li8.textContent = "終了時刻;" + data.list.g1[1].end_time;
  li9.textContent = "タイトル:" + data.list.g1[1].title;
  li10.textContent = "サブタイトル:" + data.list.g1[1].subtitle;
  li11.textContent = "番組説明:" + data.list.g1[1].content;
  li12.textContent = "出演者:" + data.list.g1[1].act;



/*
li7.textContent="開始時刻:"+data.list.g1[1].start_time;
li8.textContent="終了時刻;"+data.list.g1[1].end_time;
li9.textContent="タイトル:"+data.list.g1[1].title;
li10.textContent="サブタイトル:"+data.list.g1[1].subtitle;
li11.textContent="番組説明:"+data.list.g1[1].content;
li12.textContent="出演者:"+data.list.g1[1].act;
*/

ul1.insertAdjacentElement('beforeend',li7);
ul1.insertAdjacentElement('beforeend',li8);
ul1.insertAdjacentElement('beforeend',li9);
ul1.insertAdjacentElement('beforeend',li10);
ul1.insertAdjacentElement('beforeend',li11);
ul1.insertAdjacentElement('beforeend',li12);
div.insertAdjacentElement('afterend',ul1);






let h21=document.createElement('h2');
h21.textContent='検索結果2件目';
div.insertAdjacentElement('afterend',h21);



let ul3=document.createElement('ul');
let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
let li4=document.createElement('li');
let li5=document.createElement('li');
let li6=document.createElement('li');



li1.textContent='開始時刻:'+data.list.g1[0].start_time;
li2.textContent='終了時刻;'+data.list.g1[0].end_time;
li3.textContent="タイトル:"+data.list.g1[0].title;
li4.textContent="サブタイトル:"+data.list.g1[0].subtitle;
li5.textContent="番組説明:"+data.list.g1[0].content;
li6.textContent="出演者:"+data.list.g1[0].act;

ul3.insertAdjacentElement('beforeend',li1);
ul3.insertAdjacentElement('beforeend',li2);
ul3.insertAdjacentElement('beforeend',li3);
ul3.insertAdjacentElement('beforeend',li4);
ul3.insertAdjacentElement('beforeend',li5);
ul3.insertAdjacentElement('beforeend',li6);
div.insertAdjacentElement('afterend',ul3);

let h2=document.createElement('h2');
h2.textContent='検索結果1件目';
div.insertAdjacentElement('afterend',h2);

let h1=document.createElement('h4');
h1.textContent='NHKの番組表（検索結果は2件）';
div.insertAdjacentElement('afterend',h1);
  
 

}else {
  // データが存在しない場合の処理
  let h1 = document.createElement('h4');
  h1.textContent = 'データが存在しません。';
  div.insertAdjacentElement('afterend', h1);
}




     
}




// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}



