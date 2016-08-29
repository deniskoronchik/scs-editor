var CodeMirror = require('codemirror');
var CodeMirrorHint = require('codemirror/addon/hint/show-hint')
var mode = require('./scs-mode');
var hint = require('./scs-hint');

CodeMirror.defineMode("scs", mode);
CodeMirror.registerHelper("hint", "scs", hint)

/* Options:
 * - container - container dom element
 */
function ScsEditorImpl(options) {

  var editor = new CodeMirror(options.container, {
    mode: 'scs',
    lineNumbers: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete"
    },
    hintOptions: {
      hint: hint.hint
    },
    value: options.value  /// TODO: replace special sybols to HTML safe version '<', '>'
  });

  return {

  }
}

module.exports = {
  ScsEditor:  ScsEditorImpl
};
