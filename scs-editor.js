var CodeMirror = require('codemirror');
var mode = require('./scs-mode');

CodeMirror.defineMode("scs", mode);

/* Options:
 * - container - container dom element
 */
function ScsEditorImpl(options) {

  var editor = new CodeMirror(options.container, {
    mode: 'scs',
    lineNumbers: true,
    value: options.value  /// TODO: replace special sybols to HTML safe version '<', '>'
  });

  return {

  }
}

module.exports = {
  ScsEditor:  ScsEditorImpl
};
