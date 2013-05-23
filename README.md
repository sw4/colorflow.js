colorflow.js
============

Javascript Color Scheming & Conversion Library

Lightweight script built to provide:

1. Interoperable conversion of HEX, RGB and HSV/L/B values
2. Complementary (single, split and double), triadic, tetradic, pentadic and random color palette generation
3. Linear palette generation on HUE, SATURATION or VALUE/LIGHTNESS/BRIGHTNESS
2. Algorithmic palette generation using rotational dispersion on HUE


USAGE:

1. Download the minimized/optimized JS
2. Link to it in the HEAD section of your page


Convert a color from type to type:
```
hex2rgb(hex);
hex2hsv(hex);
rgb2hex([r,g,b]);
rgb2hsv([r,g,b]);
hsv2hex([h,s,v]);
hsv2rgb([h,s,v]);
```
Where HEX is a hex color string, other values are RGB or HSV arrays


Create a randomized color palette of count number of colors, count is optional
```
colorflow.random(count);
```


Create a randomized color palette:
```
colorflow.random(count);
```
Where count is an optional number of colors to generate


Create a complementary palette:
```
colorflow.complement(hex, type);
```
Where hex is a HEX color reference, and type is an optional switch to produce a split or double complementary palette of 3 or 5 colors


Create a dispersed palette:
```
colorflow.triadic(hex);
colorflow.tetradic(hex);
colorflow.pentadic(hex);
```
Where hex is a HEX color reference


Algorithmic palette generation:
```
rotational_dispersion(hex, count, type, scope, rotation);
```
Where hex is a base HEX color string, count is the number of colors to output, type is either "hue", "saturation" or "value"/"brightness"/"lightness", scope is the range of allowable degrees to consider (0-360 for hue, 0-100 for s or v/l/b). rotation is an optional value if type=hue allowing a start point to be designated (e.g. for complementary color palettes) 



----------------------

Please view the Creative Commons License (CC BY 3.0)

http://creativecommons.org/licenses/by/3.0/

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">colorflow.js</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.samwheeler.info" property="cc:attributionName" rel="cc:attributionURL">Sam Wheeler</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.
