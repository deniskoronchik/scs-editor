
var system_keynodes = [
  'sc_edge_const',
  'sc_edge_var',
  'sc_arc_common_const',
  'sc_arc_common_var',
  'sc_arc_access_var_pos_perm',
  'sc_arc_access_const_neg_perm',
  'sc_arc_access_var_neg_perm',
  'sc_arc_access_const_fuz_perm',
  'sc_arc_access_var_fuz_perm',
  'sc_arc_access_const_pos_temp',
  'sc_arc_access_var_pos_temp',
  'sc_arc_access_const_neg_temp',
  'sc_arc_access_var_neg_temp',
  'sc_arc_access_const_fuz_temp',
  'sc_arc_access_var_fuz_temp',
  'sc_const',
  'sc_var',
  'sc_type_node',
  'sc_node_not_binary_tuple',
  'sc_node_struct',
  'sc_node_role_relation',
  'sc_node_norole_relation',
  'sc_node_not_relation',
  'sc_node_abstract',
  'sc_node_material'
];

var edges = [
  '>', '<',
  '->','<-',
  '<>',
  '..>', '<..',
  '<=>',
  '_<=>',
  '=>', '<=',
  '_=>', '_<=',
  '_->', '_<-',
  '-|>', '<|-',
  '_-|>', '_<|-',
  '-/>', '</-',
  '_-/>', '_</-',
  '~>', '<~',
  '_~>', '_<~',
  '~|>', '<|~',
  '_~|>', '_<|~',
  '~/>', '</~',
  '_~/>', '_</~'
];

function hintImpl(cm) {
  return new Promise(function(accept) {
      setTimeout(function() {
        var regexp = /[\w|#|_]/;
        var cursor = cm.getCursor(),
              line = cm.getLine(cursor.line);
        var start = cursor.ch,
            end = cursor.ch;
        while (start && regexp.test(line.charAt(start - 1))) --start;
        while (end < line.length && regexp.test(line.charAt(end))) ++end;
        var word = line.slice(start, end).toLowerCase();

        // collect autocomplete results
        var result = [];
        for (var i = 0; i < system_keynodes.length; i++) {
          if (system_keynodes[i].indexOf(word) != -1) {
            result.push({
              text: system_keynodes[i],
              className: 'cm-scs-system-keynode'
            });
          }
        }

        
        if (result.length > 0) {
          return accept({list: result,
                         from: CodeMirror.Pos(cursor.line, start),
                         to: CodeMirror.Pos(cursor.line, end)
                       });
        }
        return accept(null);
      }, 100)
    })
}

module.exports = {
  hint: hintImpl,
  system_keynodes: system_keynodes,
  edges: edges
};
