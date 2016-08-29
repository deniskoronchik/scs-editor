# scs-editor
Html base editor for scs-language

Install:
```
npm install https://github.com/deniskoronchik/scs-editor.git
```

Usage
```
var scs_editor = require('scs-editor');
...
var editor = new scs_editor.ScsEditor({
  container: document.getElementById('test-container'),
  value: '<test scs text>'
});
```

Develop:
```
git clone https://github.com/deniskoronchik/scs-editor.git
cd scs-editor
npm install
npm test
```
