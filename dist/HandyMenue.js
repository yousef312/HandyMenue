/**
 * HandyMenue.js 1.0.0
 * http://www.TinyPieces.com/
 *
 * Copyright 2018, yousef neji
 * Licensed under the MIT license.
 */
//used funtions 
var idCount = 0;
//if(require) var $=require('jquery');

function a(elm,stylelist,escape){
    for(const key in stylelist)
    if(stylelist.hasOwnProperty(key))
    elm.css(key,stylelist[key]);
    if(escape)
    for(const key in escape)
    if(escape.hasOwnProperty(key)&&!stylelist.hasOwnProperty(key))
    elm.css(key,escape[key]);
};
function isCharacter(key){
    switch (key) {
        case 'a':case 'b':case 'c':case 'd':case 'e':case 'f':case 'g':case 'h':case 'l':
        case 'm':case 'n':case 'o':case 'p':case 'q':case 'r':case 's':case 't':case 'u':
        case 'i':case 'v':case 'j':case 'k':case 'w':case 'x':case 'y':case 'z':
        case 'A':case 'B':case 'C':case 'D':case 'E':case 'F':case 'G':case 'H':case 'L':
        case 'M':case 'N':case 'O':case 'P':case 'Q':case 'R':case 'S':case 'T':case 'U':
        case 'I':case 'V':case 'J':case 'K':case 'W':case 'X':case 'Y':case 'Z':
                res = true;
            break;
    
        default:
            res = false;
            break;
    }
    return res;
}
function lavage(word){
        for (let index = 0; index < word.length; index++) {
            f = word[index];
            if(f == f.toUpperCase()){
                stringTop = word.substr(0,index);
                stringbottom = word.substr(index+1,word.length-1);
                f = '-'+f.toLowerCase();
                word = stringTop+f+stringbottom;
            }
        }return word;
};
function mgf(styleList){
    let fullCssText = '';
    for(const key in styleList){
        if(styleList.hasOwnProperty(key)){ 
            fixedprop = lavage(key) +':'+styleList[key]+';\n'; 
            fullCssText = fullCssText.concat(fixedprop);}
    }
    return fullCssText;
}
    var g = mgf({borderRadius:3,color:'red',textAlign:'center',webkitUserSelect:'none'})
function stel(element,stylelist,stylesheet){
    var fullCssText = `${element}{\n`;
    for(const key in stylelist){
        if(stylelist.hasOwnProperty(key)){ 
            fixedprop = lavage(key) +':'+stylelist[key]+';\n'; 
            fullCssText = fullCssText.concat(fixedprop);}
    }
    fullCssText =fullCssText.concat('}');
    
    stylesheet.insertRule(fullCssText,stylesheet.cssRules.length);
    return fullCssText;
};
/**
 * @aac takes two array and add them together cleaning doubles. by giving doubles 
 * the second array data.
 * @param {*} escapeArray first array
 * @param {*} userArray second array
 */
