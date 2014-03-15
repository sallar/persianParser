/**
 * persianParser.js
 *
 * Converts persian text to work with iOS/Android webfonts,
 * parses the text and changes it's unicode values to work
 * on iOS/Anroid browsers.
 *
 * Copyright 2013, Sallar Kaboli <sallar.kaboli@gmail.com>
 * http://sallar.me
 *
 * Based on the code from:
 * http://ixdc.net/arabic/
 * 
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github: https://github.com/sallar/persianParser
 * Version: 0.1.0
 */
(function (){

    /**
     * Configuration and default variables
     */
    var VERSION   = "0.1.0"
      , hasModule = (typeof module !== 'undefined' && module.exports)
      , chars     = ''
      , special   = "اأإآدذرزوؤء";
        special  += String.fromCharCode(0xFEFC,0xFEFB,0xFEF8,0xFEF7,0xFEFA,0xFEF9,0xFEF6,0xFEF5);

    /**
     * persian characters and their associated alternatives
     *
     * structure :
     * character : [ solo, begin, middle, end, Lam-Alef-1, Lam-Alef-2 ]
     */
        characterAlternatives = {
            "ا": [0xFE8D, 0xFE8D, 0xFE8E, 0xFE8E, 0xFEFC, 0xFEFB],
            "أ": [0xFE83, 0xFE83, 0xFE84, 0xFE84, 0xFEF8, 0xFEF7],
            "إ": [0xFE87, 0xFE87, 0xFE88, 0xFE88, 0xFEFA, 0xFEF9],
            "آ": [0xFE81, 0xFE81, 0xFE82, 0xFE82, 0xFEF6, 0xFEF5],
            "ب": [0xFE8F, 0xFE91, 0xFE92, 0xFE90],
            "پ": [0xFB56, 0xFB58, 0xFB59, 0xFB57],
            "ت": [0xFE95, 0xFE97, 0xFE98, 0xFE96],
            "ث": [0xFE99, 0xFE9B, 0xFE9C, 0xFE9A],
            "ج": [0xFE9D, 0xFE9F, 0xFEA0, 0xFE9E],
            "چ": [0xfb7a, 0xfb7c, 0xfb7d, 0xfb7b],
            "ح": [0xFEA1, 0xFEA3, 0xFEA4, 0xFEA2],
            "خ": [0xFEA5, 0xFEA7, 0xFEA8, 0xFEA6],
            "د": [0xFEA9, 0xFEA9, 0xFEAA, 0xFEAA],
            "ذ": [0xFEAB, 0xFEAB, 0xFEAC, 0xFEAC],
            "ر": [0xFEAD, 0xFEAD, 0xFEAE, 0xFEAE],
            "ز": [0xFEAF, 0xFEAF, 0xFEB0, 0xFEB0],
            "ژ": [0xfb8a, 0xfb8a, 0xfb8b, 0xfb8b],
            "س": [0xFEB1, 0xFEB3, 0xFEB4, 0xFEB2],
            "ش": [0xFEB5, 0xFEB7, 0xFEB8, 0xFEB6],
            "ص": [0xFEB9, 0xFEBB, 0xFEBC, 0xFEBA],
            "ض": [0xFEBD, 0xFEBF, 0xFEC0, 0xFEBE],
            "ط": [0xFEC1, 0xFEC3, 0xFEC4, 0xFEC2],
            "ظ": [0xFEC5, 0xFEC7, 0xFEC8, 0xFEC6],
            "ع": [0xFEC9, 0xFECB, 0xFECC, 0xFECA],
            "غ": [0xFECD, 0xFECF, 0xFED0, 0xFECE],
            "ف": [0xFED1, 0xFED3, 0xFED4, 0xFED2],
            "ق": [0xFED5, 0xFED7, 0xFED8, 0xFED6],
            "ك": [0xFED9, 0xFEDB, 0xFEDC, 0xFEDA],
            "ک": [0xfed9, 0xfedb, 0xfedc, 0xfeda],
            "گ": [0xfb92, 0xfb94, 0xfb95, 0xfb93],
            "ل": [0xFEDD, 0xFEDF, 0xFEE0, 0xFEDE],
            "م": [0xFEE1, 0xFEE3, 0xFEE4, 0xFEE2],
            "ن": [0xFEE5, 0xFEE7, 0xFEE8, 0xFEE6],
            "ه": [0xFEE9, 0xFEEB, 0xFEEC, 0xFEEA],
            "ة": [0xFE93, "", "", 0xFE94],
            "و": [0xFEED, 0xFEED, 0xFEEE, 0xFEEE],
            "ؤ": [0xFE85, 0xFE85, 0xFE86, 0xFE86],
            "ی": [0xfeef, 0xfef3, 0xfef4, 0xfef0],
            "ي": [0xFEF1, 0xFEF3, 0xFEF4, 0xFEF2],
            "ئ": [0xFE89, 0xFE8B, 0xFE8C, 0xFE8A],
            "ء": [0xFE80],
            "۰": [0x0660],
            "۱": ["1"],
            "۲": ["2"],
            "۳": ["3"],
            "۴": ["4"],
            "۵": ["5"],
            "۶": ["6"],
            "۷": ["7"],
            "۸": ["8"],
            "۹": ["9"],
            "?": [0x061F]
        }

    /**
     * PersianParser main class
     * 
     * @param {String} str Input String
     * @class PersianParser
     */
    function PersianParser(str)
    {
        this._str = str;
        chars     = str;
    }

    /**
     * Parses persian text to work on iOS/Android
     * 
     * @param  {String} input Input String
     * @return {Object}       PersianParser Object
     */
    function _parseChars(input)
    {
        if (!input) {
            return;
        }

        var string    = ""
          , strLength = input.length;

        for (var i = 0; i < strLength; i++) {
            string += _replaceChar(i);
        }

        this._str = string;
        return this;
    }

    /**
     * Replaces persian characters with appropriate charCodes
     * 
     * @param  {Integer} i Character location in the string
     * @return {String}    Fixed character
     */
    function _replaceChar(i)
    {
        charToReplace = chars.charAt(i);

        if (characterAlternatives[charToReplace]) {
            var alternatives = characterAlternatives[charToReplace];

            if (alternatives.length == 1) {
                var alternative = alternatives[0];
                return (alternative >= 0 && alternative <= 9) ? alternative : String.fromCharCode(alternative);
            }
            else {
                var solo = String.fromCharCode(alternatives[0]);
                var begin =alternatives[1] != "" ? String.fromCharCode(alternatives[1]) : "";
                var middle = alternatives[2] != "" ? String.fromCharCode(alternatives[2]) : "";
                var end = String.fromCharCode(alternatives[3]);

                return _setChar(i, solo, begin, middle, end);
            }
        }
        else{
            return charToReplace;
        }
    }

    /**
     * Determines correct character position
     * 
     * @param {Integer} i      Character location in the string
     * @param {String}  solo   Solo character
     * @param {String}  begin  Begin character
     * @param {String}  middle Middle character
     * @param {String}  end    End character
     * @return {String}        Replaced character
     */
    function _setChar(i, solo, begin, middle, end)
    {
        var string = "";

        // Detect Lam-Alef (ﻻ) cases
        // -----------------------------------------------------------------------
        var formsOfAlef = ["ا", "أ", "إ", "آ"];

        if (chars.charAt(i) == "ل" && formsOfAlef.indexOf(chars.charAt(i+1)) > -1)
        {
            string = _fixLamAlefCases(i);
        }

        // Search for persian character position in word (solo, begin, middle, end)
        // -----------------------------------------------------------------------
        else
        {
            string = _getCharPosition(i, solo, begin, middle, end);

        }
        // End Search for Character Position

        return string;
    }

    /**
     * Detect Lam-Alef (ﻻ) cases
     * 
     * @param {Integer} i      Character location in the string
     * @return {String}        Replaced character
     */
    function _fixLamAlefCases(i) {
        var alef = chars.charAt(i + 1);

        var alternativeIndex = 5;

        if (_isPersianChar(i - 1) && special.indexOf(chars.charAt(i - 1)) == -1) {
            alternativeIndex = 4;
        }

        var alternative = characterAlternatives[alef][alternativeIndex];

        var string = String.fromCharCode(alternative);

        chars = chars.substring(0, i) + string + chars.substring(i + 2, chars.length);

        return string;
    }

    /**
     * selects persian character position
     * 
     * @param {Integer} i      Character location in the string
     * @param {String}  solo   Solo character
     * @param {String}  begin  Begin character
     * @param {String}  middle Middle character
     * @param {String}  end    End character
     * @return {String}        Replaced character
     */
    function _getCharPosition(i, solo, begin, middle, end) {

        var currentCharType = _checkCharType(i);
        var prevCharType = _checkCharType(i - 1);
        var nextCharType = _checkCharType(i + 1);

        if (currentCharType == "special") {
            return (prevCharType == "normal-persian") ? end : solo;
        }

        if (currentCharType == "normal-persian") {

            if (prevCharType == "non-persian" || prevCharType == "special") {
                return (nextCharType == "non-persian") ? solo : begin;
            }

            if (prevCharType == "normal-persian") {

                var currentChar = chars.charAt(i);
                var prevChar = chars.charAt(i - 1);
                var nextChar = chars.charAt(i + 1);

                if (currentChar == "ة" || nextChar == "ء") {
                    return (prevChar != "ة") ? end : solo;
                }

                if (nextCharType == "non-persian" ) return end;

                return middle;
            }
        }
    }

    /**
     * defines if a character is persian ( special / normal ) or non-persian
     * 
     * @param  {Integer}  i Character location in the string
     * @return {String}    Type
     */
    function _checkCharType(i) {

        if (i == chars.length || i < 0)
            return "non-persian";

        if (special.indexOf(chars.charAt(i)) != -1)
            return "special";

        if (_isPersianChar(i))
            return "normal-persian";

        return "non-persian";
    }

    /**
     * Defines if a character should be replaced
     * 
     * @param  {Integer}  i Character location in the string
     * @return {Boolean}    Result
     */
    function _isPersianChar(i)
    {
        if (i >= 0 && i < chars.length)
        {
            var code = chars.charCodeAt(i);

            if( code >= 1570  && code <= 1594  ||
                code >= 1600  && code <= 1610  ||
                code >= 65154 && code <= 65276 ||
                code >= 1662  && code <= 1740
            ){
                return true;
            }
        }
        return false;
    }

    /**
     * persianParser main constructor
     * 
     * @param  {String} inputStr Input String
     * @return {Object}          PersianParser object
     */
    var persianParser = function(inputStr)
    {
        if (!inputStr || inputStr === "") {
            throw new Error("Input is not specified.");
        }
        return new PersianParser(inputStr);
    };

    /**
     * Set persianParser version
     * 
     * @type {String}
     */
    persianParser.version = VERSION;

    /**
     * Prototype
     * Public functions
     * 
     * @type {Function}
     */
    persianParser.fn = PersianParser.prototype = {
        toString: function () {
            return this._str.toString();
        },
        parse: function() {
            return _parseChars.call(this, this._str);
        }
    };

    /**
     * Export persianParser
     */
    //CommonJS is found
    if (hasModule) {
        module.exports = persianParser;
    }

    //global ender:false
    if (typeof ender === 'undefined') {
        this['persianParser'] = persianParser;
    }
    
    //global define:false
    if (typeof define === 'function' && define.amd) {
        define('persianParser', [], function () {
            return persianParser;
        });
    }

})();