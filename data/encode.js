// Base64
var keyStr0 = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";		   
function ebase(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do {  chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) {  enc4 = 64; }  output = output +   keyStr0.charAt(enc1) + keyStr0.charAt(enc2) + keyStr0.charAt(enc3) + keyStr0.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; }

function dbase(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";  var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g; if (mimcod.exec(input)) {   } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  do { enc1 = keyStr0.indexOf(input.charAt(i++)); enc2 = keyStr0.indexOf(input.charAt(i++)); enc3 = keyStr0.indexOf(input.charAt(i++)); enc4 = keyStr0.indexOf(input.charAt(i++));  chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4;  output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3); } chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }

// Atom128
var keyStr1 = "/128GhIoPQROSTeU" + "bADfgHijKLM+n0pF" + "WXY456xyzB7=39Va" + "qrstJklmNuZvwcdE" + "C";
function a128e(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr1.charAt(enc1) + keyStr1.charAt(enc2) + keyStr1.charAt(enc3) + keyStr1.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; }

function a128d(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g; if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do { enc1 = keyStr1.indexOf(input.charAt(i++));  enc2 = keyStr1.indexOf(input.charAt(i++)); enc3 = keyStr1.indexOf(input.charAt(i++)); enc4 = keyStr1.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3); } chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }

// Megan35
var keyStr2 = "3GHIJKLMNOPQRSTU" + "b=cdefghijklmnop" + "WXYZ/12+406789Va" + "qrstuvwxyzABCDEF" + "5";
function encrypto(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2;  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr2.charAt(enc1) + keyStr2.charAt(enc2) +  keyStr2.charAt(enc3) + keyStr2.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; } 

function decrypto(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g;  if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do {  enc1 = keyStr2.indexOf(input.charAt(i++)); enc2 = keyStr2.indexOf(input.charAt(i++)); enc3 = keyStr2.indexOf(input.charAt(i++));  enc4 = keyStr2.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) {  output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3);
}  chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }

function decrypto2(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g;  if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do {  enc1 = keyStr2.indexOf(input.charAt(i++)); enc2 = keyStr2.indexOf(input.charAt(i++)); enc3 = keyStr2.indexOf(input.charAt(i++));  enc4 = keyStr2.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) {  output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3);
}  chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(decrypto(output)); }

// Tripo-5
var keyStr3 = "ghijopE+G78lmnIJ" + "QRXY=abcS/UVWdef" + "ABCs456tDqruvNOP" + "wx2KLyz01M3Hk9ZF" + "T";
function encodo(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr3.charAt(enc1) + keyStr3.charAt(enc2) + keyStr3.charAt(enc3) + keyStr3.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; }

function decodo(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g; if (mimcod.exec(input)) { } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do { enc1 = keyStr3.indexOf(input.charAt(i++));  enc2 = keyStr3.indexOf(input.charAt(i++)); enc3 = keyStr3.indexOf(input.charAt(i++)); enc4 = keyStr3.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3); } chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }

// Gila7

var keyStr4 = "7ZSTJK+W=cVtBCas" + "yf0gzA8uvwDEq3XH" + "/1RMNOILPQU4klm6" +   "5YbdeFrx2hij9nop" + "G";
function egila(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2;  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr4.charAt(enc1) + keyStr4.charAt(enc2) +  keyStr4.charAt(enc3) + keyStr4.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; } 

function dgila(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g;  if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do {  enc1 = keyStr4.indexOf(input.charAt(i++)); enc2 = keyStr4.indexOf(input.charAt(i++)); enc3 = keyStr4.indexOf(input.charAt(i++));  enc4 = keyStr4.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) {  output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3);
}  chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }


// Hazz-15
var keyStr5 = "HNO4klm6ij9n+J2h" + "yf0gzA8uvwDEq3X1" + "Q7ZKeFrWcVTts/MR" +   "GYbdxSo=ILaUpPBC" + "5";
function ehazz(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2;  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr5.charAt(enc1) + keyStr5.charAt(enc2) +  keyStr5.charAt(enc3) + keyStr5.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; } 

