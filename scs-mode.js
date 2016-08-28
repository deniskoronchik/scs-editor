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

function isSystemKeynode(value) {
  return (system_keynodes.indexOf(value) >= 0);
}

/// --------------

var A_code = 'A'.charCodeAt(0);
var Z_code = 'Z'.charCodeAt(0);
var a_code = 'a'.charCodeAt(0);
var z_code = 'z'.charCodeAt(0);
var idelim_code = '#'.charCodeAt(0);
var code_0 = '0'.charCodeAt(0);
var code_9 = '9'.charCodeAt(0);
var _code = '_'.charCodeAt(0);
var pt_code = '.'.charCodeAt(0);

function system_idtf_checker() {
  var char_count = 0;
  return function(char) {
    char_count++;

    var code = char.charCodeAt(0);
    if (char_count > 2 && code == pt_code) {
      return false;
    }

    if ((code >= A_code && code <= Z_code) ||
        (code >= a_code && code <= z_code) ||
        (code >= code_0 && code <= code_9) ||
        (code == idelim_code) ||
        (code == _code) ||
        (code == pt_code))
    {
      return true;
    }

    return false;
  }
}

module.exports = function ScsMode(CodeMirror) {

  function collect_system_idtf(stream, state) {

    if (stream.eatWhile(system_idtf_checker())) {
      var value = stream.current();
      if (isSystemKeynode(value)) {
        return 'scs-system-keynode';
      }
      return 'scs-system-idtf';
    }

    return null;
  }

  function collect_edge(stream, state) {
    for (var e = 0; e < edges.length; ++e) {
      if (stream.match(edges[e]))
        return 'scs-edge';
    }
    return null;
  }

  function collect_special_symbols(stream, state) {
    if (stream.match('(*') || stream.match('*)')) {
      return 'scs-symbol';
    }

    if (stream.match(';')) {
      return 'scs-delim';
    }
    
    return null;
  }

  return {
    startState: function(basecolumn) {
      return {inString: false};
    },

    token: function (stream, state) {
      var res = collect_system_idtf(stream, state);
      if (res) {
        return res;
      }

      res = collect_edge(stream, state);
      if (res) {
        return res;
      }

      res = collect_special_symbols(stream, state);
      if (res) {
        return res;
      }

      stream.next();
      return null;
    },

    indent: function(state, textAfter) {

    },

    blockCommentStart: '/*',
    blockCommentEnd: '*/',
    lineComment: '//',
    fold: 'brace'
  }
};
