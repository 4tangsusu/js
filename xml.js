function xmlParser(xml, tag) {
if (xml.includes('<' + tag + '>'),
xml.indexOf('<' + tag + '>') < xml.indexOf('</' + tag + '>')
) {
return(xml.slice(
xml.indexOf('<' + tag + '>') + tag.length + 2,
xml.indexOf('</' + tag + '>') - 1)
) }
}