function dhazz(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g;  if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do {  enc1 = keyStr5.indexOf(input.charAt(i++)); enc2 = keyStr5.indexOf(input.charAt(i++)); enc3 = keyStr5.indexOf(input.charAt(i++));  enc4 = keyStr5.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) {  output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3);
}  chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }


// TIGO-3FX
var keyStr6 = "FrsxyzA8VtuvwDEq" + "WZ/1+4klm67=cBCa" + "5Ybdef0g2hij9nop" + "MNO3GHIRSTJKLPQU" + "X";
function etigo3fx(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr6.charAt(enc1) + keyStr6.charAt(enc2) + keyStr6.charAt(enc3) + keyStr6.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; }

function tigo3fx(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g; if (mimcod.exec(input)) { } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do { enc1 = keyStr6.indexOf(input.charAt(i++));  enc2 = keyStr6.indexOf(input.charAt(i++)); enc3 = keyStr6.indexOf(input.charAt(i++)); enc4 = keyStr6.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3); } chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }


// FERON-74
var keyStr7 = "75XYTabcS/UVWdef" + "ADqr6RuvN8PBCsQt" + "wx2KLyz+OM3Hk9gh" + "i01ZFlmnjopE=GIJ" + "4";
function eferon(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2;  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr7.charAt(enc1) + keyStr7.charAt(enc2) +  keyStr7.charAt(enc3) + keyStr7.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; } 

function dferon(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g;  if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do {  enc1 = keyStr7.indexOf(input.charAt(i++)); enc2 = keyStr7.indexOf(input.charAt(i++)); enc3 = keyStr7.indexOf(input.charAt(i++));  enc4 = keyStr7.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) {  output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3);
}  chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }


// ZONG-22
var keyStr8 = "ZKj9n+yf0wDVX1s/" + "5YbdxSo=ILaUpPBC" + "Hg8uvNO4klm6iJGh" + "Q7eFrWczAMEq3RTt" + "2";
function ezong22(input) { input = escape(input); var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; do { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; } output = output + keyStr8.charAt(enc1) + keyStr8.charAt(enc2) + keyStr8.charAt(enc3) + keyStr8.charAt(enc4); chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return output; }

function zong22(input) { var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = ""; var i = 0; var mimcod = /[^A-Za-z0-9\+\/\=]/g; if (mimcod.exec(input)) {  } input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do { enc1 = keyStr8.indexOf(input.charAt(i++));  enc2 = keyStr8.indexOf(input.charAt(i++)); enc3 = keyStr8.indexOf(input.charAt(i++)); enc4 = keyStr8.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2); } if (enc4 != 64) { output = output + String.fromCharCode(chr3); } chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = ""; } while (i < input.length); return unescape(output); }

// ROT13
function rot13(a)
	{
	return a.replace(/[A-Za-z]/g,function(c)
		{
		return String.fromCharCode((((c=c.charCodeAt(0))&223)-52)%26+(c&32)+65)
	}
	)
}



// Morse
var ascii=new Array(' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9',',','?','-',"'",'','`','.');
var morse=new Array('/','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','-----','.----','..---','...--','....-','.....','-....','--...','---..','----.','.-.-.-','--..--','..--..','-....-','.----.','.----.','');
function tomorse(a)
	{
	var t=a.toString().replace(/\s/g,' ').replace(/ +/g,' ');
	var r='';
	var c,l='';
	for(var i=0;
	i<t.length;
	i++)
		{
		c=t.substr(i,1);
		r+=c==l?'':fix(c);
		l=c
	}
	r=r.toString().replace(/ \/ \/ /g," / ");
	return r
}
function fix(a)
	{
	a=a.toUpperCase();
	for(var i=0;
	i<ascii.length;
	i++)if(a==ascii[i])return(i>26?'/ ':'')+morse[i]+' '
}


