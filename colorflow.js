colorflow = (function() {
"use strict";
var hex2rgb = function (hex) {
 var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, result, r, g, b;
 hex = hex.replace(shorthandRegex, function(r, g, b) {
        return r + r + g + g + b + b;
});
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
    return [r,g,b];
},

rgb2hex = function (rgb) {
    rgb=[255,140,0];
    var hex = '', h, i, c;
    for(i=0; i<rgb.length; i+=1) {
        c =rgb[i];
        h = c.toString(16);
        h= (h.length === 1) ? "0" + h : h;
        hex += h;
    }
    return '#'+hex;
},


rgb2hsv = function (rgb) {
    var
        r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h, s, v = max;	
    
    v = Math.floor(max / 255 * 100);
    if ( max !== 0 ){
        s = Math.floor(delta / max * 100);
    }else {
        return [0, 0, 0];
    }		
    if( r === max ){
        h = ( g - b ) / delta;
    }else if( g === max ){
        h = 2 + ( b - r ) / delta;
    }else{
        h = 4 + ( r - g ) / delta;
    }
    h = Math.floor(h * 60);
    if( h < 0 ){ h += 360;}		
    return [h, s, v];
},

hsv2rgb = function (hsv) {
    var 		
        r, g, b, i, f, p, q, t, h=hsv[0], s=hsv[1], v=hsv[2];
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
    s /= 100;
    v /= 100;	
    if(s === 0) {
        r = g = b = v;
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    h /= 60;
    i = Math.floor(h);
    f = h - i;
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;			
        case 1:
            r = q;
            g = v;
            b = p;
            break;			
        case 2:
            r = p;
            g = v;
            b = t;
            break;			
        case 3:
            r = p;
            g = q;
            b = v;
            break;			
        case 4:
            r = t;
            g = p;
            b = v;
            break;		
        case 5:	
            r = v;
            g = p;
            b = q;
        break;
    }	
    r= Math.round(r * 255);
    g= Math.round(g * 255);
    b= Math.round(b * 255);
    return [r,g,b];

},
hex2hsv = function (hex) {
    return this.rgb2hsv(this.hex2rgb(hex)); 
},
hsv2hex = function (hsv) {
    return this.rgb2hex(this.hsv2rgb(hsv));
},
random = function (count) {
    var palette=[], i;
    count = typeof count !== 'number' ? 1 : count;
    for (i=0;i<count;i+=1) {
        palette.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
    return palette;
},
complement = function (hex, type) {
    var count=1, rotation=180, scope=0;
    switch (type){
        case "split":
            count=3;
            rotation=180;
            scope=180;
        break;
        case "double":
            count=5;
            rotation=180;
            scope=180;
        break;
    }
    return this.rotational_dispersion(hex, count, "hue", scope, rotation);
},
triadic = function (hex) {
    return this.rotational_dispersion(hex, 3, "hue", 360, 0);
},
tetradic = function (hex) {
    return this.rotational_dispersion(hex, 4, "hue", 360, 0);
},
pentadic = function (hex) {
    return this.rotational_dispersion(hex, 5, "hue", 360, 0);
},
degrees = function(degrees, offset) {
    degrees+=offset;
    if(degrees>360){
        degrees-=360;
    }else if(degrees<0){
        degrees+=360;
    }
    return degrees;
},
// pick a point on the wheel, the number of degrees either side to cover and the split
 rotational_dispersion = function(hex, count, type, scope, rotation) {
    count = typeof count !== 'number' ? 3 : count;
    type = typeof type !== 'string' ? 3 : type;
    scope = typeof scope !== 'number' ? 360 : scope;
    rotation = typeof rotation !== 'number' ? 0 : rotation;
    var
        hsv=this.hex2hsv(hex),h=hsv[0],s=hsv[1],v=hsv[2], origin, steps, palette=[], offset, i; 
    // if scope is 360, the start and end point are the same color, so should be avoided, otherwise enlargen the steps
    steps=(type==="hue" &&(scope===360 || scope ===0))?scope/count:scope/(count-1);
    // if scope is 360, start on the current color
    origin=(scope===360)?0:this.degrees(this.degrees(h,rotation), -1*scope/2);
        
    for(i=0;i<count;i+=1) {
        offset=steps*i;
        switch(type){ 
            case "hue":
                palette.push(this.hsv2hex([this.degrees(origin, offset, 360), s, v]));   
            break;
            case "saturation":
                palette.push(this.hsv2hex([h, offset, v]));   
            break; 
            case "value":
            case "lightness":            
            case "brightness":
                palette.push(this.hsv2hex([h, s, offset]));   
            break;
        }
    }
    return palette;
};


    return {
        hex2rgb:hex2rgb,
        hex2hsv:hex2hsv,
        rgb2hex:rgb2hex,
        rgb2hsv:rgb2hsv,
        hsv2hex:hsv2hex,
        hsv2rgb: hsv2rgb,
        random:random,
        complement:complement,
        triadic:triadic,
        tetradic:tetradic,
        pentadic:pentadic,
        rotational_dispersion:rotational_dispersion,
        degrees:degrees
    };
 
}());