function aac(escapeArray,userArray){
    for (const key in escapeArray)if(escapeArray.hasOwnProperty(key)&&userArray.hasOwnProperty(key)){escapeArray[key] = userArray[key];}
    for (const key in userArray)if (userArray.hasOwnProperty(key)&&!escapeArray.hasOwnProperty(key)){escapeArray[key] = userArray[key];}
    return escapeArray;
};
function applydata(obj,data){
    for (const i in data)if(data.hasOwnProperty(i))obj[i] = data[i]
}
function es(word){
    resi='';
    for (let index=0;index<word.length;index++)if(isCharacter(word[index])){
            resi=resi+word[index];
        }
        return resi;
};
//variables
console.warn(`HandyMenue.js notice dear client:\nwelcome to our little amazing library!\nplease consider our opinion about visiting our website..\nreading some docs for better use and maybe granting some of your money.\ndon't you forget to report any kind of bugs you face so we can fix it for you!`);
(function(root,HandyMenue,MainMenue){
    'uses strict';
    if(typeof define === 'function' && define.amd) {
		define([], build);
	}else if(typeof module === 'object' && module.exports) {
        module.exports = HandyMenue;
        module.exports = MainMenue;
	}else{
        root.HandyMenue = HandyMenue;
        root.MainMenue = MainMenue;
    }
}(this,function HandyMenue(){
        this.ContextMenu = function ContextMenu(elements=[{
            label : 'Welcome',
            func : function(e){
                alert('hello dear user!');
            },
            },{
                label : 'Reload',
                func : function(){
                    url = window.location;
                    window.open(url,'_self');
                },
                accelerator : 'Ctrl+R'
            },{
                label : 'I am disabled',
                func : function(){
                    alert('disabled button');
                }
            },{
                type : 'line',
                innerHeight : '1px',
                outerHeight : '3px'
            },{
                label : 'Edit',
                type : 'submenu',
                submenu : [
                    {
                        label : 'Copy',
                        accelerator : 'Ctrl+C',
                        func : function(){
                            if(window.getSelection())
                                if(window.getSelection().toString()!=''){
                                    copiedData = window.getSelection().toString();
                                }
                            
                        },
                    },{
                        label : 'Cut',
                        accelerator : 'Ctrl+X',
                        func : function(){
                            if(window.getSelection())
                                if(window.getSelection().toString()!=''){
                                    copiedData = window.getSelection().toString();
                                }
                        },
                    },{
                        label : 'Paste',
                        accelerator : 'Ctrl+V',
                        func : function(){
                            if(copiedData!=''){
                            alert('The copied data is:\n"'+copiedData+'"');
                        }
                        },
                    },
                ]
            },{
                label : ['Coords on','Coords off'],
                type : 'check-box',
                name : 'cheki',
                func : function(e){
                    coord = $('<span id="coords-show"></span>')
                    .css('fontFamily','monospace')
                    .css('borderRadius','0 5px 5px 5px').css('padding','3px')
                    .css('border','1px solid black').css('position','fixed');
                    $('body').append(coord);
                    $('body').mousemove(showcoord);
                    function showcoord(e){
                        x = e.clientX;
                        y = e.clientY;
                        if(coord!=undefined){
                            coord.css('left',(x+15+'px')).css('top',(y+3+'px'))
                            .text(('X:'+x+'   Y:'+y));
                            if(x>window.innerWidth-100)
                                coord.css('left',((x-100)+'px'));
                            if(y>window.innerHeight-40)
                                coord.css('top',((y-40)+'px'));
                        }
                        
                    }
                },
                func_off : function(){
                    if($('#coords-show'))
                        $('#coords-show').remove();
                }
            },{
                label : 'Save my name',
                type : 'data-set',
                allowed : '*',// may take : 'a' or '1' anything else will be ignored
                func : function(e){
                    alert(`hello dear : ${e.data}`);
                }
            },{
                label : 'Blender',
                type : 'definition',
                def : 'it is a machine that do blending stuffs together!',
                moreDef :   `a blender usually is this machine in the kitchen that handle blending foods together to get a mixage of this foods, 
        a mixage could be juice or juicy foods...
        blender is special because of it's high speed and durability and sharpness of it's blades, 
        having a nice blender in your house will really help you a lot.
        go and buy one!`,
        options : {
            exit : true,
            search : true,
            searchMethod : 'wiki',//possible values are: 'google' 'wiki' 'youtube' 'bing' 'yahoo'
            copy : true,
            readOL:true
        }
            },{
                label : 'New page',
                func : function(){
                    console.log('hello');
                    window.open();
                },
                accelerator : 'Ctrl+P'
            },{
                label : 'Send Notification',
                func : function(){
                    alert('HandyMenue stupid notification:\nfor better notification check out our library Quiway.js');
                },
                accelerator : 'Ctrl+N'
            },{
                label : 'Volume',
                type : 'slider',
                range : [0,100],//default [0,100]
                step: 2,//default is 2
                format : 'value%',
                backshow:true ,
                func : function(e){
                    var volume=e.data;
                }
            },{
                label : 'See image:"Joseph.png"',
                type : 'art-show',
		src : 'none'
            },{
                label : 'Small icons',
                type : 'radio-button',
                name : 'hi',
                func : function(){
                    alert('Small icons are choosen:');
                }
                
            },{
                label : 'Big icons',
                type : 'radio-button',
                name : 'hi',
                func : function(){
                    alert('Big icons are choosen');
                }
                
            },{
                label : 'Close',
                func : function(){
                    window.close();
                },
                accelerator : 'Ctrl+Q'
            }],props = {
                bars : 5,
                id : 'HandyMenue',
                indent : '30px',
                indentReverse :'30px',
                stairs : 0,
                stairsReverse : 0
            },style={
                height : 'fit-content'
            }){
                //some jquery like functions
                C = function(){
                    return function(element){
                        if(typeof element==='string'){
                            if(element[0]=='%'){
                                element = element.substr(1,element.length-1);
                                this.element = document.createElement(element);
                            }else{
                                if(element[0]=='.')
                                this.element = document.getElementsByClassName(element.substr(1,element.length-1));
                                else if(element[0]=='#') this.element = document.getElementById(element.substr(1,element.length-1));
                                else this.element = document.querySelector(element);
                            }
                        }else this.element = element;
                        return {
                            0 : this.element,
                            listeners : [],
                            attr : function(attrs,value=undefined){
                                if(value!=undefined)
                                this[0].setAttribute(attrs,value);
                                else return this[0].getAttribute(attrs);
                                return this
                            },
                            css : function(prp,value=undefined){
                                if(value!=undefined)
                                this[0].style[prp] = value;
                                else return this[0].style[prp];
                                return this
                            },
                            on : function(event,listener){
                                found = false;
                                this.listeners.forEach(item=>{
                                    if(item[1].toString()==listener.toString()){
                                        found = true;
                                    }
                                });
                                if(!found){
                                   this.listeners.push([event,listener]);
                                    if(this[0].length==undefined)
                                    this[0].addEventListener(event,listener);
                                    else for (const x in this[0]) {
                                        if (this[0].hasOwnProperty(x)) {
                                            this[0][x].addEventListener(event,listener);
                                        }
                                    } 
                                }
                                return this
                            },
                            remove : function(){
                                this[0].remove();
                                return this
                            },
                            text : function(text){
                                this[0].innerText = text;
                                return this
                            },
                            html : function(html){
                                this[0].innerHTML = html;
                                return this
                            },
                            append : function(elm){
                                this[0].append(elm[0]);
                                return this
                            },
                            val : function(val=undefined){
                                if((this[0].nodeName).toLowerCase()!='input'){
                                    if(val==undefined)
                                    return this[0].innerText;
                                    else this[0].innerText = val;
                                    return this
                                }else {
                                    if(val==undefined)
                                    return this[0].value;
                                    else this[0].value = val;
                                    return this
                                }
                            },
                            parent : function(){
                                p = new C();
                                try{
                                    j = p(this[0].parentNode);
                                    return j
                                }catch{
                                    j = p(this[0][0].parentNode);
                                    return this[0][0].parentNode
                                }
                            }
                            
                        }
                    }
                }
                var $  = new C();
            idCount++;
            //appending a style Tag at the top of the HTML page for later use
            if(document.getElementsByTagName('style').length==0){
                var styleTag = document.createElement('style');
                document.head.append(styleTag);
            }else var styleTag = document.getElementsByTagName('style').item(0);
            
            //END...
            var indent;
            var indent_switch;
            if(props.indent&&typeof props.indent==='string')indent = props.indent;
            else if(props.indent&&typeof props.indent==='object'){
                props.stairs = 0;
                indent = props.indent[0];
                indent_switch = props.indent
            }else if(!props.indent)indent = '30px';
            var indentRev;
            var indentRev_switch;
            if(props.indentReverse&&typeof props.indentReverse==='string')indentRev = props.indentReverse
            else if(props.indentReverse&&typeof props.indentReverse==='object'){
                props.stairsReverse = 0;
                indentRev = props.indentReverse[0];
                indentRev_switch = props.indentReverse
            }else if(!props.indentReverse)indentReverse = indent;
            style.indent=undefined;
            var menuRegularStyle = {
                width : '280px',
                borderRadius : '0 5px 0 5px',
                height : 'fit-content',
                boxShadow : '0 6px 10px rgb(200,200,200)',
                backgroundColor : 'rgb(250,250,250)',
                fontFamily : `'Calbri Light' , 'Calibri' , 'Candara' , 'Cambria Math' , 'Cambria'`,
                userSelect : 'none',
                mozUserSelect : 'none',
                webkitUserSelect : 'none',
                mozUserDrag : 'none',
                overflowX : 'hidden',
                overflowY : 'hidden'
            };
            var itemsOnHover = {
                backgroundColor : 'rgb(220,220,220)',
                borderColor : 'rgb(220,220,220)'
            };
            var itemRegularStyle = {
                cursor : 'pointer',
                height : '25px',
                lineHeight : '20px',
                backgroundColor : 'inherit',
                borderColor : 'rgba(255,255,255,0)',
                borderStyle : 'solid',
                fontSize : '13px',
                padding: '2px' 
            }

            if(props.theme){
                switch (props.theme) {
                    case 'silver':
                        props.stairs = 0;
                        indent = '30px';
                        props.stairsReverse= 0;
                        indentRev = '30px';
                        menuRegularStyle = {
                            width : '280px',
                            borderRadius : '0 5px 0 5px',
                            boxShadow : '0 6px 10px rgb(200,200,200)',
                            backgroundColor : 'rgb(250,250,250)',
                            fontFamily : `'Calbri Light' , 'Calibri' , 'Candara' , 'Cambria Math' , 'Cambria'`
                        };
                        itemsOnHover = {
                            backgroundColor : 'rgb(220,220,220)',
                            borderColor : 'rgb(220,220,220)'
                        };
                        break;
                
                    case 'dark':
                        props.stairs = 0;
                        indent = '30px';
                        props.stairsReverse= 0;
                        indentRev = '30px';
                        menuRegularStyle = {
                            width : '280px',
                            borderRadius : '0 5px 0 5px',
                            height : 'fit-content',
                            boxShadow : '0 6px 10px rgb(200,200,200)',
                            backgroundColor : 'rgb(100,100,100)',
                            color : 'rgb(250,250,250)',
                            fontFamily : `'Calbri Light' , 'Calibri' , 'Candara' , 'Cambria Math' , 'Cambria'`
                        };
                        itemsOnHover = {
                            backgroundColor : 'rgb(150,150,150)',
                            borderColor : 'rgb(150,150,150)'
                        };
                        break;
                    case 'natural':
                        props.stairs = 0;
                        indent = '30px';
                        props.stairsReverse= 0;
                        indentRev = '30px';
                        menuRegularStyle = {
                            width : '300px',
                            borderRadius : '0',
                            height : 'fit-content',
                            boxShadow : `0 2.8px 2.2px rgba(0, 255, 0, 0.034),
                            0 6.7px 5.3px rgba(0, 255, 0, 0.048),
                            0 12.5px 10px rgba(0, 255, 0, 0.06),
                            0 22.3px 17.9px rgba(0, 255, 0, 0.072),
                            0 41.8px 33.4px rgba(0, 255, 0, 0.086),
                            0 100px 80px rgba(0, 255, 0, 0.12)`,
                            backgroundColor : 'rgb(250,250,250)',
                            color : 'rgb(10,10,10)',
                            fontFamily : `'Bahnschrift Light SemiCondensed' , 'Bahnschrift Light' , 'Candara' , 'Cambria Math' , 'Cambria'`
                        };
                        itemsOnHover = {
                            backgroundColor : 'rgb(147,245,133)',
                            borderColor : 'rgb(147,245,133)'
                        };
                        break;
                    case 'windows-os':
                        props.stairs = 0;
                        indent = '30px';
                        props.stairsReverse= 0;
                        indentRev = '5px';
                        menuRegularStyle = {
                            width : '300px',
                            borderRadius : '0',
                            height : 'fit-content',
                            boxShadow : `3px 3px 2px rgb(150,150,150)`,
                            backgroundColor : 'rgb(240,240,240)',
                            color : 'rgb(10,10,10)',
                            border : "1px solid rgb(180,180,180)",
                            fontFamily : `'Arial'`
                        };
                        itemRegularStyle.fontSize = '13px';
                        itemsOnHover = {
                            backgroundColor : 'rgb(255,255,255)',
                            borderColor : 'rgb(255,255,255)',
                        };
                        break;
                    case 'fire':
                        props.stairs = 2;
                        indent = '0px';
                        props.stairsReverse= -2;
                        indentRev = '0px';
                        menuRegularStyle = {
                            width : '300px',
                            borderRadius : '0',
                            height : 'fit-content',
                            borderTop : '4px solid #e65100',
                            borderBottom : '4px solid #e65100',
                            boxShadow : ` 0 10px 6px -6px #e65100, 0 -10px 6px -6px #e65100 `,
                            textShadow : '0 3.36px 8.896px #c4b59d,0 -2px 1px #fff',
                            backgroundColor : 'rgb(240,240,240)',
                            color : 'rgb(10,10,10)',
                            fontFamily : `'Arial'`
                        };
                        itemRegularStyle.fontSize = '13px';
                        itemRegularStyle.borderBottom = '4px solid transparent';
                        itemsOnHover = {
                            backgroundColor : 'rgb(240,200,200)',
                            borderColor : 'rgb(240,200,200)'
                        };
                        break;
                    case 'samphonie':
                        props.stairs = 0;
                        indent = '30px';
                        props.stairsReverse= 0;
                        indentRev = '30px';
                        menuRegularStyle = {
                            width : '300px',
                            borderRadius : '0',
                            height : 'fit-content',
                            boxShadow : '2px 2px 4px black',
                            border : '1px solid rgb(200,200,200)',
                            backgroundColor : 'rgb(253,253,253)',
                            color : 'rgb(10,10,10)',
                            fontFamily : `'Calibri'`
                        };
                        itemRegularStyle = {
                            height : '25px',
                            borderStyle : 'solid',
                            borderSize : '1px',
                            borderColor : 'transparent'
                        }
                        itemsOnHover = {
                            backgroundColor : 'rgb(100,100,255)',
                            borderColor : 'rgb(100,100,255)',
                            color : 'white'
                        };
                        break;
                    case 'fresh':
                        props.stairs = 0;
                        menuRegularStyle = {
                            width : '300px',
                            borderRadius : '2px',
                            height : 'fit-content',
                            color : 'rgb(10,10,10)',
                            border : '1px solid rgb(200,200,200)',
                            backgroundColor : 'rgb(253,253,253)',
                            fontFamily : `'Comic Sans MS','Consolas','Corbel','Arial'`
                        };
                        itemRegularStyle.fontSize = '12px';
                        itemsOnHover = {
                            backgroundColor : 'rgb(217,241,206)',
                        };
                        break;
                    case 'choco':
                        props.stairs = 0;
                        menuRegularStyle = {
                            width : '300px',
                            borderRadius : ' 4px 8px 3px 5px',
                            boxShadow : '5px 5px 7px rgb(100,100,100)',
                            height : 'fit-content',
                            color : 'rgb(10,10,10)',
                            backgroundColor : 'rgb(253,253,253)',
                            fontFamily : `'JF Flat','Leelawadee UI'`
                        };
                        itemRegularStyle.height = 'fit-content';
                        itemRegularStyle.fontSize = '13px'
                        itemsOnHover={
                            color : 'rgb(180,180,180)'
                        }
                        break;
                }
                
            }
            if(props.itemsStyle && props.itemsStyle.fontSize && props.itemsStyle.height==undefined){
                props.itemsStyle['height'] = (parseFloat(props.itemsStyle.fontSize)+4)+'px';
            }else if(props.itemsStyle && props.itemsStyle.height && props.itemsStyle.fontSize==undefined){
                props.itemsStyle['fontSize'] = (parseFloat(props.itemsStyle.height)-4)+'px';
            }
            if(style) applydata(style,{
                userSelect : 'none',
                mozUserSelect : 'none',
                webkitUserSelect : 'none',
                mozUserDrag : 'none',
                overflowX : 'hidden',
                overflowY : 'hidden'
            });
            var itemcss = itemRegularStyle;
            if(props.itemsStyle){
                applydata(itemcss,props.itemsStyle);
                applydata(itemcss,{userSelect:'none',mozUserSelect:'none',webkitUserSelect:'none',mozUserDrag:'none',
                width:'100%',borderSize:'1px',boxSizing:'border-box',display:'flex',flexDirection:'row'})
            }else applydata(itemcss,{userSelect:'none',mozUserSelect:'none',webkitUserSelect:'none',mozUserDrag:'none',
                width:'100%',borderSize:'1px',boxSizing:'border-box',display:'flex',flexDirection:'row'}) 
            props.id!=undefined ? this.id = props.id+idCount : this.id = 'HandyMenues'+idCount;
            this.menu = $('%div').attr('id',this.id).css('position','fixed').attr('class','HandyMenueJs_menuTinyPiecesJs_Production');
            var menu = this.menu;
            menu.on('contextmenu',(e)=>{e.preventDefault();});
            var quiwayS = [];
            //classes 
            class ContextMenuClose{
                constructor(data){
                    this.self = data[0];
                    this.details = data[1];
                    this.event =data[2];
                    this.closer = data[3];
                    this.type = data[4]
                }
            };
            class ContextMenuOpen {
                constructor(data){
                    this.self = data[0];
                    this.target = data[1];
                    this.details = data[2];
                    this.buttons = data[3];
                    this.disable = data[4];
                    this.type = data[5];
                    this.event = data[6]
                }
            };
            class ContextMenuEdge {
                constructor(data){
                    this.edge = data[0];
                    this.leftHorizentalSpace = data[1];
                    this.requiredHorizentalSpace = data[2];
                    this.leftVerticalSpace = data[3];
                    this.requiredVerticalSpace = data[4];
                    this.self = data[5];
                    this.clickX = data[6];
                    this.clickY = data[7];
                    this.fixedX = data[8];
                    this.fixedY = data[9];
                    this.event = data[10];
                    this.details = data[11]
                }
            };
            class ContextMenuAppend {
                constructor(data){
                    this.details = data[0];
                    this.container = data[1];
                    this.event = data[2];
                    this.target = data[3];
                    this.self = data[4];
                    this.disable = data[5]
                }
            };
            class ContextMenuDetach {
                constructor(data){
                    this.details = data[0];
                    this.container = data[1];
                    this.event = data[2];
                    this.target = data[3];
                    this.self = data[4]
                }
            };
            class ContextMenuError {
                constructor(data){
                    this.error = data[0];
                    this.message = data[1];
                    this.stack = data[2]
                }
            };
            class ButtonClick {
                constructor(x,y,self,button,type,index,more,details,data=null){
                    this.x = x;
                    this.y = y;
                    this.self = self;
                    this.button = button;
                    this.type = type;
                    this.more = more;
                    this.index = index;
                    this.details = details;
                    this.data = data;
                }
            };
            var topBar;
            var bottomBar;
            var toppir;
            if(props.bars){
                topBar=document.createElement('div');
                bottomBar=document.createElement('div');
                topBar.style.width = '100%';
                bottomBar.style.width = '100%';
                if(typeof props.bars==='string'||typeof props.bars==='number'){
                    topBar.style.height=parseFloat(props.bars)+'px';
                    bottomBar.style.height=parseFloat(props.bars)+'px';
                    toppir=parseFloat(props.bars);
                }else if(typeof props.bars==='object'){
                    if(props.bars[0]&&(typeof props.bars[0]==='number'||typeof props.bars[0]==='string')){
                        props.bars[0]=parseFloat(props.bars[0]);
                        topBar.style.height=props.bars[0];
                        toppir=parseFloat(props.bars[0]);
                        bottomBar.style.height=props.bars[1]&&(typeof props.bars[1]==='number'||typeof props.bars[1]==='string')?parseFloat(props.bars[1]):parseFloat(props.bars[0]);
                    }
                }
                menu[0].append(topBar);
            }
            //styling the menu
            style ? a(menu,style,menuRegularStyle) : a(menu,menuRegularStyle);
            //END..............
            var self = this;
            var ids = 0;
            this.HandyMenue_TinyPiecesJS_JosephProduction_CopyRightsReserved = 'HandyMenue-TinyPieces.js-josephProduction';
            this.parent = null;
            var buttonsSetUp = [[],[],[],[],[],[],[],[]];
            var runtimeProcess = [];
            var currentX = null;
            var currentY = null;
            var buttons = [];
            var location = { width : null , height : null ,availWidth : null , availHeight : null};
            var wall = $('%div').attr('id','handymenuwall'); 
            a(wall,{position : 'fixed', left : '0', top : '0', width : '100%', height : '100%'});
            var menuWidth=style.width?parseFloat(style.width):parseFloat(menuRegularStyle.width);
            var menuHeight=null;
            var buttonsIndex = -1;
            menu.css('width',menuWidth);
            addressez = [-1,-1,-1,-1,-1,-1,-1,-1];
            var idns=0;var irss=0;
            elements.forEach(item=>{
                ids++;
                var item_type = item.type ? item.type : 'normal';
                var box = null;
                if(item.type=='line'){
                    platesheight = item.outerHeight ? (typeof item.outerHeight ==='number' ?  item.outerHeight+'px' : item.outerHeight ) : '3px';
                    box = $('%div');
                    topPlate = $('%div').css('height',platesheight);
                    line = $('%div');
                    downPlate = $('%div').css('height',platesheight);
                    item.innerHeight ? (typeof item.innerHeight ==='number' ? line.css('height',(item.innerHeight+'px')) : line.css('height',item.innerHeight)): line.css('height','1px');
                    item.width ? (typeof item.width==='number'? line.css('width',(item.width+'px')): line.css('width',item.width) ): line.css('width','90%');
                    if(item.width){
                        if(typeof item.width==='string'){
                            if(item.width.indexOf('%')!=-1){
                                line.css('marginLeft',(((100-parseFloat(item.width))/2)+'%'));
                            }
                            else line.css('marginLeft',((parseFloat(menuWidth)-parseFloat(item.width))/2+'px'));
                        }else line.css('marginLeft',((parseFloat(menuWidth)-parseFloat(item.width))/2+'px'));
                    }
                    else line.css('marginLeft','5%');
                    item.color ? line.css('backgroundColor',item.color) : line.css('backgroundColor','rgb(201, 201, 201)') ;
                    box.append(topPlate).append(line).append(downPlate);
                    menu.append(box);
                }else{buttonsIndex++;
                    var item_id = item.id ? item.id : es(item.label)+ids;
                    box = $('%div').attr('id',item_id).attr('class',"menu-item");
                    if(indent_switch){
                        if(indent_switch[idns+1]!=undefined){
                            idns+=1;
                            indent = indent_switch[idns];
                        }else{
                            idns=0;
                            indent=indent_switch[idns];
                        }
                    }
                    if(indentRev_switch){
                        if(indentRev_switch[irss+1]!=undefined){
                            irss+=1;
                            indentRev = indentRev_switch[irss];
                        }else{
                            irss=0;
                            indentRev=indentRev_switch[irss];
                        }
                    }
                    if(props.stairs&&typeof props.stairs==='number')
                    indent=parseFloat(indent)+props.stairs;
                    if(props.stairsReverse&&typeof props.stairsReverse==='number')
                    indentRev=parseFloat(indentRev)-props.stairsReverse;
                    front = $('%div').css('width',indent).attr('class','front');
                    back = $('%div').css('width',((parseFloat(menuWidth)-parseFloat(indent))+'px')).css('zIndex','5');
                    back_ = $('%div').css('width','10%');
                    center = $('%span').attr('class','text-container');
                    center_ = $('%span').text(item.label);
                    end = $('%span').css('float','right').css('marginRight',indentRev);
                    if(item.accelerator)end.text(item.accelerator);
                    box.append(front).append(back);back.append(center).append(end);
                    center.append(center_);
                    menu.append(box);
                    buttonDetails = [box];
                    if(item.icon && item_type!='radio-button' && item_type!='check-box' && item_type!='submenu'){
                    front.css('backgroundImage',('url('+item.icon+')')).css('backgroundRepeat','no-repeat')
                    .css('backgroundPosition','center').css('backgroundSize','contain');
                    }
                    switch(item_type){
                        case 'normal':
                            buttonsSetUp[0].push([box,item.func,buttonsIndex]);
                            if(item.accelerator&&item.func)
                            quiwayS.push([item.accelerator,item.func]);
                            addressez[0]++;
                            buttonDetails['addresse'] = [0,addressez[0]];
                            break;
                        case 'radio-button':
                            if(item.name){
                                state=item.label?item.label:item_id;
                                i=-1;found = false;
                                buttonsSetUp[1].forEach(itom=>{ i++;
                                    if(itom[0]==item.name){
                                        found = true;
                                        buttonsSetUp[1][i][1].push([box,item.func,state]);
                                        if(item.default&&item.default==true)front.append(itom[2]);
                                        if(itom[2].css('backgroundImage')=='none' && item.icon ) itom[2].css('backgroundImage',`url(${item.icon})`);
                                    }
                                });
                                if(!found){
                                    ball = $('%div');
                                    ball.css('width','100%').css('height','100%').css('backgroundPosition','center')
                                    .css('backgroundSize','contain').css('backgroundRepeat','no-repeat');
                                    item.icon ? ball.css('backgroundImage',`url(${item.icon})`) : ball.css('backgroundImage','none');
                                    front.append(ball);
                                    buttonsSetUp[1].push([item.name,[[box,item.func,state]],ball,buttonsIndex]);
                                    addressez[1]++;
                                    buttonDetails['addresse'] = [1,addressez[1]];
                                    registerData(item.name,state);
                                }else buttonDetails['addresse'] = [1,addressez[1]];
                            }else throw new Error("HandyMenue.js error \nradio boxes must have a name so you can reclaim it's data later");
                            break;
                        case 'check-box':
                            labels = undefined;
                            if(typeof item.label ==='object'){
                                item_id = es(item.label[0])+ids;
                                center_.text(item.label[0]);
                                box.attr('id',item_id);
                                labels = [item.label[0],item.label[1]];
                            }
                            src = 'none';
                            if(item.icon)
                                src = `url(${item.icon})`;
                            front.css('backgroundImage','none')
                            .css('backgroundRepeat','no-repeat').css('backgroundSize','contain')
                            .css('backgroundPosition','center');
                            if(item.checked&&item.checked==true)front.css('backgroundImage',src);
                            state = $('%var').val(false).css('display','none');
                            front.append(state);
                            buttonsSetUp[2].push([item.name?item.name:item.label,box,state,[src,labels],item.func,item.func_off,buttonsIndex]);
                            addressez[2]++;
                            buttonDetails['addresse'] = [2,addressez[2]];
                            break ;
                        case 'data-set':
                            inp=$('%input');
                            inpsty={
                                position : 'absolute',
                                left : '10%',
                                outline : 'none',
                                width : '80%',
                                height : 'stretch',
                                marginTop : 'unset',
                                backgroundColor : 'inherit',
                                border : 'unset'
                            };
                            a(inp,inpsty);
                            box.append(inp);
                            buttonsSetUp[3].push([box,inp,item.func,item.allowed,[front,back],item.name?item.name:item.label,buttonsIndex]);
                            addressez[3]++;
                            buttonDetails['addresse'] = [3,addressez[3]];
                            break;
                        case 'submenu':
                            end.css('marginTop','-2px').css('height','100%').css('width','50px');
                            if(item.icon) end.css('backgroundImage',`url(${item.icon})`)
                            .css('backgroundRepeat','no-repeat')
                            .css('backgroundPosition','right').css('backgroundSize','contain');
                            if(item.submenu){
                                submenuHolder = $('%span');
                                submenuHolderStyle = {
                                    marginTop:-(4+toppir)+'px',
                                    width : '1px',height:'4px',
                                    position : 'absolute',
                                    left : '100%',
                                    float : 'right'
                                }
                                a(submenuHolder,submenuHolderStyle);
                                box.attr('class',(box.attr('class')+' '+box.attr('id')));
                                back.append(submenuHolder);
                                buttonsSetUp[4].push([box,submenuHolder,[item.submenu,props],buttonsIndex]);
                            };
                            addressez[4]++;
                            buttonDetails['addresse'] = [4,addressez[4]];
                            break;
                        case 'definition':
                            definitionBox = $('%div').css('position','absolute').css('left','0')
                            .css('width','100%').css('backgroundColor','rgb(200,200,200)').css('zIndex','6')
                            .css('overflow','hidden').css('transition','all .5s').css('fontSize','13px')
                            .css('textAlign','center').css('height','1px')
                            .css('fontFamily',`'Calbri Light' , 'Calibri' , 'Candara' , 'Cambria Math' , 'Cambria'`)
                            .css('opacity',0);
                            definBox = $('%div').css('overflow','hidden').css('padding','4px').css('boxSizing','border-box');
                            definitionBox.append(definBox);
                            item.note ? end.css('fontStyle','italic').css('fontColor','gray').text(item.note) : end.css('fontStyle','italic').css('fontColor','gray').text('-def-');
                            item.def ? definBox.html(item.def+'<br>-click for more definition!-') : definBox.text('No definition provided!');
                            item.options  ? options = item.options : options = null;
                            menu.append(definitionBox);
                            if(item.moreDef){
                                //if($('#handy_menue_def_moreknowledge')[0]!=undefined)$('#handy_menue_def_moreknowledge').remove();
                                moreDef = $('%div').attr('id','handy_menue_def_moreknowledge')
                                .css('width','250px').css('height','fit-content')
                                .css('backgroundColor','rgb(230,230,230)').css('boxShadow','0 10px 15px rgb(200,200,200)')
                                .css('position','fixed').css('fontSize','13px').css('lineHeight','20px')
                                .css('left','20px').css('top','50px').css('padding',"10px").append($('%b').text(item.label))
                                .append($('%p').text(item.moreDef));
                                if(item.options){ btns={};
                                    if(typeof item.options==='boolean'&&item.options==true)item.options={copy:true,readOL:true,search:true,exit:true}
                                    for (const x in item.options)
                                        if (item.options.hasOwnProperty(x)){
                                            if(['copy','search','readOL','exit'].indexOf(x)!=-1) {
                                                btn=$('%div').attr('class','btn-defs-HandyMenue').text(x);
                                                moreDef.append(btn);
                                                btns[x]=btn;
                                            }else if(['searchMethod'].indexOf(x)!=-1){
                                                btns[x]=item.options[x];
                                            }
                                        }
                                }
                                stel('.btn-defs-HandyMenue',{width:'100%',marginBottom:'5px',cursor:'pointer',userSelect:'none',
                                    borderSizing:'border-box',mozUserSelect:'none',webkitUserSelect:'none',marginLeft:'4px',
                                    marginRight:'4px',textAlign:'center',backgroundColor:'rgb(240,240,240)'},styleTag.sheet);
                                stel('.btn-defs-HandyMenue:hover',{
                                    backgroundColor : 'rgb(250,250,250)' 
                                },styleTag.sheet);
                            }
                            item.moreDef ? buttonsSetUp[5].push([box,definitionBox,[moreDef,btns],buttonsIndex]) : buttonsSetUp[5].push([box,definitionBox,undefined,buttonsIndex]);
                            addressez[5]++;
                            buttonDetails['addresse'] = [5,addressez[5]];
                            break;
                        case 'slider':
                            item.range&&typeof item.rang==="number"?(item.range>0?limit=[0,item.range]:limit=[item.range,0]):(typeof item.range==='object'&&item.range.length==2&&typeof item.range[0]==='number'&&typeof item.range[1]==='number'?(item.range[1]<item.range[0]?limit=item.range.reverse():limit=item.range):limit=[0,100]);
                            item.init&&typeof item.init==='number'&&item.init<limit[1]?init=item.init:init=(limit[1]+limit[0])/2;
                            item.format&&typeof item.format==='string'&&item.format.search('value')!==-1?format=item.format:format='value';
                            item.step&&typeof item.step==='number'?(item.step<0?step=-item.step:step=item.step):step=(limit[1]-limit[0])/50;
                            end.text(format.replace('value',init));
                            let bocko;
                            let bockostate=true;
                            if(item.backshow){
                                bckshw = item.backshow;
                                //if(item.init)
                                wdth = ((init-limit[0])/(limit[1]-limit[0]))*100+'%';
                                bocko = $('%div').css('border',(bckshw.border?bckshw.border:'unset')).css('boxSizing','border-box').css('position','absolute').css('marginTop',(bckshw.height?-bckshw.height:'-5px')).css('left','0').css('height',(bckshw.height?bckshw.height:'5px')).css('width',wdth)
                                .css('backgroundColor',(bckshw.color&&typeof bckshw.color==='string'?bckshw.color:'#1192e8'))
                                .css('transition','opacity .5s');
                                bockostate = bckshw.onlyonhover&&bckshw.onlyonhover==true?bckshw.onlyonhover:true;
                                if(typeof bockostate!=='boolean')throw new Error(`TypeError\n the parameter slider.backshow.onlyonhover : must be a boolean`);
                                else if(bockostate==true)bocko.css('opacity',0);
                                box.append(bocko);
                            };
                            buttonsSetUp[6].push([box,end,init,step,limit,item.func,format,bocko,bockostate,item.label,buttonsIndex]);
                            addressez[6]++;
                            buttonDetails['addresse'] = [6,addressez[6]];
                            break;
                        case 'art-show':
                            artShow=$('%div').css('width','0').css('height','0').css('position','fixed')
                            .css('left','2px').css('top','2px').css('opacity',0)
                            .css('backgroundColor','black').css('backgroundPosition','center')
                            .css('backgroundRepeat','no-repeat').css('backgroundSize','contain')
                            .css('border','2px solid gray').css('transition',"all .5s").css('resize','both')
                            .css('overflow','hidden');
                            artShowRes=$('%div').css('width','0').css('height','0').css('position','absolute')
                            .css('borderBottom','6px solid gray').css('borderTop','6px solid transparent')
                            .css('borderRight','6px solid gray').css('borderLeft','6px solid transparent')
                            .css('right','0').css('bottom','0').css('cursor','nw-resize');
                            artShowClose=$('%canvas').css('borderRadius','50%').css('backgroundColor','white')
                            .attr('width','20px').attr('height',"20px").attr('id','HandyMenue_tinyPieces_artShow_closeBtn')
                            .css('width','20px').css('height','20px').css('position','absolute').css('right',0).css('top',0)
                            .css('margin','5px').css('cursor','pointer').css('transition','all .5s');
                            stel('#HandyMenue_tinyPieces_artShow_closeBtn:hover',{
                                transform : 'rotate(180deg)',
                                backgroundColor : 'red',
                                boxShadow : '0 0 4px black'
                            },styleTag.sheet);
                            artShow.append(artShowClose).append(artShowRes);
                            end.css('fontStyle','italic').text('-art show-');
                            ctx = artShowClose[0].getContext('2d');
                            ctx.beginPath();ctx.moveTo(4,4);ctx.lineTo(16,16);ctx.strokeStyle = 'black';ctx.stroke();
                            ctx.closePath();ctx.beginPath();ctx.moveTo(16,4);ctx.lineTo(4,16);ctx.stroke();
                            if(item.src!=undefined)
                            try{
                                if(item.src!='none')
                                artShow.css('backgroundImage',`url(${item.src})`);
                                else artShow.css('backgroundImage','none');
                            }catch{
                                throw new Error(`URLNotFound\n no such a file '${item.src}' been found`);
                            }else throw new Error(`RefrenceError\n 'art-show' buttons require an src attribute of an image to show.`);
                            buttonsSetUp[7].push([box,artShow,artShowClose,buttonsIndex]);
                            addressez[7]++;
                            buttonDetails['addresse'] = [7,addressez[7]];
                        }buttons.push(buttonDetails);
                }
            });
            stel('.menu-item',itemcss,styleTag.sheet);
            this.quiwayIntegration = function(quiwayObject){
                quiwayS.forEach(item=>{
                    quiwayObject.defineShortCut(item[0],item[1])
                });
            }
            if(bottomBar!=undefined)menu[0].append(bottomBar);
            this.used = false;
            this.disabled = [];
            var lastSpot = null;
            details = {};
            //a function to register data into the table //basical
            var HMDataTable = [];
            function registerData(step,data){
                i=-1;
                var found = false;
                HMDataTable.forEach(item=>{
                    i++;
                    if(item[0]==step){
                        HMDataTable[i][1] = data;
                        found = true;
                    }
                        
                })
                if(!found){
                    HMDataTable.push([step,data]);
                }
            };
            this.retrieveData=function(step){
                var found = false;
                if(step==='*') return HMDataTable;
                else
                HMDataTable.forEach(item=>{
                    if(item[0]==step){
                        found = true;
                        return item[1];
                    }
                });
                if(!found)throw new Error (`IndexError:\nNo data found with the step ${step}: please make sure to pass a right step name`);
            };
            this.disable = function(buttonIndex,stylelist = {color:'gray'}){
                try{
                    stylelist['boxSising'] = 'border-box';
                    button=buttons[buttonIndex];
                    console.log(button);console.log(buttonsSetUp)
                    buttonsSetUp[button['addresse'][0]][button['addresse'][1]]['disabled']=true;
                    self.disabled.push([buttonIndex,button[0].attr('style')]);
                    button[0].attr('style',mgf(stylelist));
                }catch{ EventCheck('error',['IndexError',`no button found with the index ${buttonIndex}`,new Error().stack]) }
                
            };
            this.launchContextMenu = function(e){
                lastSpot = e.target;
                details['x'] = e.clientX;
                details['y'] = e.clientY;
                details['root'] = e.target;
                details['lastSpot'] = lastSpot;
                details['rootList'] = [];
                findListRoot(e.target,[]);
                details['menu'] = self.menu[0];
                details['self'] = self;
                details['event'] = e;
                if(window.getSelection){
                    details['selected'] = window.getSelection().toString();
                    details['selection'] = window.getSelection();
                }
                function findListRoot(e,arr){
                    arr.push(e);
                    if(e.parentNode)findListRoot(e.parentNode,arr);
                    else details['rootList']=arr;
                }
                e.preventDefault();
                [x,y] = [e.clientX+'px',e.clientY+'px'];
                [currentX,currentY] = [x,y];
                location.width = parseFloat(x)+parseFloat(menuWidth);
                location.height = parseFloat(x)+parseFloat(menuWidth);
                location.availWidth = window.innerWidth-(parseFloat(x)+parseFloat(menuWidth));
                location.availHeight = window.innerHeight-(parseFloat(x)+parseFloat(menuWidth));
                [availWidth,availHeight]  = [window.innerWidth,window.innerHeight] ;
                wall.remove();
                if(document.getElementById(self.id)) $(('#'+self.id)).remove();
                $('body').append(wall);
                wall.on('mousedown',(e)=>{self.disableMenu(e,'forced')});
                wall.on('contextmenu',(e)=>{e.preventDefault();});
                //menu.css('left',x).css('top',y);
                //avoiding the menu floating out of the screen
                if(self.container == null){
                    $('body').append(menu);
                    menuHeight = window.getComputedStyle(menu[0]).getPropertyValue('height');
                    self.menuHeight = parseFloat(window.getComputedStyle(menu[0]).getPropertyValue('height')) ;
                    menuWidth  = parseFloat(window.getComputedStyle(menu[0]).getPropertyValue('width'));
                    if((availWidth-parseFloat(x)) < menuWidth && (availHeight-parseFloat(y)) > self.menuHeight){
                        EventCheck('edge',['right',(availWidth-parseFloat(x)),menuWidth,(availHeight-parseFloat(y)),self.menuHeight,self,x,y,availWidth-(parseFloat(menuWidth)+1),null,e,details]);
                        menu.css('right','1px').css('left','unset').css('top',y).css('bottom','unset'); 
                    }
                    else if((availHeight-parseFloat(y)) < self.menuHeight && (availWidth-parseFloat(x)) > menuWidth){ 
                        EventCheck('edge',['bottom',(availWidth-parseFloat(x)),menuWidth,(availHeight-parseFloat(y)),self.menuHeight,self,x,y,null,availHeight-(parseFloat(self.menuHeight)+1),e,details]);
                        menu.css('bottom','1px').css('top','unset').css('left',x).css('right','unset');
                    }else if((availHeight-parseFloat(y)) < self.menuHeight && (availWidth-parseFloat(x)) < menuWidth){
                        EventCheck('edge',['right-bottom',(availWidth-parseFloat(x)),menuWidth,(availHeight-parseFloat(y)),self.menuHeight,self,x,y,availWidth-(parseFloat(menuWidth)+1),availHeight-(parseFloat(self.menuHeight)+1),e,details]);
                        menu.css('bottom','1px').css('top','unset').css('left','unset').css('right','1px');
                    }else{
                        menu.css('bottom','unset').css('top',y).css('left',x).css('right','unset');
                    }self.used = true;
                }else{
                    if(!self.used){
                        EventCheck('append',[details,self.container,e,e.target,self,self.disable]);
                        self.container.style.zIndex = 2 ;
                        self.container.append(menu[0]);
                        self.used = true; 
                    }
                }
                $('.HandyMenueItems').on('contextmenu',e=>e.preventDefault());
                self.appendFunctions();
                EventCheck('open',[self,e.target,details,buttons,self.disable,'launch',e]);
            };
            this.version = '0.0.1';
            this.event = null;
            this.appendFunctions = function(){
                //normal buttons
                if(buttonsSetUp[0].length>0)
                buttonsSetUp[0].forEach(item=>{
                    if(!item['disabled'])
                    item[0].on('click',(e)=>{
                        try{
                            item[1](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'normal button',item[2],null,details))
                        }catch(e){ EventCheck('error',[e.name,e.message,new Error().stack]) }
                        self.disableMenu(e,'normal');
                    });
                    item[0].on('contextmenu',(e)=>{e.preventDefault()})
                });
                //radios
                if(buttonsSetUp[1].length>0)
                buttonsSetUp[1].forEach(itm=>{
                    //buttonsSetUp[2].push([group_name,[[item_id,item.func,state]],ball,index]);
                    if(!itm['disabled'])
                    itm[1].forEach(item=>{
                        item[0].on('click',function(e){
                            item[0][0].childNodes[0].append(itm[2][0]);
                            details = {
                                more : details,
                                buttonType : 'radio-button',
                                groupe : itm[0],
                                value : item[2],
                                button : item[0][0],
                            }
                            if(typeof item[1]==="function")
                            try{
                                item[1](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'radio-button',item[3],details,details))
                            }catch(e){ EventCheck('error',[e.name,e.message,new Error().stack])}
                            registerData(itm[0],item[2]);
                            self.disableMenu(e,'normal');
                        });
                    });
                    
                });
                //sliders
                if(buttonsSetUp[6].length>0){let i=-1;
                    buttonsSetUp[6].forEach(item=>{
                        //buttonsSetUp[4].push([item_id-0,end-1,init-2,step-3,limit-4,item.func-5,format-6,bocko-7,bockostate-8,item.label-9,index]);
                        i++;
                        if(item[8]&&!item['disabled'])item[0].on('mouseenter',()=>{item[7].css('opacity',1)}).on('mouseleave',()=>{item[7].css('opacity',0)});
                        if(!item['disabled'])
                        item[0].on('wheel',e=>{
                            e.preventDefault();
                            if(e.deltaY>0){
                                if(buttonsSetUp[6][i][2]+item[3]<item[4][1]){
                                    buttonsSetUp[6][i][2]=buttonsSetUp[6][i][2]+item[3];
                                }
                                else{
                                buttonsSetUp[6][i][2]=item[4][1];
                                }
                            }else{
                                if(buttonsSetUp[6][i][2]-item[3]>=item[4][0])
                                buttonsSetUp[6][i][2]=buttonsSetUp[6][i][2]-item[3];
                                else buttonsSetUp[6][i][2]=item[4][0];
                            }
                            item[1][0].innerText=item[6]?(item[6].replace('value',buttonsSetUp[6][i][2])):buttonsSetUp[6][i][2];
                            registerData(item[9],parseFloat(item[1][0].innerText));
                            if(item[7]){
                                /*
                                //totalValue is the total number between 0 and +00
                                //the value between totalValueMax and totalValueMin
                                //ordinary rule=== (value/totalValue)*100 
                                //percent rule === ((value-minValue)/(maxValue-minValue))*100
                                
                                */
                                item[7].css('width',((((buttonsSetUp[6][i][2]-item[4][0])/(item[4][1]-item[4][0]))*100)+'%'));
                            }if(typeof item[5]==='function')item[5](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'slider',item[9],null,details,(buttonsSetUp[6][i][2])));
                        });
                    });
                }
                //submenus
                if(buttonsSetUp[4].length>0){
                var Handy = new HandyMenue();
                    buttonsSetUp[4].forEach(item=>{
                        if(!item['disabled']){
                            sbmn = new Handy.ContextMenu(item[2][0],item[2][1]);
                            item[0].on('mouseenter',opensubmenu);
                            item[0].on('contextmenu',(e)=>{e.preventDefault();});;
                            function opensubmenu(){
                                sbmn.parent = self;
                                item[1].append(sbmn.menu);
                                sbmn.appendFunctions();
                                item[0].on('mouseleave',closesubmenu).on('contextmenu',closesubmenu);
                                function closesubmenu(){ sbmn.getMenuDetails().menu.remove(); }
                                if(location.availWidth<sbmn.getMenuDetails().width){
                                    sbmn.getMenuDetails().menu.css('marginLeft',(-(parseFloat(menuWidth)+parseFloat(sbmn.getMenuDetails().width))+'px'));
                                    sbmn.getMenuDetails().location.width = parseFloat(location.width)-parseFloat(menuWidth);
                                    sbmn.getMenuDetails().location.availWidth = parseFloat(location.availWidth)+parseFloat(menuWidth);
                                }else{
                                    sbmn.getMenuDetails().location.width = parseFloat(location.width)+parseFloat(menuWidth);
                                    sbmn.getMenuDetails().location.availWidth = parseFloat(location.availWidth)-parseFloat(menuWidth);
                                }
                            }
                        }
                        
                    });
                }
                //data sets
                if(buttonsSetUp[3].length>0)
                buttonsSetUp[3].forEach(item=>{
                    //buttonsSetUp[3].push([box-0,inp-1,item.func-2,item.allowed-3,[front,back]-4,step-5,buttonsIndex]);
                    if(!item["disabled"]){
                        item[0].on('mouseenter',function(){
                            item[1].css('zIndex','3');
                            item[1].css('opacity','1');
                            item[4][0].css('opacity',0);
                            item[4][1].css('opacity',0);
                            item[1][0].focus();
                        }).on('mouseleave',blurInput).on('click',blurInput);
                        item[0].on('contextmenu',(e)=>{e.preventDefault();});
                        item[1].on('keydown',getUserData);
                        function getUserData(e){
                            if(e.keyCode==13){
                                data = this.value;
                                if(item[2])item[2](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'data-set',item[4],null,details,data));
                                registerData(item[5],data);
                                blurInput();
                            }
                            if(item[3]){
                                switch (item[3]){
                                    case 'a':
                                        if(e.keyCode>47 && e.keyCode<58) e.preventDefault();
                                        break
                                    case '1':
                                        if(e.keyCode<48 || e.keyCode>57) e.preventDefault();
                                        break
                                }
                            }
                        }
                        
                        function blurInput(){
                            item[1].css('zIndex','-1');
                            item[1].css('opacity','0');
                            item[4][0].css('opacity',1);
                            item[4][1].css('opacity',1);
                            item[1].val('');
                            item[1][0].blur();
                        }
                    }
                });
                /**/
                //checks box
                if(buttonsSetUp[2].length>0)
                buttonsSetUp[2].forEach(item => {
                    //buttonsSetUp[1].push([item.name,item_id,state,[src,[label1,label2],item.func,func2],index);
                    if(!item['disabled']){
                        item[1].on('click',checkit);
                        item[1].on("contextmenu",(e)=>{e.preventDefault();});;
                        function checkit(e){
                            if(item[2].val()=='false'){
                                item[2].val(true);
                                console.log(item[2].val())
                                item[2].parent().css('backgroundImage',item[3][0]);
                                if(item[3][1]!=undefined)
                                    if(item[3][1].length>1)
                                        item[1][0].childNodes[1].childNodes[0].childNodes[0].innerText = item[3][1][1];
                                
                                if(item[4]!=undefined)
                                try{ 
                                    item[4](new ButtonClick(e.clientX,e.clientY,self, item[1][0],'check-box',item[4],null,details,'check'))
                                }catch(e){ EventCheck('error',[e.name,e.message,new Error().stack])} 
                                else item[4](new ButtonClick(e.clientX,e.clientY,self,item[1][0],'check-box',item[4],null,details,'check'));
                                if(item[0]!=undefined)
                                    registerData(item[0],true);
                                self.disableMenu(e,'normal');
                            }
                            else{
                                item[2].val(false);
                                item[2].parent().css('backgroundImage','none');
                                if(item[3][1]!=undefined)
                                    if(item[3][1].length>1)
                                        item[1][0].childNodes[1].childNodes[0].childNodes[0].innerText = item[3][1][0];
                                if(item[0]!=undefined)
                                    registerData(item[0],false);
                                    if(item[5]!=undefined)
                                    try{
                                        item[5](new ButtonClick(e.clientX,e.clientY,self,item[1][0],'check-box',item[4],null,details,'uncheck'))
                                    }catch(e){
                                        EventCheck('error',[e.name,e.message,new Error().stack]);}
                                    else item[5](new ButtonClick(e.clientX,e.clientY,self, item[1][0],'check-box',item[4],null,details,'uncheck'));
                                self.disableMenu(e,'normal');
                            }
                        }
                    }
                });
                //definitions
                if(buttonsSetUp[5].length>0)
                buttonsSetUp[5].forEach(item=>{
                    //buttonsSetUp[5].push([box,definitionBox,[moreDef,btns],buttonsIndex]])
                    if(!item['disabled']){
                        item[0].on('mouseenter',()=>{
                            item[1].css('height','100%').css('opacity','1');
                        }).on('mouseleave',()=>{
                            item[1].css('height','1px').css('opacity','0');
                        });
                        if(item[2]!=undefined){
                            item[0].on('click',expandDefinition).on('contextmenu',expandDefinition);
                            function expandDefinition(e){
                                $('body').append(item[2][0]);
                                if(item[2][1]!=undefined)
                                    for (const x in item[2][1])
                                        if (item[2][1].hasOwnProperty(x)) 
                                            switch (x) {
                                                case 'copy':item[2][1][x].on('click',async function(e){
                                                        try{
                                                            await navigator.clipboard.writeText(item[2][0][0].childNodes[1].innerText);
                                                            e.target.innerText = 'Copied to clipboard was succefull';
                                                            e.target.style.backgroundColor = 'rgb(100,240,100)';
                                                            e.target.style.color = 'rgb(0,150,0)';
                                                            e.target.style.borderColor = 'rgb(50,255,50)';
                                                            e.target.style.borderSize = '3px';
                                                            v = setTimeout(() => {
                                                                closeDefs()
                                                            }, 1000);
                                                        }catch{
                                                            e.target.innerText = 'Failed to copy text!';
                                                            e.target.style.backgroundColor = 'rgb(255,100,100)';
                                                            e.target.style.color = 'rgb(150,0,0)';
                                                            e.target.style.borderColor = 'rgb(255,50,50)';
                                                            e.target.style.borderSize = '3px';
                                                            v = setTimeout(() => {
                                                                closeDefs()
                                                            }, 1000);
                                                            EventCheck('error',['BrowserSupportNotice',`your browser does'nt support navigator.clipBoard API`,new Error().stack])
                                                        }
                                                    });
                                                    break;
                                                case 'exit':item[2][1][x].on('click',closeDefs);
                                                    break;
                                                case 'search':item[2][1][x].on('click',function(){
                                                        if(item[2][1]['searchMethod'])
                                                        switch (item[2][1]['searchMethod']) {
                                                            case 'wiki':window.open(`https://www.wikipedia.com/wiki/${item[2][0][0].childNodes[0].innerText}`);
                                                                break;
                                                            case 'youtube':window.open(`https://www.youtube.com/${item[2][0][0].childNodes[0].innerText}`);
                                                                break
                                                            case 'google':window.open(`https://www.google.tn/search?source=hp&ei=0y65X66dG6mdjLsP3t672AQ&q=${item[2][0][0].childNodes[0].innerText}&oq=${item[2][0][0].childNodes[0].innerText}&gs_lcp=CgZwc3ktYWIQAzIICC4QsQMQkwIyAggAMggIABCxAxCDATIFCAAQsQMyCAgAELEDEIMBMgIIADICCC4yAggAMgIIADICCAA6BQguELEDUL0DWMwLYJ0OaABwAHgAgAHfAogB6QaSAQUyLTIuMZgBAKABAaoBB2d3cy13aXqwAQA&sclient=psy-ab&ved=0ahUKEwju0ofW9pPtAhWpDmMBHV7vDksQ4dUDCAc&uact=5`);
                                                                break;
                                                            case 'bing':window.open(`https://www.bing.com/search?q=${item[2][0][0].childNodes[0].innerText}&form=ANNTH1&refig=a423f3499acc4df49ae990a043ca2350`)
                                                        }else window.open(`https://www.google.tn/search?source=hp&ei=0y65X66dG6mdjLsP3t672AQ&q=${item[2][0][0].childNodes[0].innerText}&oq=${item[2][0][0].childNodes[0].innerText}&gs_lcp=CgZwc3ktYWIQAzIICC4QsQMQkwIyAggAMggIABCxAxCDATIFCAAQsQMyCAgAELEDEIMBMgIIADICCC4yAggAMgIIADICCAA6BQguELEDUL0DWMwLYJ0OaABwAHgAgAHfAogB6QaSAQUyLTIuMZgBAKABAaoBB2d3cy13aXqwAQA&sclient=psy-ab&ved=0ahUKEwju0ofW9pPtAhWpDmMBHV7vDksQ4dUDCAc&uact=5`)
                                                    });break;
                                                case 'readOL':item[2][1][x].on('click',function(){
                                                        if(window.speechSynthesis&&window.SpeechSynthesisUtterance)window.speechSynthesis.speak(new SpeechSynthesisUtterance(item[2][0][0].childNodes[1].innerText));
                                                        else EventCheck('error',['BrowserSupportNotice',`speechSynthesis or speechSynthesisUtterance API is not supported by your browser!`,new Error().stack])
                                                    });
                                            }
                                else item[2][0].on('dblclick',closeDefs);
                                function closeDefs(){ if(item[2][0]) item[2][0].remove()};
                                item[1].css('height','1px').css('opacity','0'); self.disableMenu(e,'normal');
                            }
                        }
                    }
                });
                // art-show
                var timooust;
                if(buttonsSetUp[7].length>0)
                buttonsSetUp[7].forEach(item=>{
                    //[box,artShow,artShowClose,buttonIndex]
                    if(!item['disabled']){
                        $('body').append(item[1].css('width',0).css('height',0).css('opacity',0));
                        item[2].css('right',0).css('top',0);
                        item[1].css('transition','all .5s');
                        runtimeProcess.push(item[1]);
                        item[0].on('click',function(e){
                            if(timooust!=undefined) clearTimeout(timooust);
                            self.disableMenu(e,'normal');
                            $('body').append(item[1]);
                            item[1].append(item[2]);
                            item[1].css('transition','unset');
                            item[2].on('click',function(){
                                item[2].css('right','calc(50% - 10px)').css('top','calc(50% - 10px)'); 
                                item[1].css("transition",'all .5s');
                                item[1].css('height','0').css('opacity','0');
                                timooust = setTimeout(() => {
                                    item[1].remove();
                                }, 500);
                                
                            });
                            
                        }).on('mouseenter',function(){
                            item[1].css('width','300px');
                            item[1].css('height','300px');
                            item[1].css('opacity',1)
                        }).on("mouseleave",function(){
                            item[1].css('opacity',0);
                            item[1].css('width',0);
                            item[1].css('height',0)
                        })
                    }
                })
                if(self.bars!=null)self.bars.forEach(item=>item.on(self.event,e=>e.preventDefault()));
            };
            this.container = null;
            this.setUp = function( element = 'window' , event = 'contextmenu' , container ){
                elementori=element;
                if(event!='click' && event!= 'dblclick' && event!= 'contextmenu'&&event!='mouseenter')
                EventCheck('error',['UnacceptableEventName',`the event '${event}' is not acceptable, plz read the documentation to know about the acceptable values!`,new Error().stack]);
                if(element=='window'){ self.event = event;
                    window.addEventListener(event,self.launchContextMenu);
                    if(container) self.container = container;
                }else if(element=='selection'){
                    window.addEventListener(event,e=>{
                        if(window.getSelection){
                            if(window.getSelection().toString().length!=0){
                                e.preventDefault();
                                self.launchContextMenu(e);
                            }
                        }
                    })
                }
                else{element = $(element);
                    if(element[0]!=undefined){self.event = event;
                        if(event=='contextmenu') element.on('contextmenu',self.launchContextMenu);
                        else if(event=='dblclick') element.on('dblclick',self.launchContextMenu);
                        else if(event=='click') element.on('click',self.launchContextMenu);
                        if(container && typeof container==='object') self.container = container;
                        else if(container && typeof container!=='object')EventCheck('error',['DOMElementNotRecognized','HandyMenue.setUp : third parameter not of type DOMElement!',new Error().stack])
                    }else EventCheck('error',['DOMElementNotRecognized','HandyMenue.setUp : first parameter not a right id ,class ,nodeName or wildcard.',new Error().stack])
                }
            };
            this.onopen=[];
            this.onclose=[];
            this.onerror=[];
            this.onappend=[];
            this.ondetach=[];
            this.onedge=[];
            var possible_events = ['open','close','error','edge','append','detach','loaded'];
            this.on = function(event,listener){
                if(typeof listener!=='function') EventCheck('error',['TypeError',`listener must be of type function : you passed a ${typeof listener}`,new Error().stack]);
                else{
                    if(possible_events.indexOf(event)!=-1){
                        if(typeof self[`on${event}`]==='object')
                        self[`on${event}`].push(listener);
                        else self[`on${event}`]=[self[`on${event}`],listener]
                    }else EventCheck('error',['UnacceptableEvent',`'${event}' is not a acceptable event type to use in HandyMenue.on(e,listener)`,new Error().stack]);
                    return self;
                }
                
            };
            this.remove = function(event,listener=undefined){
                if(typeof listener!=='function'&&typeof listener!=='undefined')
                    EventCheck("error",['TypeError',`listener must be of type function : you passed a ${typeof listener}`,new Error().stack])
                else{
                    if(possible_events.indexOf(event)!=-1){
                        if(!listener)self[`on${event}`] = [];
                        else{
                            if(typeof self[`on${event}`]==='function'){
                                if(self[`on${event}`].toString()===listener.toString())
                                self[`on${event}`]=[];
                            }else
                            self[`on${event}`].forEach(item=>{
                                if(item[1].toString()==listener.toString())
                                self[`on${event}`].splice(self[`on${event}`].indexOf(item),1);
                            });
                        }return self;
                    }else EventCheck('error',['UnacceptableEvent',`'${event}' is not a acceptable event type to use in HandyMenue.remove(e,listener)`,new Error().stack])
                }
            }
            var EventCheck = function(eventtype,data){
                if(self[`on${eventtype}`].length>0||typeof self[`on${eventtype}`]==='function'){
                    if(typeof self[`on${eventtype}`]==='function')
                    switch (eventtype) {
                        case 'error':self[`on${eventtype}`](new ContextMenuError(data)); break;
                        case 'append':self[`on${eventtype}`](new ContextMenuAppend(data)); break;
                        case 'open':self[`on${eventtype}`](new ContextMenuOpen(data)); break;
                        case 'close':self[`on${eventtype}`](new ContextMenuClose(data)) ;break;
                        case 'detach':self[`on${eventtype}`](new ContextMenuDetach(data)) ;break;
                        case 'edge':self[`on${eventtype}`](new ContextMenuEdge(data))
                    }
                    else
                    switch (eventtype) {
                        case 'error':self[`on${eventtype}`].forEach(item=>item(new ContextMenuError(data))); break;
                        case 'append':self[`on${eventtype}`].forEach(item=>item(new ContextMenuAppend(data))); break;
                        case 'open':self[`on${eventtype}`].forEach(item=>item(new ContextMenuOpen(data))); break;
                        case 'close':self[`on${eventtype}`].forEach(item=>item(new ContextMenuClose(data))) ;break;
                        case 'detach':self[`on${eventtype}`].forEach(item=>item(new ContextMenuDetach(data))) ;break;
                        case 'edge':self[`on${eventtype}`].forEach(item=>item(new ContextMenuEdge(data)))
                    }
                }else if(eventtype=='error')throw new Error(data[0]+'\n'+data[1]);
            }
            this.disableMenu= function(e,type){
                details['x'] = e.clientX;
                details['y'] = e.clientY;
                wall.remove();
                if(self.disabled.length>0)self.disabled.forEach(item=>{
                    button=buttons[item[0]];
                    buttonsSetUp[button['addresse'][0]][button['addresse'][1]]['disabled']=undefined;
                    button[0].attr('style','');
                    self.disabled = [];
                });
                self.used = false;
                runtimeProcess.forEach(item=>item.remove());
                self.menu.remove();
                if(self.parent!=null)self.parent.disableMenu(e);
                EventCheck('close',[self,details,e,e.currentTarget,type]);
                EventCheck('detach',[details,self.container,e,e.target,self]);
            }
            if(props.itemsOnHover){
                itemhoverstyle = aac(itemsOnHover,props.itemsOnHover) ;
                stel('.menu-item:hover',itemhoverstyle,styleTag.sheet);
            }else stel('.menu-item:hover',itemsOnHover,styleTag.sheet);
            this.getMenuDetails = function(){
                return Object.freeze({
                    location : location,
                    width : menuWidth,
                    height : menuHeight,
                    lastSpot : lastSpot,
                    x : currentX,
                    y : currentY,
                    menu : menu
                })
            }
        }
}));
