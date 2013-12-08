// ==UserScript==
// @name         Autoroll Inserts
// @namespace    autoroll_inserts
// @match      https://peerbet.org/dice/*
// @description  Inserts autoroll links to peerbet.org's dice page
// ==/UserScript==

// This inserts links to:
// jquery.js -- version held on peerbet.org
// autoroll.css -- held on github
// autoroll.js -- held on github
// autoroll.html -- held on github
// NB use https://rawgithub.com
// instead of https://raw.github.com since correct mime types are served


// load jQuery then callback when ready
function addJQuery(callback) {

console.log("inserting jQuery");

    var jquery_script = document.createElement("script");
    jquery_script.id = "jquery";
    jquery_script.setAttribute("src", "../themes/js/public/jquery.js");
    jquery_script.addEventListener('load', function() {
        var jq_insert_script = document.createElement("script");
        jq_insert_script.id = "jqLoad";
        jq_insert_script.textContent = 
            "$=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.head.appendChild(jq_insert_script);                
    }, false);
    document.head.appendChild(jquery_script);

console.log("inserting autoroll.js");

    var autoroll_script = document.createElement("script");
    autoroll_script.setAttribute("id", "autoroll_js");
    autoroll_script.setAttribute("src", "https://rawgithub.com/hashtagzx81/autoroll/master/autoroll.js");
    document.head.appendChild(autoroll_script);

console.log("inserting autoroll.css");

    var autoroll_css = document.createElement("link");
    autoroll_css.setAttribute("id", "autoroll_css");
    autoroll_css.setAttribute("rel", "stylesheet");
    autoroll_css.setAttribute("href", "https://rawgithub.com/hashtagzx81/autoroll/master/autoroll.css");
        //rawgithub sends as text/css
    document.head.appendChild(autoroll_css);

}

// the guts of this userscript
function main() {
console.log("jQuery ready");

console.log("inserting #extern");
    
    $("#pnlDiceLauncher").after('<div id="extern"></div>');    
    $("#extern").load(
        "https://rawgithub.com/hashtagzx81/autoroll/master/autoroll.html",
        function(){
console.log("initialising #autoroll");
            autoroll.init();        
        }
    ); //autorollInit needs html to be loaded
    
    
}

// load jQuery and execute the main function
addJQuery(main);
