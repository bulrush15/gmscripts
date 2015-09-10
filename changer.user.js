// changer.user.js
// ==UserScript==
// @name        Changer
// @namespace   bulrush
// @description Convert 'men' and 'women' to different words
// @homepage blank
// @downloadURL blank
// @updateURL blank
// @supportURL blank
// @contributionURL blank

// Include these sites. www.domain.com/* required!
// @include     http://www.reddit.com/*
// @include     https://www.reddit.com/*
// Exclude these sites. www.domain.com/* required!

// @version     0.02
// @grant       none
// ==/UserScript==
// Conversion table

// HTML Elements to check: p, h1, h2, h3, a, div, span, td, li, blockquote, label, option
// Attributes to check: title, alt

//console.log("Starting, eleArr.length="+eleArr.length);

// First loop through every element to check for string in fromArr[].
//for (i=0; i < eleArr.length; i++)
//  {
//  test1(eleArr[i]); // Process one element at a time.
//  }

// test 2
// From http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Beautifying_the_Web#Straighten_Smart_Quotes
var arReplacements = {
	"woman": "pink",
	"women": "pinks",
  "Woman":"Pink",
  "Woman's":"Pink's",
  "Women":"Pink",

  "men": "blues",
	"man": "blue",
  "man's": "blue's",
  "Men": "Blues",
  "Man":"Blue",
  "Man's":"Blue's",
  
  "girl": "pink",
  "Girl":"Pink",
  "girl":"pink",
  "Girl's":"Pink's",
  "girl's":"Pink's"
  };

var arRegex = new Array();
for (var sKey in arReplacements) 
   {
	   arRegex[sKey] = new RegExp(sKey, 'g');
   }

changetext();


//end of program


////////////////////////////////////////////////////////////////
function changetext()
{

var snapTextNodes = document.evaluate("//text()[" +
	   "not(ancestor::script) and not(ancestor::style)]",
	   document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = snapTextNodes.snapshotLength - 1; i >= 0; i--) {
    var elmTextNode = snapTextNodes.snapshotItem(i);
    var sText = elmTextNode.data;
    for (var sKey in arReplacements) 
        {
	      sText = sText.replace(arRegex[sKey], arReplacements[sKey]);
        }
    elmTextNode.data = sText;
    }

} // changetext()
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
