$(document).ready(function(){
	var code = $(".codemirror-html")[0];
	var editor = CodeMirror.fromTextArea(code, {
	  lineNumbers : true,
    tabSize:3,
    styleActiveLine: true,
    theme:"udb-dark",
    matchBrackets: true,
    mode: "text/html"
	});
});
$(document).ready(function(){
	var code = $(".codemirror-js")[0];
	var editor = CodeMirror.fromTextArea(code, {
	  lineNumbers : true,
    tabSize:3,
    styleActiveLine: true,
    theme:"udb-dark",
    matchBrackets: true,
    mode: "javascript"
	});
});
$(document).ready(function(){
	var code = $(".codemirror-css")[0];
	var editor = CodeMirror.fromTextArea(code, {
	  lineNumbers : true,
    tabSize:3,
    styleActiveLine: true,
    theme:"udb-dark",
    matchBrackets: true,
    mode: "css"
	});
});