function xmlParser(xml, tag) {
var array = [];
var front = '<' + tag + '>'
var back = '</' + tag + '>'
for (let cut = xml; cut.includes(front),
cut.indexOf(front) < cut.indexOf(back);
cut = cut.slice(cut.indexOf(back) + back.length, cut.length)
) {
  array.push(cut.slice(cut.indexOf(front) + front.length,
  cut.indexOf(back)));
}
return(array);
}