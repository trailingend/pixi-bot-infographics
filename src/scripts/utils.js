
import { Linear, Power1 } from "gsap/All";

export const retrieveWindowWidth = (platform) => {
    if( window.screen.width && ! platform.isDesktop){
        return window.screen.width;
    } else if (window.innerWidth) {
        return window.innerWidth;
    } else {
        return document.documentElement.clientWidth;
    }
}

export const retrieveWindowHeight = (platform) => {
    if( window.screen.width && ! platform.isDesktop){
        return window.screen.height;
    } else if ( window.innerHeight ){
        return window.innerHeight;
    } else {
        return document.documentElement.clientHeight;
    }
}

export const checkIfDesktopToMobile = (oldW, newW, widthLimit) => {
    return newW <= widthLimit && oldW > widthLimit;
}

export const checkIfMobileToDesktop = (oldW, newW, widthLimit) => {
    return newW > widthLimit && oldW <= widthLimit;
}

export const testPlatform = () => {
    const ua = window.navigator.userAgent.toLowerCase();
    const platform = {
        isAndroid412: ua.match(/android 4\.1\.2/i) !== null,
        isDuos: ua.match(/gt\-s7562/i) !== null,
        isI9300: ua.match(/gt\-i9300/i) !== null,
        isI9500: ua.match(/gt\-i9500/i) !== null,
        hasTouch: ('ontouchstart' in window),
        isiPod: ua.match(/ipod/i) !== null,
        isiPad: ua.match(/ipad/i) !== null,
        isiPhone: ua.match(/iphone/i) !== null,
        isAndroid: ua.match(/android/i) !== null,
        isBustedAndroid: ua.match(/android 2\.[12]/) !== null,
        isIE: window.navigator.appName.indexOf("Microsoft") != -1,
        isIE10: ua.match(/msie 10/) !== null,
        isIE11: ua.match(/trident.*rv\:11\./) !== null,
        isEdge: ua.indexOf('edge/')>0,
        isChrome: ua.match(/Chrome/gi) !== null,
        isFirefox: ua.match(/firefox/gi) !== null,
        isSafari: ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1,
        isWebkit: ua.match(/webkit/gi) !== null,
        isGecko: ua.match(/gecko/gi) !== null,
        isOpera: ua.match(/opera/gi) !== null,
        isMac: ua.match('mac') !== null,
        isIOS8: ua.match(/(iphone|ipod|ipad).* os 8_/) !== null,
        isIOS10: ua.match(/(iphone|ipod|ipad).* os 10_/) !== null,
        supportsSvg: !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    }
    platform.isMobile = platform.isiPhone || platform.isAndroid;
    platform.isTablet = platform.isiPad;
    platform.isDesktop = !(platform.isMobile || platform.isTablet);
    platform.isIE = platform.isIE10 || platform.isIE11 || platform.isEdge;
    platform.isIos = platform.isiPhone || platform.isiPad;
    window.platform = platform;
    return platform;
}

