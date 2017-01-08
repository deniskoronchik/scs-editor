var scs_editor = require('../scs-editor');
var fs = require('fs');

try {
  var scs_value = fs.readFileSync('test/test.scs');
} catch(err) {
  console.log(err);
}

var editor = new scs_editor.ScsEditor({
  container: document.getElementById('test-container'),
  value: scs_value.toString()
});

var editor2 = new scs_editor.ScsEditor({
  container: document.getElementById('test-container2'),
  value: ""
});

editor2.setContent("// content 2\ntest -> test2;;");
