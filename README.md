Javascript Color Conversion and Scheming Library

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

Colorflow has been greatly extended and improved, and is now integrated into the [OpenUI project](https://github.com/open-ui/open-ui) ([ouijs.org](www.ouijs.org)) as the `colors` utility class, it is included here as a stand alone script. 

####Documentation / Use
For full documentation on use and available methods, please refer to the [OpenUI API documentation for the color utility class](http://www.ouijs.org/ouijs/docs/classes/$ui.color.html)

Include `colorflow.min.js` into your page, methods can be accessed via `$ui.color`

####Methods

The below methods are available at the time of writing:

`algorithmic` Generate algorithmic color palette

`complement` Generate (palette of) complementary color(s) from passed HEX color string

`darken` Darken a color by a percentage amount

`hex2hsl` Convert a HEX color string to a HSL array

`hex2hsv` Convert a HEX color string to a HSV array

`hex2rgb` Convert a HEX color string to an RGB

`hsl2hex` Convert an HSL array to a HEX color string

`hsl2hsv` Convert an HSL array to HSV array

`hsl2rgb` Convert an HSL array to a RGB array

`hsv2hex` Convert an HSV array to a HEX color string

`hsv2hsl` Convert an HSV array to HSL array

`hsv2rgb` Convert an HSV array to a RGB array

`lighten` Lighten a color by a percentage amount

`pentadic` Generate pentadic color palette

`percentage` Generate a color from a percentage point between two colors

`random` Generate a series of color biased (high saturation/lightness) randomized HEX color strings

`rgb2hex` Convert an RGB array to a HEX color string

`rgb2hsl` Convert an RGB array to a HSL array

`rgb2hsv` Convert an RGB array to a HSV array

`saturate` Saturate a color by a percentage amount

`desaturate` Desaturate a color by a percentage amount

`scale` Scale either hue, saturation or value of a color by a percentage amount

`tetradic` Generate tetradic color palette

`triadic` Generate triadic color palette
