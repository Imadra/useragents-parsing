l = document.getElementsByClassName('useragent');
var r = [];
var s = '';
for(var i=1;i<l.length;i++) {
	k = l[i].innerHTML.split('>')[1];
	r.push(k.split('<')[0]);
	s += '\''+k.split('<')[0]+'\', ';
}
console.log(s);

/*

*/