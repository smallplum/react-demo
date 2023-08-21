export default function getValue() {
  function fn(str) {
    return str.match(/<span[^>]*>([\s\S]*?)<\/span>/)[1];
  }
  const str =
    '<b>H2</b> | <b>UNL 1</b><b></b> | <b> </b> | atomId_10 | <span id="atom_info" style="display:none"> _UNL_1</span> | <span id="atom_pos" style="display:none">2.0199999809265137_-1.0989999771118164_-0.9049999713897705</span> | <small>Instance 1_555</small> | <small>Model 1</small> | <small>String</small>';
  console.log('str', str);
  console.log('value', fn(str));

  const spans = str.match(/<span (.*?)>(.*?)<\/span>/g);
  console.log('spans', spans);
}