export const itemPositions = {
    'road': { x: 1045, y: 717, w: 2076, h: 1011, delay: 0 },
    'mask': { x: 124, y: 63, w: 697, h: 596, delay: 0.2 },
    'text': { x: 544, y: 163, w: 544, h: 163, delay: 0.2 },
    'hospital1': { x: 469, y: 336, w: 713, h: 654, delay: 0.1 },
    'building1': { x: 1261, y: 355, w: 366, h: 370, delay: 0.2 },
    'house1': { x: 818, y: 813, w: 272, h: 207, delay: 0.3 },
    'house2': [{ x: 613, y: 943, w: 222, h: 188, delay: 0.3 },
               { x: 1534, y: 702, w: 222, h: 188, delay: 0.3 }],
    'house3': { x: 1358, y: 803, w: 183, h: 196, delay: 0.3 },
    'house4': [{ x: 1087, y: 973, w: 194, h: 181, delay: 0.3 },
               { x: 1523, y: 895, w: 194, h: 181, delay: 0.3 }],
    'house5': { x: 1729, y: 742, w: 272, h: 278, delay: 0.3 },
    'fountain1': { x: 1102, y: 563, w: 316, h: 203, delay: 0.4 },
    'bench1': [{ x: 693, y: 738, w: 69, h: 63, delay: 1.4 },
               { x: 597, y: 792, w: 69, h: 63, delay: 1.9 },
               { x: 605, y: 689, w: 69, h: 63, delay: 2.2 },
               { x: 505, y: 749, w: 69, h: 63, delay: 2.0 },
               { x: 522, y: 668, w: 69, h: 63, delay: 1.5 },
               { x: 422, y: 722, w: 69, h: 63, delay: 2.1 },
               { x: 491, y: 582, w: 69, h: 63, delay: 1.7 },
               { x: 374, y: 651, w: 69, h: 63, delay: 1.6 }],
    'bench2': [{ x: 1131, y: 446, w: 69, h: 63, delay: 2.2 },
               { x: 1058, y: 401, w: 69, h: 63, delay: 1.8 }],
    'tree1': [{ x: 230, y: 686, w: 77, h: 113, delay: 0.5 },
              { x: 153, y: 642, w: 77, h: 113, delay: 0.6 },
              { x: 80, y: 594, w: 77, h: 113, delay: 0.7 },
              { x: 3, y: 540, w: 77, h: 113, delay: 0.8 },
              { x: 96, y: 485, w: 77, h: 113, delay: 0.9 },
              { x: 836, y: 283, w: 77, h: 113, delay: 1.0 },
              { x: 913, y: 327, w: 77, h: 113, delay: 1.1 }],
    'tree2': [{ x: 737, y: 711, w: 37, h: 43, delay: 2.5 },
              { x: 645, y: 766, w: 37, h: 43, delay: 2.7 },
              { x: 539, y: 824, w: 37, h: 43, delay: 2.3 },
              { x: 447, y: 833, w: 37, h: 43, delay: 2.65 },
              { x: 657, y: 666, w: 37, h: 43, delay: 2.45 },
              { x: 556, y: 715, w: 37, h: 43, delay: 2.8 },
              { x: 450, y: 776, w: 37, h: 43, delay: 2.35 },
              { x: 374, y: 785, w: 37, h: 43, delay: 2.6 },
              { x: 577, y: 629, w: 37, h: 43, delay: 2.55 },
              { x: 471, y: 691, w: 37, h: 43, delay: 2.75 },
              { x: 371, y: 742, w: 37, h: 43, delay: 2.4 }],
    'tree3': [{ x: 1065, y: 313, w: 54, h: 87, delay: 1.2 },
              { x: 1413, y: 500, w: 54, h: 87, delay: 1.3 }],
    'light1': [{ x: 320, y: 659, w: 22, h: 99, delay: 4.4 },
               { x: 853, y: 357, w: 22, h: 99, delay: 4.4 }],
    'sign1': { x: 945, y: 663, w: 36, h: 95, delay: 2.9 },
    'traffic1': { x: 982, y: 805, w: 28, h: 117, delay: 3.6 },
    'ambulance1': [{ x: 734, y: 488, w: 114, h: 103, delay: 3.2 },
                   { x: 779, y: 521, w: 114, h: 103, delay: 3.25 }],
    'ambulance2': [{ x: 734, y: 488, w: 114, h: 103, delay: 3.2 },
                    { x: 779, y: 521, w: 114, h: 103, delay: 3.25 }],
    'car1': { x: 1563, y: 545, w: 122, h: 82, delay: 3.3 },
    'car2': { x: 1795, y: 656, w: 122, h: 82, delay: 3.3 },

}

