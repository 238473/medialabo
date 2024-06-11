let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let url= 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+o1.getAttribute('value')+'-'+o.getAttribute('value')+'-j.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	let div=document.querySelector('div#result');



let ul1=document.createElement('ul');
let li7=document.createElement('li');
let li8=document.createElement('li');
let li9=document.createElement('li');
let li10=document.createElement('li');
let li11=document.createElement('li');
let li12=document.createElement('li');



li7.textContent="開始時刻:"+data.list.o1.getAttribute("value")+[1].start_time;
li8.textContent="終了時刻;"+data.list.o1.getAttribute("value")+[1].end_time;
li9.textContent="タイトル:"+data.list.o1.getAttribute("value")+[1].title;
li10.textContent="サブタイトル:"+data.list.o1.getAttribute("value")+[1].subtitle;
li11.textContent="番組説明:"+data.list.o1.getAttribute("value")+[1].content;
li12.textContent="出演者:"+data.list.o1.getAttribute("value")+[1].act;

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



li1.textContent='開始時刻:'+data.list.o1.getAttribute("value")+[0].start_time;
li2.textContent='終了時刻;'+data.list.o1.getAttribute("value")+[0].end_time;
li3.textContent="タイトル:"+data.list.o1.getAttribute("value")+[0].title;
li4.textContent="サブタイトル:"+data.list.o1.getAttribute("value")+[0].subtitle;
li5.textContent="番組説明:"+data.list.o1.getAttribute("value")+[0].content;
li6.textContent="出演者:記載なし"+data.list.o1.getAttribute("value")+[0].act;

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


let

}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
