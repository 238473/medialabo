//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2=document.querySelector('h2#ex42');
let p=document.createElement('p');
p.textContent ='写真表と都市の緯度経度のページです'; 
h2.insertAdjacentElement('afterend',p); 
p.style.textEmphasis='sesame green';

// 練習4-3 写真表作成プログラム
/*let div=document.querySelector('div#phototable');
let img =document.createElement('img');
img.setAttribute('src','taro.png');
let sha1 = document.createElement('p');  
sha1.textContent='taro.png';                      
div.insertAdjacentElement('beforeend',sha1); 
div.insertAdjacentElement('beforeend',img); 
*/

let div = document.querySelector('div');
let img =document.createElement('img');
img.setAttribute('src', 'taro.png'); 
let sha =document.createElement('p'); 
sha.insertAdjacentElement('beforeend', img);
div.insertAdjacentElement('beforeend',sha);

di = document.querySelector('div');
 im =document.createElement('img');
im.setAttribute('src', 'jiro.png'); 
let shas =document.createElement('p'); 
shas.insertAdjacentElement('beforeend', im);
di.insertAdjacentElement('beforeend',shas);

d = document.querySelector('div');
 i =document.createElement('img');
i.setAttribute('src', 'hanako.png'); 
let shao =document.createElement('p'); 
shao.insertAdjacentElement('beforeend', i);
d.insertAdjacentElement('beforeend',shao);




// 練習4-4 箇条書き削除プログラム
let cange=[
	{location},
	{location},
	{location}
]
for(li1 of cange){
	let w=document.querySelector('li');
	w.remove();
  } 

// 練習4-5 箇条書き追加プログラム
let ul=document.querySelector('ul#location');
 for(let n of data){
	let li4=document.createElement('li');
	li4.textContent=(n.name+'...緯度:'+n.lat+',経度:'+n.lng);
	ul.insertAdjacentElement('afterend',li4);

  } 

  