// Caesar
var MCarr=new Array("*","|",".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.");
var ABC012arr="*|ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function DoMorseDecrypt(x)
	{
	mess="";
	apos=0;
	bpos=0;
	while(bpos<x.length)
		{
		bpos=x.indexOf(" ",apos);
		if(bpos<0)
			{
			bpos=x.length
		};
		dits=x.substring(apos,bpos);
		apos=bpos+1;
		let="";
		for(j=0;
		j<MCarr.length;
		j++)
			{
			if(dits==MCarr[j])
				{
				let=ABC012arr.charAt(j)
			}
		};
		if(let=="")
			{
			let="*"
		};
		mess+=let
	};
	return mess
};
function DoMorseEncrypt(x)
	{
	mess="";
	for(i=0;
	i<x.length;
	i++)
		{
		let=x.charAt(i).toUpperCase();
		for(j=0;
		j<MCarr.length;
		j++)
			{
			if(let==ABC012arr.charAt(j))
				{
				mess+=MCarr[j]
			}
		};
		mess+=" "
	}
	mess=mess.substring(0,mess.length-1);
	return mess
};
function DoReverse(x)
	{
	y="";
	for(i=0;
	i<x.length;
	i++)
		{
		y+=x.charAt(x.length-1-i)
	};
	return y
};
function DoCaeserEncrypt(x,a)
	{
	abc="abcdefghijklmnopqrstuvwxyz";
	ABC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	r1="";
	r2="";
	a=eval(a);
	for(i=0;
	i<x.length;
	i++)
		{
		let=x.charAt(i);
		pos=ABC.indexOf(let);
		if(pos>=0)
			{
			r1+=ABC.charAt((pos+a)%26)
		}
		else
			{
			r1+=let
		}
	};
	for(i=0;
	i<r1.length;
	i++)
		{
		let=r1.charAt(i);
		pos=abc.indexOf(let);
		if(pos>=0)
			{
			r2+=abc.charAt((pos+a)%26)
		}
		else
			{
			r2+=let
		}
	};
	return r2
};
function DoCaeserDecrypt(x,a)
	{
	return DoCaeserEncrypt(x,26-a)
};



function bintoascii(a)
	{
	if(a=='')
		{
		return''
	}
	r='';
	a=a.replace(/\s+/ig,' ');
	a=a.split(' ').join('');
	for(i=0;
	i<a.length;
	i+=8)
		{
		r+=String.fromCharCode(parseInt(a.substr(i,8),2))
	}
	return r
}

var q='abcdefghijklmnopqrstuvwxyz?*<>!=)-_.\'"+7 ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var z='\u2200\xDF\u262a\u2202\u03a3\u0192\u2761\u210c\u0457\u05E0\u043A\u00a3\u10e6\u043f\xF8\u03C1\u24E0\u044F\u015f\u2602\u222a\u221A\u2646\u2715\xA5\u1E95\u2048\u25CF\xAB\xBB\u2763\u2255\u03E1\u270F\u2581\u25AA\u2037\u2034\u27197\xA0\xC5\u212C\u212D\xD0\u20ac\u2231\u1E20\u2653\u2111J\u1E32\u2112\u264F\u2115\u047A\u1E54\u211A\u211C$\u2020\xDC\u2164\u20A9\u2716\u1E8E\u2124';
function encool(a)
	{
	if(a=='')
		{
		return''
	}
	var b='';
	var c=a;
	for(i=0;
	i<c['length'];
	i++)
		{
		var e=0;
		var d=c['charAt'](i);
		for(;
		(e<q['length'])&&(d!=q['charAt'](e));
		e++)
			{
		};
		if(e<q['length'])
			{
			b+=z['charAt'](e)
		}
		else
			{
			b+=d
		}
	}
	return b
}


