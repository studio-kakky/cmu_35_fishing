!function(a,b){"use strict";if("undefined"!=typeof module&&module.exports&&"function"==typeof require)b(require("Ractive"));else if("function"==typeof define&&define.amd)define(["Ractive"],b);else{if(!a.Ractive)throw new Error("Could not find Ractive! It must be loaded before the Ractive-transitions-fade plugin");b(a.Ractive)}}("undefined"!=typeof window?window:this,function(a){"use strict";var b,c;c={delay:0,duration:300,easing:"linear"},b=function(a,b){var d;b=a.processParams(b,c),a.isIntro?(d=a.getStyle("opacity"),a.setStyle("opacity",0)):d=0,a.animateStyle("opacity",d,b,a.complete)},a.transitions.fade=b});