export const hospitalInfo = [{
        site: 'all',
        name: 'VCH',
        color: '#f15d3f', 
        scale: 1
    }, {
        site: 'vancouver',
        name: 'VANCOUVER',
        color: '#ff822e', 
        scale: 0.33,
    }, {
        site: 'richmond',
        name: 'RICHMOND',
        color: '#ffcf04',   
        scale: 0.38,
    }, {
        site: 'coastal',
        name: 'COASTAL',
        color: '#aed630',   
        scale: 0.44,
    }, {
        site: 'north-vancouver',
        name: 'NORTH VANCOUVER',
        color: '#739849',   
        scale: 0.33,
    }, {
        site: 'squamish',
        name: 'SQUAMISH',
        color: '#44c8f5',
        scale: 0.4,
    }, {
        site: 'powell-river',
        name: 'POWELL RIVER',
        color: '#0c5d8f',   
        scale: 0.45,
    }, {
        site: 'sechelt',
        name: 'SECHELT',
        color: '#904799',  
        scale: 0.45, 
    }, {
        site: 'whistler-pemberton',
        name: 'WHISTLER & PEMBERTON',
        color: '#f46ea5',   
        scale: 0.33,
    }];

    export const maskPath = [
        623.99, 377.51, 
        690.98, 338.56, 
        690.9, 305.63, 
        689.99, 270.07, 
        697.42, 265.82, 
        697.29, 177.94, 
        666.74, 132.19, 
        666.62, 94.49, 
        493.39, 0, 
        342.8, 87.16, 
        0, 244.99, 
        0.41, 481.32, 
        188.37, 596.5, 
        386.36, 478.78, 
        425.29, 504.13
    ];
    
    export const textSetting = {
        fontSize: 60,
        fontWeight: 700,
        letterSpacing: 2,
        wordWrapWidth: 500
    };
    
    export const ambulanceAnimationInfo = [{
            name: 'location',
            x: 642,
            y: 593,
            reflectScale: null,
            alpha: 1,
            ease: Power1.easeIn,
            timeProportion: 15,
            whichSprite: 'first'
        }, {
            name: 'reflect',
            x: null,
            y: null,
            reflectScale: -1,
            alpha: null,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'location',
            x: 1105,
            y: 865,
            reflectScale: null,
            alpha: null,
            ease: Linear.easeNone,
            timeProportion: 23,
            whichSprite: 'first'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 0,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'location',
            x: 1105,
            y: 865,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'location',
            x: 1582,
            y: 572,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 28,
            whichSprite: 'second'
        }, {
            name: 'location',
            x: 1582,
            y: 572,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 0,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        },  {
            name: 'location',
            x: 1948,
            y: 788,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 23,
            whichSprite: 'first'
        }, {
            name: 'reflect',
            x: null,
            y: null,
            reflectScale: 1,
            alpha: null,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'location',
            x: 1494,
            y: 1057
            ,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 28,
            whichSprite: 'first'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 0,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'location',
            x: 1498,
            y: 1054
            ,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'reflect',
            x: null,
            y: null,
            reflectScale: -1,
            alpha: null,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'location',
            x: 698,
            y: 574,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 44,
            whichSprite: 'second'
        }, {
            name: 'location',
            x: 636,
            y: 600,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 0,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'location',
            x: 779,
            y: 521,
            reflectScale: null,
            alpha: 1,
            ease: Power1.easeOut,
            timeProportion: 15,
            whichSprite: 'first'
    }];

    export const carAnimationInfo = [{
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 0,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'reflect',
            x: null,
            y: null,
            reflectScale: -1,
            alpha: null,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'location',
            x: 1597,
            y: 540,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 12,
            whichSprite: 'second'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'opacity',
            x: null,
            y: null,
            reflectScale: null,
            alpha: 0,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'second'
        }, {
            name: 'reflect',
            x: null,
            y: null,
            reflectScale: -1,
            alpha: null,
            ease: Linear.easeNone,
            timeProportion: 0,
            whichSprite: 'first'
        }, {
            name: 'location',
            x: 469,
            y: 1188,
            reflectScale: null,
            alpha: 1,
            ease: Linear.easeNone,
            timeProportion: 72,
            whichSprite: 'first'
    }];

