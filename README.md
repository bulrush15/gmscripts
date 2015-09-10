# gmscripts
GreaseMonkey scripts

# changer.user.js

Changes some strings to other strings. To change the strings, edit the script itself. 
Edit the variable arReplacements. The first string is the string to look for, the second string is the string
to change it to. Strings are case sensitive so don't forget variations of each word with initial caps. 

* "man":"blue" means change "man" to "blue" in the whole page. This will not change "Man" to "blue". 
* In variable arReplacements, words with apostrophes must come before singular words. So "man's" must come before "man". 
