colorflow.js
=============

Javascript Color Conversion and Scheming Library

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

Usage
====

Include a link to colorflow.js in your page

Methods
===

`colorflow.hex2rgb(hex)`
---
Converts the passed #HEX color string to a RGB array [r, g, b], e.g. #FF0000 to [255,0,0]

`colorflow.hex2hsv(hex)`
Converts the passed #HEX color string to a HSV array [h, s, v], e.g. #FF0000 to [0,100,100]

`colorflow.rgb2hex([r,g,b])`
Converts the passed #RGB array to a #HEX color string e.g. [255,0,0] to #FF0000

`colorflow.rgb2hsv([r,g,b])`
Converts the passed #RGB array to a #HSV array e.g. [255,0,0] to [0,100,100]

`colorflow.hsv2hex([h,s,v])`
Converts the passed HSV array to a #HEX string e.g. [0,100,100] to #FF0000

`colorflow.hsv2rgb([h,s,v])`
Converts the passed HSV array to a RGB array e.g. [0,100,100] to [255,0,0]

`colorflow.random(number)`
Where number is an optional integer value for a number of random colours to output as an array of #HEX strings

`colorflow.complement(hex, type)`
Output the complimentary color to the passed hex string. The second argument, type can be set to split or double which will output an array of 3 or 5 #HEX strings representing complementary colours split around the main complement.

`colorflow.triadic(hex)`
Output an array of 3 #HEX strings triadically dispersed around the passed hex color

`colorflow.tetratic(hex)`
Output an array of 4 #HEX strings tetradically dispersed around the passed hex color

`colorflow.triadic(hex)`
Output an array of 5 #HEX strings pentradically dispersed around the passed hex color

`colorflow.rotational_dispersion(hex, count, type, scope, rotation)`
Output an array of #HEX strings where hex is a base hex color string, count is the number of colors to output, type is either "hue", "saturation" or "value"/"brightness"/"lightness", scope is the range of allowable degrees to consider (0-360 for hue, 0-100 for s or v/l/b). Rotation is an optional value if type=hue allowing a start point to be designated (e.g. for complementary color palettes, this would be 180)