function _rand()
	{
	return Math.floor(Math.random()*3)
}
function _encodearab(a)
	{
	if(a=='')
		{
		return a
	}
	u=a.match(/ش/);
	if(u)
		{
		return a
	}
	var r='';
	a=RX(encodeURIComponent(a));
	for(i=0;
	i<a.length;
	i++)
		{
		d=SR(a.charCodeAt(i));
		r+=d
	}
	r=_arabica(r,1);
	r=r.split('|').join('');
	r=r.split('0').join('');
	r=r.split('1').join('');
	r=r.split('2').join(' ');
	r=r.split('3').join(' ');
	r=RX(r);
	return r+'ش'
}
function _decodearab(a)
	{
	if(a=='')
		{
		return''
	}
	var r='';
	a=RX(a);
	a=a.split('ش').join('');
	a=a.replace(/\s+/ig,' ');
	a=a.split(' ').join('');
	a=_arabica(a,0);
	for(i=0;
	i<a.length;
	i+=5)
		{
		r+=String.fromCharCode(parseInt(a.substr(i,5),3))
	}
	r=decodeURIComponent(RX(r));
	return r
}
function SR(a)
	{
	g=_rand();
	var r="00000"+a.toString(3);
	r=r.substr(r.length-5,5);
	return r+'|'+g+'|'
}
function RX(c)
	{
	r='';
	for(i=0;
	i<c.length;
	i++)
		{
		r=c.substring(i,i+1)+r
	}
	return r
}
var aa=new Array();
aa[0]=['10121','غ'];
aa[1]=['10122','ظ'];
aa[2]=['10200','ذ'];
aa[3]=['10201','خ'];
aa[4]=['10202','ب'];
aa[5]=['10210','ت'];
aa[6]=['10211','س'];
aa[7]=['10212','ر'];
aa[8]=['10220','ق'];
aa[9]=['10221','ض'];
aa[10]=['10222','ف'];
aa[11]=['11000','ع'];
aa[12]=['11001','ص'];
aa[13]=['11002','ن'];
aa[14]=['11010','م'];
aa[15]=['11011','ل'];
aa[16]=['11012','ك'];
aa[17]=['11020','ي'];
aa[18]=['11021','ط'];
aa[19]=['11022','ح'];
aa[20]=['11100','ز'];
aa[21]=['11101','و'];
aa[22]=['11102','ه'];
aa[23]=['11110','د'];
aa[24]=['11111','ج'];
aa[25]=['11112','ﺵ'];
aa[26]=['01210','ﺹ'];
aa[27]=['01211','ﻃ'];
aa[28]=['01212','أ'];
aa[29]=['01220','ا'];
aa[30]=['01221','ـ'];
aa[31]=['01222','‎ݣ‎'];
aa[32]=['02000','چ'];
aa[33]=['02001','گ'];
aa[34]=['02002','آ'];
aa[35]=['02010','ة'];
aa[36]=['02102','ى'];
aa[37]=['02110','ک'];
aa[38]=['02111','ی'];
aa[39]=['02112','پ'];
aa[40]=['02120','۴'];
aa[41]=['02121','۸'];
aa[42]=['02122','۶'];
aa[43]=['02200','۱'];
aa[44]=['02201','ﭻ'];
aa[45]=['02202','ئ'];
aa[46]=['02210','ە'];
aa[47]=['02211','ﻼ'];
aa[48]=['02212','ﻻ'];
aa[49]=['02220','ّ'];
aa[50]=['02221','ِ'];
aa[51]=['02222','ژ'];
aa[52]=['10000','ڨ'];
aa[53]=['10001','ڜ'];
aa[54]=['10002','ﷲ'];
aa[55]=['10010','ﺑ'];
aa[56]=['10011','ﭘ'];
aa[57]=['10012','ﺗ'];
aa[58]=['10020','ﺛ'];
aa[59]=['10021','ﺟ'];
aa[60]=['10022','ﺣ'];
aa[61]=['10100','ﺡ'];
aa[62]=['01101','ﺿ'];
aa[63]=['01111','ﻏ'];
aa[64]=['01112','ﻓ'];
aa[65]=['01200','ﻑ'];
aa[66]=['01120','ﻕ'];
aa[67]=['01020','ﮐ'];
aa[68]=['10112','ﻝ'];
aa[69]=['01201','ﻡ'];
aa[70]=['01110','ﻥ'];
aa[71]=['11200','ﻳ'];
function _arabica(c,s)
	{
	if(s==1)
		{
		for(i=0;
		i<aa.length;
		i++)
			{
			c=c.split(aa[i][0]).join(aa[i][1])
		}
	}
	else
		{
		for(i=0;
		i<aa.length;
		i++)
			{
			c=c.split(aa[i][1]).join(aa[i][0])
		}
	}
	return c
}



