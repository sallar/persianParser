persianParser.js
=========

A javascript library to convert Persian (Farsi) text to another unicode range so iOS/Android browsers can recognize them as valid webfont suitable text.

## Development Version
Please note that this library is under heavy development and I don't recommend using it in production environment since it might cause some problems and crash the iOS browser if used on a large amount of text.

## Demo
Please visit [The Demo Page](http://sallar.github.io/persianParser) on your iOS or Android device.  

*Please note* That newer versions of Google Chrome for Android acutally support arabic/persian webfonts and you don't need to use this for that.

## Usage
Include `persianParser.js` in your HTML page and use the method described below.

## Methods
### Parse Text
Use this method to do the conversion:

```javascript
persianParser('این یک متن تست است و تبدیل خواهد شد.').parse();
```

**Example Usage**  
```javascript
var elems = document.querySelectorAll('h1, h2, p');

for(i = 0; i <= elems.length; i++)
{
    if( typeof elems[i] !== 'undefined' ){
        elems[i].innerHTML = persianParser(elems[i].innerHTML).parse();
    }
}
```
You might as well check [the demo](http://sallar.github.io/persianParser) to see how it works.

###…
More methods coming soon.

##License
persianParser was created by [Sallar Kaboli](http://sallar.me) and released under the [MIT License](http://opensource.org/licenses/mit-license.php).

Contains code from [Arabic Parser](http://ixdc.net/arabic/) released uner [GNU GPL](http://www.gnu.org/copyleft/gpl.html) license.

    Copyright (C) 2003-2013 Sallar Kaboli

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    1- The above copyright notice and this permission notice shall be included
    in all copies or substantial portions of the Software.
    
    2- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    DEALINGS IN THE SOFTWARE.

