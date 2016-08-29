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

In html:
```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="node_modules/codemirror/lib/codemirror.css">
  <link rel="stylesheet" type="text/css" href="node_modules/codemirror/addon/hint/show-hint.css">
  ...
  <script src="node_modules/codemirror/lib/codemirror.js"></script>
</head>
```

Develop:
```
git clone https://github.com/deniskoronchik/scs-editor.git
cd scs-editor
npm install
npm test
```