// f46
var zipco_bas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function zipco_dec(str) {
    str = str.split('@').join('CAg');
    str = str.split('!').join('W5');
    str = str.split('*').join('CAgI');
    var bt, dt = '';
    for (i = 0; i < str.length; i += 4) {
        bt = (zipco_bas.indexOf(str.charAt(i)) & 0xff) << 18 | (zipco_bas.indexOf(str.charAt(i + 1)) & 0xff) << 12 | (zipco_bas.indexOf(str.charAt(i + 2)) & 0xff) << 6 | zipco_bas.indexOf(str.charAt(i + 3)) & 0xff;
        dt += String.fromCharCode((bt & 0xff0000) >> 16, (bt & 0xff00) >> 8, bt & 0xff);
    }
    if (str.charCodeAt(i - 2) == 61) {
        return (dt.substring(0, dt.length - 2));
    } else if (str.charCodeAt(i - 1) == 61) {
        return (dt.substring(0, dt.length - 1));
    } else {
        return (dt)
    };
}


zipco_dec('PHNjcmlwdCBsY!ndWFnZT1KYXZhU2NyaXB0Pg0KdmFyIGtleVN0ciA9ICJBQkNEcXJzNDU2dHV2Tk9QIiArICJ3eHl6MDEyS0xNMzc4OT0rIiArICJRUlNUVVZXWFlaYWJjZGVmIiArICJnaGlqa2xtbm9wRUZHSElKIiArICIvIjsNCjwvc2NyaXB0Pg==');
var keyStrDBase = "asd";
function ebase(a) {

    a = escape(a);
    var b = "";
    var c, chr2, chr3 = "";
    var d, enc2, enc3, enc4 = "";
    var i = 0;
    do {
        c = a.charCodeAt(i++);
        chr2 = a.charCodeAt(i++);
        chr3 = a.charCodeAt(i++);
        d = c >> 2;
        enc2 = ((c & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64
        } else if (isNaN(chr3)) {
            enc4 = 64
        }
        b = b + keyStrDBase.charAt(d) + keyStrDBase.charAt(enc2) + keyStrDBase.charAt(enc3) + keyStrDBase.charAt(enc4);
        c = chr2 = chr3 = "";
        d = enc2 = enc3 = enc4 = ""
    } while (i < a.length);
    return b
}
function desab64(a) {
    var b = "";
    var c, chr2, chr3 = "";
    var d, enc2, enc3, enc4 = "";
    var i = 0;
    var e = /[^A-Za-z0-9\+\/\=]/g;
    if (e.exec(a)) {
       // alert("Errors in decoding.")
    }
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do {
        d = keyStrDBase.indexOf(a.charAt(i++));
        enc2 = keyStrDBase.indexOf(a.charAt(i++));
        enc3 = keyStrDBase.indexOf(a.charAt(i++));
        enc4 = keyStrDBase.indexOf(a.charAt(i++));
        c = (d << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        b = b + String.fromCharCode(c);
        if (enc3 != 64) {
            b = b + String.fromCharCode(chr2)
        }
        if (enc4 != 64) {
            b = b + String.fromCharCode(chr3)
        }
        c = chr2 = chr3 = "";
        d = enc2 = enc3 = enc4 = ""
    } while (i < a.length);
    return unescape(b)
}

