function xmlParser(xml, tag) {
let front = '<' + tag + '>';
let start = xml.indexOf(front);
let end = xml.indexOf('</' + tag + '>')

if (start > -1, end > start) {
return xml.substring(start + front.length, end) }
}
