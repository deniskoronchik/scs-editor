# scs-editor
Html base editor for scs-language
![Screenshot](https://raw.githubusercontent.com/deniskoronchik/scs-editor/master/screenshot.png)

Features:
* Syntax highlight
* Simple embiding into any projects

Install:
```
npm install https://github.com/deniskoronchik/scs-editor.git
```

Usage
```javascript
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
