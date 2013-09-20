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
        var string;

        switch (chars.charAt(i))
        {
            case "ا":
                string = _setChar(i, String.fromCharCode(0xFE8D), String.fromCharCode(0xFE8D), String.fromCharCode(0xFE8E), String.fromCharCode(0xFE8E));
                break;
            case "أ":
                string = _setChar(i, String.fromCharCode(0xFE83), String.fromCharCode(0xFE83), String.fromCharCode(0xFE84), String.fromCharCode(0xFE84));
                break;
            case "إ":
                string = _setChar(i, String.fromCharCode(0xFE87), String.fromCharCode(0xFE87), String.fromCharCode(0xFE88), String.fromCharCode(0xFE88));
                break;
            case "آ":
                string = _setChar(i, String.fromCharCode(0xFE81), String.fromCharCode(0xFE81), String.fromCharCode(0xFE82), String.fromCharCode(0xFE82));
                break;
            case "ب":
                string = _setChar(i, String.fromCharCode(0xFE8F), String.fromCharCode(0xFE91), String.fromCharCode(0xFE92), String.fromCharCode(0xFE90));
                break;
            case "پ":
                string = _setChar(i, String.fromCharCode(0xFB56), String.fromCharCode(0xFB58), String.fromCharCode(0xFB59), String.fromCharCode(0xFB57));
                break;
            case "ت":
                string = _setChar(i, String.fromCharCode(0xFE95), String.fromCharCode(0xFE97), String.fromCharCode(0xFE98), String.fromCharCode(0xFE96));
                break;
            case "ث":
                string = _setChar(i, String.fromCharCode(0xFE99), String.fromCharCode(0xFE9B), String.fromCharCode(0xFE9C), String.fromCharCode(0xFE9A));
                break;
            case "ج":
                string = _setChar(i, String.fromCharCode(0xFE9D), String.fromCharCode(0xFE9F), String.fromCharCode(0xFEA0), String.fromCharCode(0xFE9E));
                break;
            case "چ":
                string = _setChar(i, String.fromCharCode(0xfb7a), String.fromCharCode(0xfb7c), String.fromCharCode(0xfb7d), String.fromCharCode(0xfb7b));
                break;
            case "ح":
                string = _setChar(i, String.fromCharCode(0xFEA1), String.fromCharCode(0xFEA3), String.fromCharCode(0xFEA4), String.fromCharCode(0xFEA2));
                break;
            case "خ":
                string = _setChar(i, String.fromCharCode(0xFEA5), String.fromCharCode(0xFEA7), String.fromCharCode(0xFEA8), String.fromCharCode(0xFEA6));
                break;
            case "د":
                string = _setChar(i, String.fromCharCode(0xFEA9), String.fromCharCode(0xFEA9), String.fromCharCode(0xFEAA), String.fromCharCode(0xFEAA));
                break;
            case "ذ":
                string = _setChar(i, String.fromCharCode(0xFEAB), String.fromCharCode(0xFEAB), String.fromCharCode(0xFEAC), String.fromCharCode(0xFEAC));
                break;
            case "ر":
                string = _setChar(i, String.fromCharCode(0xFEAD), String.fromCharCode(0xFEAD), String.fromCharCode(0xFEAE), String.fromCharCode(0xFEAE));
                break;
            case "ز":
                string = _setChar(i, String.fromCharCode(0xFEAF), String.fromCharCode(0xFEAF), String.fromCharCode(0xFEB0), String.fromCharCode(0xFEB0));
                break;
            case "ژ":
                string = _setChar(i, String.fromCharCode(0xfb8a), String.fromCharCode(0xfb8a), String.fromCharCode(0xfb8b), String.fromCharCode(0xfb8b));
                break;
            case "س":
                string = _setChar(i, String.fromCharCode(0xFEB1), String.fromCharCode(0xFEB3), String.fromCharCode(0xFEB4), String.fromCharCode(0xFEB2));
                break;
            case "ش":
                string = _setChar(i, String.fromCharCode(0xFEB5), String.fromCharCode(0xFEB7), String.fromCharCode(0xFEB8), String.fromCharCode(0xFEB6));
                break;
            case "ص":
                string = _setChar(i, String.fromCharCode(0xFEB9), String.fromCharCode(0xFEBB), String.fromCharCode(0xFEBC), String.fromCharCode(0xFEBA));
                break;
            case "ض":
                string = _setChar(i, String.fromCharCode(0xFEBD), String.fromCharCode(0xFEBF), String.fromCharCode(0xFEC0), String.fromCharCode(0xFEBE));
                break;
            case "ط":
                string = _setChar(i, String.fromCharCode(0xFEC1), String.fromCharCode(0xFEC3), String.fromCharCode(0xFEC4), String.fromCharCode(0xFEC2));
                break;
            case "ظ":
                string = _setChar(i, String.fromCharCode(0xFEC5), String.fromCharCode(0xFEC7), String.fromCharCode(0xFEC8), String.fromCharCode(0xFEC6));
                break;
            case "ع":
                string = _setChar(i, String.fromCharCode(0xFEC9), String.fromCharCode(0xFECB), String.fromCharCode(0xFECC), String.fromCharCode(0xFECA));
                break;
            case "غ":
                string = _setChar(i, String.fromCharCode(0xFECD), String.fromCharCode(0xFECF), String.fromCharCode(0xFED0), String.fromCharCode(0xFECE));
                break;
            case "ف":
                string = _setChar(i, String.fromCharCode(0xFED1), String.fromCharCode(0xFED3), String.fromCharCode(0xFED4), String.fromCharCode(0xFED2));
                break;
            case "ق":
                string = _setChar(i, String.fromCharCode(0xFED5), String.fromCharCode(0xFED7), String.fromCharCode(0xFED8), String.fromCharCode(0xFED6));
                break;
            case "ك":
                string = _setChar(i, String.fromCharCode(0xFED9), String.fromCharCode(0xFEDB), String.fromCharCode(0xFEDC), String.fromCharCode(0xFEDA));
                break;
            case "ک":
                string = _setChar(i, String.fromCharCode(0xfed9), String.fromCharCode(0xfedb), String.fromCharCode(0xfedc), String.fromCharCode(0xfeda));
                break;
            case "گ":
                string = _setChar(i, String.fromCharCode(0xfb92), String.fromCharCode(0xfb94), String.fromCharCode(0xfb95), String.fromCharCode(0xfb93));
                break;
            case "ل":
                string = _setChar(i, String.fromCharCode(0xFEDD), String.fromCharCode(0xFEDF), String.fromCharCode(0xFEE0), String.fromCharCode(0xFEDE));
                break;
            case "م":
                string = _setChar(i, String.fromCharCode(0xFEE1), String.fromCharCode(0xFEE3), String.fromCharCode(0xFEE4), String.fromCharCode(0xFEE2));
                break;
            case "ن":
                string = _setChar(i, String.fromCharCode(0xFEE5), String.fromCharCode(0xFEE7), String.fromCharCode(0xFEE8), String.fromCharCode(0xFEE6));
                break;
            case "ه":
                string = _setChar(i, String.fromCharCode(0xFEE9), String.fromCharCode(0xFEEB), String.fromCharCode(0xFEEC), String.fromCharCode(0xFEEA));
                break;
            case "ة":
                string = _setChar(i, String.fromCharCode(0xFE93), "", "", String.fromCharCode(0xFE94));
                break;
            case "و":
                string = _setChar(i, String.fromCharCode(0xFEED), String.fromCharCode(0xFEED), String.fromCharCode(0xFEEE), String.fromCharCode(0xFEEE));
                break;
            case "ؤ":
                string = _setChar(i, String.fromCharCode(0xFE85), String.fromCharCode(0xFE85), String.fromCharCode(0xFE86), String.fromCharCode(0xFE86));
                break;
            case "ی":
                string = _setChar(i, String.fromCharCode(0xfeef), String.fromCharCode(0xfef3), String.fromCharCode(0xfef4), String.fromCharCode(0xfef0));
                break;
            case "ي":
                string = _setChar(i, String.fromCharCode(0xFEF1), String.fromCharCode(0xFEF3), String.fromCharCode(0xFEF4), String.fromCharCode(0xFEF2));
                break;
            case "ئ":
                string = _setChar(i, String.fromCharCode(0xFE89), String.fromCharCode(0xFE8B), String.fromCharCode(0xFE8C), String.fromCharCode(0xFE8A));
                break;
            case "ء":
                string = String.fromCharCode(0xFE80);
                break;
            case "۰":
                string = String.fromCharCode(0x0660);
                break;
            case "۱":
                string = "1";
                break;
            case "۲":
                string = "2";
                break;
            case "۳":
                string = "3";
                break;
            case "۴":
                string = "4";
                break;
            case "۵":
                string = "5";
                break;
            case "۶":
                string = "6";
                break;
            case "۷":
                string = "7";
                break;
            case "۸":
                string = "8";
                break;
            case "۹":
                string = "9";
                break;
            case "?":
                string = String.fromCharCode(0x061F);
                break;
            default:
                string = chars.charAt(i);
                break;
        }

        return string;
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
        if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "ا")
        {
            if (_isPersianChar(i-1) && special.indexOf(chars.charAt(i-1)) == -1) {
                string = String.fromCharCode(0xFEFC);
            }
            else {
                string = String.fromCharCode(0xFEFB);
            }
            chars = chars.substring(0, i) + string + chars.substring(i+2, chars.length);
        }
        else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "أ")
        {
            if (_isPersianChar(i-1) && special.indexOf(chars.charAt(i-1)) == -1) {
                string = String.fromCharCode(0xFEF8);
            }
            else {
                string = String.fromCharCode(0xFEF7);
            }
            chars = chars.substring(0, i) + string + chars.substring(i+2, chars.length);
        }
        else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "إ")
        {
            if (_isPersianChar(i-1) && special.indexOf(chars.charAt(i-1)) == -1) {
                string = String.fromCharCode(0xFEFA);
            }
            else {
                string = String.fromCharCode(0xFEF9);
            }
            chars = chars.substring(0, i) + string + chars.substring(i+2, chars.length);
        }
        else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "آ")
        {
            if (_isPersianChar(i-1) && special.indexOf(chars.charAt(i-1)) == -1) {
                string = String.fromCharCode(0xFEF6);
            }
            else {
                string = String.fromCharCode(0xFEF5);
            }
            chars = chars.substring(0, i) + string + chars.substring(i+2, chars.length);
        }
        // Search for persian character position in word (solo, begin, middle, end)
        // -----------------------------------------------------------------------
        else
        {
            if (i == 0)
            {
                if (special.indexOf(chars.charAt(i)) != -1 || !_isPersianChar(i+1)) {
                    string = solo;
                }
                else {
                    string = begin;
                }
            }
            else if (i == chars.length-1)
            {
                if (special.indexOf(chars.charAt(i-1)) != -1 || !_isPersianChar(i-1)) {
                    string = solo;
                }
                else {
                    string = end;
                }
            }
            else if (_isPersianChar(i-1) && _isPersianChar(i+1))
            {
                if (special.indexOf(chars.charAt(i-1)) != -1) {
                    if (special.indexOf(chars.charAt(i)) != -1) {
                        string = solo;
                    }
                    else {
                        string = begin;
                    }
                }
                else {
                    if (special.indexOf(chars.charAt(i)) != -1 || chars.charAt(i+1) == "ء" || chars.charAt(i) == "ة") {
                        if (chars.charAt(i-1) != "ة") {
                            string = end;
                        } else {
                            string = begin;
                        }
                    }
                    else {
                        if (chars.charAt(i-1) != "ة") {
                            string = middle;
                        } else {
                            string = begin;
                        }
                    }
                }
            }
            else
            {
                if (_isPersianChar(i-1) && !_isPersianChar(i+1)) {
                    if (special.indexOf(chars.charAt(i-1)) != -1) {
                        string = solo;
                    }
                    else {
                        string = end;
                    }
                }
                else if (!_isPersianChar(i-1) && _isPersianChar(i+1)) {
                    if (special.indexOf(chars.charAt(i)) != -1) {
                        string = solo;
                    }
                    else {
                        string = begin;
                    }
                }
                else if (!_isPersianChar(i-1) && !_isPersianChar(i+1)) {
                    string = solo;
                }
            }
        }
        // End Search for Character Position

        return string;
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