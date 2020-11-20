/**
 * HandyMenue.js 1.0.0
 * http://TinyPieces.com/
 *
 * Copyright 2018, yousef neji
 * Licensed under the MIT license.
 */
//used funtions 
var idCount = 0;
var HMDataTable = [];
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

//a function to register data into the table //basical
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
var copiedData;
function retrieveData(step){
    var found = false;
    HMDataTable.forEach(item=>{
        if(item[0]==step){
            found = true;
            return item[1];
        }
    })
    if(!found)throw new Error (`HandyMenue.js error:\nData not found!`);
};
function l(word){
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
            fixedprop = l(key) +':'+styleList[key]+';\n'; 
            fullCssText = fullCssText.concat(fixedprop);}
    }
    return fullCssText;
}
    var g = mgf({borderRadius:3,color:'red',textAlign:'center',webkitUserSelect:'none'})
function stel(element,stylelist,stylesheet){
    var fullCssText = `${element}{\n`;
    for(const key in stylelist){
        if(stylelist.hasOwnProperty(key)){ 
            fixedprop = l(key) +':'+stylelist[key]+';\n'; 
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
function es(word){
    resi='';
    for (let index=0;index<word.length;index++)if(isCharacter(word[index])){
            resi=resi+word[index];
        }
        return resi;
};
//variables
console.warn(`HandyMenue.js notice dear client:\nwelcome to our little amazing library!\nplease consider our opinion about visiting our website..\nreading some docs for better use and maybe granting some of your money.\ndon't you forget to report any kind of bugs you face so we can fix it for you!`);
var t0 = performance.now();
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
                allowed : 'username',// may take : 'a' or '1' anything else will be ignored
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
                src : 'img/yousef.jpg'
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
                theme : 'fire',
                indent : '30px',
                indentReverse :'30px',
                stairs : 2,
                stairsReverse : 2
            },style={
                height : 'fit-content'
            }){
            idCount++;
            //appending a style Tag at the top of the HTML page for later use
            if(document.getElementsByTagName('style').item(0)==undefined){
                var styleTag = document.createElement('style');
                document.getElementsByTagName('head').item(0).append(styleTag);
            }else{
                var styleTag = document.getElementsByTagName('style').item(0);
            }
            var CSSStyle = styleTag.sheet;
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
                fontFamily : `'Calbri Light' , 'Calibri' , 'Candara' , 'Cambria Math' , 'Cambria'`
            };
            var itemsOnHover = {
                backgroundColor : 'rgb(220,220,220)',
                borderColor : 'rgb(220,220,220)'
            };
            var itemRegularStyle = {
                cursor : 'pointer',
                height : 'fit-content',
                backgroundColor : 'inherit',
                borderColor : 'rgba(255,255,255,0)',
                borderStyle : 'solid',
                fontSize : '14px',
                padding : '2px',
            }
            let menuImportantStyle = {
                userSelect : 'none',
                mozUserSelect : 'none',
                webkitUserSelect : 'none',
                mozUserDrag : 'none',
                overflowX : 'hidden',
                overflowY : 'hidden'
            };
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
                            height : 'fit-content',
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
            var itemsImportantStyle = {
                userSelect : 'none',
                mozUserSelect : 'none',
                webkitUserSelect : 'none',
                mozUserDrag : 'none',
                width : '100%',
                borderSize : '1px',
                boxSizing : 'border-box',
                display : 'flex',
                flexDirection : 'row'
            };
            if(props.itemsStyle && props.itemsStyle.fontSize && props.itemsStyle.height==undefined){
                props.itemsStyle['height'] = (parseFloat(props.itemsStyle.fontSize)+4)+'px';
            }else if(props.itemsStyle && props.itemsStyle.height && props.itemsStyle.fontSize==undefined){
                props.itemsStyle['fontSize'] = (parseFloat(props.itemsStyle.height)-4)+'px';
            } 
            var itemcss = null;
            if(props.itemsStyle){
                itemcss = aac(itemRegularStyle,props.itemsStyle);
                itemcss = aac(itemcss,itemsImportantStyle);
            }else itemcss = aac(itemRegularStyle,itemsImportantStyle);
            props.id!=undefined ? this.id = props.id+idCount : this.id = 'HandyMenues'+idCount;
            this.menu = $('<div></div>').attr('id',this.id).css('position','fixed').attr('class','HandyMenueJs_menuTinyPiecesJs_Production');
            var menu = this.menu;
            menu.contextmenu((e)=>{e.preventDefault();});
            var quiwayS = [];
            //classes 
            class ContextMenuClose {
                constructor(self,details,type,event,closer,fd =0){
                    this.self = self;
                    this.details = details;
                    this.type = type;
                    this.event = event;
                    this.closer = closer;
                    this.functionDelay = fd
                }
            };
            class ContextMenuOpen {
                constructor(self,target,details,buttons,disable,type,funcDel = 0,event){
                    this.self = self;
                    this.target = target;
                    this.details = details;
                    this.buttons = buttons;
                    this.disable = disable;
                    this.type = type;
                    this.functionDelay = funcDel;
                    this.event = event
                }
            };
            class ContextMenuEdge {
                constructor(edge,lhs,rhs,lvs,rvs,self,x,y,fx,fy,event,details){
                    this.edge = edge;
                    this.leftHorizentalSpace = lhs;
                    this.requiredHorizentalSpace = rhs;
                    this.leftVerticalSpace = lvs;
                    this.requiredVerticalSpace = rvs;
                    this.self = self;
                    this.clickX = x;
                    this.clickY = y;
                    this.fixedX = fx;
                    this.fixedY = fy;
                    this.event = event;
                    this.details = details
                }
            };
            class ContextMenuAppend {
                constructor(details,container,event,target,self,dis){
                    this.details = details;
                    this.container = container;
                    this.event = event;
                    this.target = target;
                    this.self = self;
                    this.disable = dis
                }
            };
            class ContextMenuDetach {
                constructor(details,container,event,target,self){
                    this.details = details;
                    this.container = container;
                    this.event = event;
                    this.target = target;
                    this.self = self
                }
            };
            class ContextMenuError {
                constructor(error,message,stack){
                    this.error = error;
                    this.message = message;
                    this.stack = stack
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
                topBar=$('<div></div>');
                bottomBar=$('<div></div>');
                if(typeof props.bars==='string'||typeof props.bars==='number'){
                    topBar.css('height',props.bars);
                    bottomBar.css('height',props.bars);
                    toppir=parseFloat(props.bars);
                }else if(typeof props.bars==='object'){
                    if(props.bars[0]&&(typeof props.bars[0]==='number'||typeof props.bars[0]==='string')){
                        props.bars[0]=parseFloat(props.bars[0]);
                        topBar.css('height',props.bars[0]);
                        toppir=parseFloat(props.bars[0]);
                        bottomBar.css('height',props.bars[1]&&(typeof props.bars[1]==='number'||typeof props.bars[1]==='string')?parseFloat(props.bars[1]):parseFloat(props.bars[0]));
                    }
                }
                menu.append(topBar);
            }
            //styling the menu
            style ? a(menu,style,menuRegularStyle) : a(menu,menuRegularStyle);
            //END..............
            a(menu,menuImportantStyle);
            //var checkunits = new UnitzSupervisor();
            var self = this;
            var ids = 0;
            this.HandyMenue_TinyPiecesJS_JosephProduction_CopyRightsReserved = 'HandyMenue-TinyPieces.js-josephProduction';
            this.parent = null;
            this.buttonsSetUp = [[],[],[],[],[],[],[],[]];
            var runtimeProcess = [];
            this.currentX = null;
            this.currentY = null;
            this.buttons = [];
            this.locationAndDistances = { width : null , height : null ,availWidth : null , availHeight : null};
            this.wall = null;
            this.menuWidth=style.width?parseFloat(style.width):parseFloat(menuRegularStyle.width);
            var buttonsIndex = -1;
            menu.css('width',this.menuWidth);
            addressez = [-1,-1,-1,-1,-1,-1,-1];
            var idns=0;var irss=0;
            elements.forEach(item => {
                ids++;
                var item_type = item.type ? item.type : 'normal';
                var box = null;
                if(item.type=='line'){
                    platesheight = item.outerHeight ? (typeof item.outerHeight ==='number' ?  item.outerHeight+'px' : item.outerHeight ) : '3px';
                    box = $('<div></div>');
                    topPlate = $('<div></div>').css('height',platesheight);
                    line = $('<div></div>');
                    downPlate = $('<div></div>').css('height',platesheight);
                    item.innerHeight ? (typeof item.innerHeight ==='number' ? line.css('height',(item.innerHeight+'px')) : line.css('height',item.innerHeight)): line.css('height','1px');
                    item.width ? (typeof item.width==='number'? line.css('width',(item.width+'px')): line.css('width',item.width) ): line.css('width','90%');
                    if(item.width){
                        if(typeof item.width==='string'){
                            if(item.width.indexOf('%')!=-1){
                                line.css('marginLeft',(((100-parseFloat(item.width))/2)+'%'));
                            }
                            else line.css('marginLeft',((parseFloat(this.menuWidth)-parseFloat(item.width))/2+'px'));
                        }else line.css('marginLeft',((parseFloat(this.menuWidth)-parseFloat(item.width))/2+'px'));
                    }
                    else line.css('marginLeft','5%');
                    item.color ? line.css('backgroundColor',item.color) : line.css('backgroundColor','rgb(201, 201, 201)') ;
                    box.append(topPlate).append(line).append(downPlate);
                    menu.append(box);
                }else{buttonsIndex++;
                    var item_id = item.id ? item.id : es(item.label)+ids;
                    box = $('<div class="menu-item"></div>').attr('id',item_id);
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
                    front = $('<div class="front"></div>').css('width',indent);
                    back = $('<div></tdivd>').css('width',((parseFloat(self.menuWidth)-parseFloat(indent))+'px')).css('zIndex','5');
                    back_ = $('<div></div>').css('width','10%');
                    centerBalance = ((parseFloat(itemcss.height)-parseFloat(itemcss.fontSize))/2)+'px';
                    center = $('<span></span>').css('lineHeight','inherit').attr('class','text-container');
                    centerTop = $('<div></div>').css('height',centerBalance);
                    center_ = $('<span></span>').text(item.label);
                    end = $('<div></div>').css('float','right').css('marginRight',indentRev);
                    if(item.accelerator)end.text(item.accelerator);
                    box.append(front).append(back);back.append(center).append(end);
                    center.append(centerTop).append(center_);
                    menu.append(box);
                    buttonDetails = [box];
                    if(item.icon && item_type!='radio-button' && item_type!='check-box' && item_type!='submenu'){
                    front.css('backgroundImage',('url('+item.icon+')')).css('backgroundRepeat','no-repeat')
                    .css('backgroundPosition','center').css('backgroundSize','contain');
                    }
                    switch(item_type){
                        case 'normal':
                            self.buttonsSetUp[0].push([box,item.func,buttonsIndex]);
                            if(item.accelerator&&item.func)
                            quiwayS.push([item.accelerator,item.func]);
                            addressez[0]++;
                            buttonDetails['addresse'] = [0,addressez[0]];
                            break;
                        case 'radio-button':
                            if(item.name) group_name = item.name;
                            else throw new Error("HandyMenue.js error \nradio boxes must have a name so you can reclaim it's data later");
                            state=item.value?item.value:item_id;
                            if(group_name){
                                i=-1;found = false;
                                self.buttonsSetUp[1].forEach(itom=>{ i++;
                                    if(itom[0]==group_name){
                                        found = true;
                                        self.buttonsSetUp[1][i][1].push([box,item.func]);
                                        if(item.default) front.append(itom[2]);
                                        if(itom[2].css('backgroundImage')=='none' && item.icon ) itom[2].css('backgroundImage',`url(${item.icon})`);
                                    }
                                });
                                if(!found){
                                    ball = $('<div></div>');
                                    ball.css('width','100%').css('height','100%').css('backgroundPosition','center')
                                    .css('backgroundSize','contain').css('backgroundRepeat','no-repeat');
                                    item.icon ? ball.css('backgroundImage',`url(${item.icon})`) : ball.css('backgroundImage','none');
                                    front.append(ball);
                                    self.buttonsSetUp[1].push([group_name,[[box,item.func,state]],ball,buttonsIndex]);
                                }
                                addressez[1]++;
                                buttonDetails['addresse'] = [1,addressez[1]];
                                
                            }
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
                            state = $('<var></var>').val(false);
                            front.append(state);
                            self.buttonsSetUp[2].push([item.name,box,state,[src,labels],item.func,item.func_off,buttonsIndex]);
                            addressez[2]++;
                            buttonDetails['addresse'] = [2,addressez[2]];
                            break ;
                        case 'data-set':
                            inp=$('<input>');
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
                            self.buttonsSetUp[3].push([box,inp,item.func,item.allowed,[front,back],buttonsIndex]);
                            addressez[3]++;
                            buttonDetails['addresse'] = [3,addressez[3]];
                            break;
                        case 'submenu':
                            end.css('marginTop','-2px').css('height','100%').css('width','50px');
                            if(item.icon) end.css('backgroundImage',`url(${item.icon})`)
                            .css('backgroundRepeat','no-repeat')
                            .css('backgroundPosition','right').css('backgroundSize','contain');
                            if(item.submenu){
                                submenuHolder = $('<span></span>');
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
                                self.buttonsSetUp[4].push([box,submenuHolder,[item.submenu,props],buttonsIndex]);
                            };
                            addressez[4]++;
                            buttonDetails['addresse'] = [4,addressez[4]];
                            break;
                        case 'definition':
                            definitionBox = $('<div></div>').css('position','absolute').css('left','0')
                            .css('width','100%').css('backgroundColor','rgb(200,200,200)').css('zIndex','6')
                            .css('overflow','hidden').css('transition','all .5s').css('fontSize','13px')
                            .css('textAlign','center').css('height','1px')
                            .css('fontFamily',`'Calbri Light' , 'Calibri' , 'Candara' , 'Cambria Math' , 'Cambria'`)
                            .css('opacity',0);
                            definBox = $('<div></div>').css('overflow','hidden').css('padding','4px').css('boxSizing','border-box');
                            definitionBox.append(definBox);
                            item.note ? end.css('fontStyle','italic').css('fontColor','gray').text(item.note) : end.css('fontStyle','italic').css('fontColor','gray').text('-def-');
                            item.def ? definBox.html(item.def+'<br>-click for more definition!-') : definBox.text('No definition provided!');
                            item.options  ? options = item.options : options = null;
                            menu.append(definitionBox);
                            item.moreDef ? self.buttonsSetUp[5].push([box,definitionBox,[item.moreDef,item.label,options],buttonsIndex]) : self.buttonsSetUp[5].push([box,definitionBox,undefined,buttonsIndex]);
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
                                bocko = $('<div></div>').css('border',(bckshw.border?bckshw.border:'unset')).css('boxSizing','border-box').css('position','absolute').css('marginTop',(bckshw.height?-bckshw.height:'-5px')).css('left','0').css('height',(bckshw.height?bckshw.height:'5px')).css('width',wdth)
                                .css('backgroundColor',(bckshw.color&&typeof bckshw.color==='string'?bckshw.color:'#1192e8'))
                                .css('transition','opacity .5s');
                                bockostate = bckshw.onlyonhover&&bckshw.onlyonhover==true?bckshw.onlyonhover:true;
                                if(typeof bockostate!=='boolean')throw new Error(`TypeError\n the parameter slider.backshow.onlyonhover : must be a boolean`);
                                else if(bockostate==true)bocko.css('opacity',0);
                                box.prepend(bocko);
                            };
                            self.buttonsSetUp[6].push([box,end,init,step,limit,item.func,format,bocko,bockostate,buttonsIndex]);
                            addressez[6]++;
                            buttonDetails['addresse'] = [6,addressez[6]];
                            break;
                        case 'art-show':
                            artShow=$('<div></div>').css('width','0').css('height','0').css('position','fixed')
                            .css('left','2px').css('top','2px').css('opacity',0)
                            .css('backgroundColor','black').css('backgroundPosition','center')
                            .css('backgroundRepeat','no-repeat').css('backgroundSize','contain')
                            .css('border','2px solid gray').css('transition',"all .5s")
                            .css('overflow','hidden');
                            artShowRes=$('<div></div>').css('width','0').css('height','0').css('position','absolute')
                            .css('borderBottom','6px solid gray').css('borderTop','6px solid transparent')
                            .css('borderRight','6px solid gray').css('borderLeft','6px solid transparent')
                            .css('right','0').css('bottom','0').css('cursor','nw-resize');
                            artShow.append(artShowRes);
                            end.css('fontStyle','italic').text('-art show-');
                            if(item.src!=undefined)
                            try{
                                artShow.css('backgroundImage',`url(${item.src})`)
                            }catch{
                                throw new Error(`URLNotFound\n no such a file '${item.src}' been found`);
                            }else throw new Error(`RefrenceError\n 'art-show' buttons require an src attribute of an image to show.`);
                            
                            self.buttonsSetUp[7].push([box,artShow,artShowRes]);
                            addressez[7]++;
                            buttonDetails['addresse'] = [7,addressez[7]];
                        }self.buttons.push(buttonDetails);
                }
            });
            stel('.menu-item',itemcss,CSSStyle);
            this.quiwayIntegration = function(quiwayObject){
                quiwayS.forEach(item=>{
                    quiwayObject.defineShortCut(item[0],item[1])
                });
            }
            if(bottomBar!=undefined)menu.append(bottomBar);
            this.used = false;
            this.disabled = [];
            this.lastSpot = null;
            this.details = {};
            this.disable = function(buttonIndex,stylelist = {color:'gray'}){
                try{
                    stylelist['boxSising'] = 'border-box';
                    button=self.buttons[buttonIndex];
                    self.buttonsSetUp[button['addresse'][0]][button['addresse'][1]]['disabled']=true;
                    self.disabled.push([buttonIndex,button[0].attr('style')]);
                    button[0].attr('style',mgf(stylelist));
                }catch(e){
                    if(self.onerror.length>0)self.onerror.forEach(item=>item(new ContextMenuError('IndexError',`no button found with the index ${buttonIndex}`,new Error().stack)));
                }
                
            };
            this.launchContextMenu = function(e){
                self.onopen.forEach(item=>item(new ContextMenuOpen(self,e.target,self.details,self.buttons,self.disable,'launch',0,e)));
                self.ontimein.forEach(item=>{
                    timers = setTimeout(() => {
                        item[0](new ContextMenuOpen(self,e.target,self.details,self.buttons,self.disable,'launch',item[1],e))
                    }, item[1]);
                });
                self.lastSpot = e.target;
                self.details['x'] = e.clientX;
                self.details['y'] = e.clientY;
                self.details['root'] = e.target;
                self.details['rootList'] = [];
                findListRoot(e.target,[]);
                self.details['menu'] = self.menu[0];
                self.details['self'] = self;
                self.details['event'] = e;
                if(window.getSelection){
                    self.details['selected'] = window.getSelection().toString();
                    self.details['selection'] = window.getSelection();
                }
                
                function findListRoot(e,arr){
                    arr.push(e);
                    if(e.parentNode)findListRoot(e.parentNode,arr);
                    else self.details['rootList'] = arr;
                }
                e.preventDefault();
                [x,y] = [e.clientX+'px',e.clientY+'px'];
                [self.currentX,self.currentY] = [x,y];
                self.locationAndDistances.width = parseFloat(x)+parseFloat(self.menuWidth);
                self.locationAndDistances.height = parseFloat(x)+parseFloat(self.menuWidth);
                self.locationAndDistances.availWidth = window.innerWidth-(parseFloat(x)+parseFloat(self.menuWidth));
                self.locationAndDistances.availHeight = window.innerHeight-(parseFloat(x)+parseFloat(self.menuWidth));
                [availWidth,availHeight]  = [window.innerWidth,window.innerHeight] ;
                if($('#handymenuwall')[0]!=null) $('#handymenuwall').remove();
                if(document.getElementById(self.id)) $(('#'+self.id)).remove();
                wallCss = { position : 'fixed', left : '0', top : '0', width : '100%', height : '100%' }
                self.wall = $('<div id="handymenuwall"></div>'); a(self.wall,wallCss);
                $('body').append(self.wall);
                self.wall.mousedown((e)=>{self.disableMenu(e,'forced')});
                self.wall.contextmenu((e)=>{e.preventDefault();});
                //menu.css('left',x).css('top',y);
                //avoiding the menu floating out of the screen
                if(self.container == null){
                    $('body').append(menu);
                    self.menuHeight = parseFloat(window.getComputedStyle(menu[0]).getPropertyValue('height')) ;
                    self.menuWidth  = parseFloat(window.getComputedStyle(menu[0]).getPropertyValue('width'));
                    if((availWidth-parseFloat(x)) < self.menuWidth && (availHeight-parseFloat(y)) > self.menuHeight){
                        self.onedge.forEach(item=>item(new ContextMenuEdge('right',(availWidth-parseFloat(x)),self.menuWidth,(availHeight-parseFloat(y)),self.menuHeight,self,x,y,availWidth-(parseFloat(self.menuWidth)+1),null,e,self.details)));
                        menu.css('right','1px').css('left','unset').css('top',y).css('bottom','unset'); 
                    }
                    else if((availHeight-parseFloat(y)) < self.menuHeight && (availWidth-parseFloat(x)) > self.menuWidth){ 
                        self.onedge.forEach(item=>item(new ContextMenuEdge('bottom',(availWidth-parseFloat(x)),self.menuWidth,(availHeight-parseFloat(y)),self.menuHeight,self,x,y,null,availHeight-(parseFloat(self.menuHeight)+1),e,self.details)));
                        menu.css('bottom','1px').css('top','unset').css('left',x).css('right','unset');
                    }else if((availHeight-parseFloat(y)) < self.menuHeight && (availWidth-parseFloat(x)) < self.menuWidth){
                        self.onedge.forEach(item=>item(new ContextMenuEdge('right-bottom',(availWidth-parseFloat(x)),self.menuWidth,(availHeight-parseFloat(y)),self.menuHeight,self,x,y,availWidth-(parseFloat(self.menuWidth)+1),availHeight-(parseFloat(self.menuHeight)+1),e,self.details)));
                        menu.css('bottom','1px').css('top','unset').css('left','unset').css('right','1px');
                    }else{
                        menu.css('bottom','unset').css('top',y).css('left',x).css('right','unset');
                    }
                    self.used = true;
                }else{
                    if(!self.used){
                        self.onappend.forEach(item=>item(new ContextMenuAppend(self.details,self.container,e,e.target,self,self.disable)));
                        self.container.style.zIndex = 2 ;
                        self.container.append(menu[0]);
                        self.used = true; 
                    }
                }
                $('.HandyMenueItems').contextmenu(e=>e.preventDefault());
                self.appendFunctions();
            };
            this.version = '0.0.1';
            this.event = null;
            this.appendFunctions = function(){
                //normal buttons
                self.buttonsSetUp[0].forEach(item=>{
                    if(!item['disabled'])
                    item[0].click((e)=>{
                        if(self.onerror.length>0)
                        try{
                            item[1](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'normal button',item[2],null,self.details))
                        }catch{
                            self.onerror.forEach(itm=>itm(new ContextMenuError('SyntaxError',`an error occured when excuting a function whithin a menu button click.`,new Error().stack)))
                        }
                        else if(item[1]) item[1](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'normal button',item[2],null,self.details));
                        if($('#handymenuwall')[0]!=null) $('#handymenuwall').click();
                        self.disableMenu(e,'normal');
                    });
                    item[0].contextmenu((e)=>{e.preventDefault()})
                });
                //radios
                self.buttonsSetUp[1].forEach(itm=>{
                    //self.buttonsSetUp[2].push([group_name,[[item_id,item.func,state]],ball,index]);
                    if(!itm['disabled'])
                    itm[1].forEach(item=>{
                        item[0].click(function(e){
                            item[0].children()[0].append(itm[2][0]);
                            details = {
                                more : self.details,
                                buttonType : 'radio-button',
                                groupe : itm[0],
                                value : item[2],
                                button : item[0][0],
                            }
                            if(typeof item[1]==="function")
                            if(self.onerror.length>0)
                            try{
                                item[1](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'radio-button',item[3],details,self.details))
                            }catch{
                                self.onerror.forEach(itm=>itm(new ContextMenuError('SyntaxError','an error occured when excuting a function whithin a menu button click',new Error().stack)))
                            }
                            else item[1](details);
                            self.disableMenu(e,'normal');
                        });
                    });
                    
                });
                //sliders
                i=0;
                self.buttonsSetUp[6].forEach(item=>{
                    //self.buttonsSetUp[4].push([item_id-0,end-1,init-2,step-3,limit-4,item.func-5,format-6,bocko-7,bockostate-8,index]);
                    i++;
                    if(item[8]&&!item['disabled'])item[0].on('mouseenter',()=>{item[7].css('opacity',1)}).on('mouseleave',()=>{item[7].css('opacity',0)});
                    if(!item['disabled'])
                    item[0].on('wheel',e=>{
                        e.preventDefault();
                        if(e.originalEvent.deltaY>0){
                            if(self.buttonsSetUp[6][i][2]+item[3]<item[4][1]){
                                self.buttonsSetUp[6][i][2]=self.buttonsSetUp[6][i][2]+item[3];
                            }
                            else{
                            self.buttonsSetUp[6][i][2]=item[4][1];
                            } 
                            
                        }else{
                            if(self.buttonsSetUp[6][i][2]-item[3]>=item[4][0])
                            self.buttonsSetUp[6][i][2]=self.buttonsSetUp[6][i][2]-item[3];
                            else self.buttonsSetUp[6][i][2]=item[4][0];
                        }
                        item[1][0].innerText=item[6]?(item[6].replace('value',self.buttonsSetUp[6][i][2])):self.buttonsSetUp[6][i][2];
                        if(item[7]){
                            /*
                            //totalValue is the total number between 0 and +00
                            //the value between totalValueMax and totalValueMin
                            //ordinary rule=== (value/totalValue)*100 
                            //percent rule === ((value-minValue)/(maxValue-minValue))*100
                            
                            */
                            item[7].css('width',((((self.buttonsSetUp[6][i][2]-item[4][0])/(item[4][1]-item[4][0]))*100)+'%'));
                        }if(typeof item[5]==='function')item[5](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'slider',item[9],null,self.details,(self.buttonsSetUp[6][i][2])));
                    });
                });
                //submenus
                self.buttonsSetUp[4].forEach(item=>{
                    //self.buttonsSetUp[4].push([item_id,submenuHolder,[item.submenu,props]]);
                    if(!item['disabled'])
                    item[0].mouseenter(opensubmenu);
                    item[0].contextmenu((e)=>{e.preventDefault();});;
                    function opensubmenu(){
                        var Handy = new HandyMenue();
                        var sbmn = new Handy.ContextMenu(item[2][0],item[2][1]);
                        sbmn.parent = self;
                        item[1].append(sbmn.menu);
                        sbmn.appendFunctions();
                        
                        item[0].mouseleave(closesubmenu).contextmenu(closesubmenu);
                        function closesubmenu(){ sbmn.menu.remove(); }
                        if(self.locationAndDistances.availWidth<sbmn.menuWidth){
                            sbmn.menu.css('marginLeft',(-(parseFloat(self.menuWidth)+parseFloat(sbmn.menuWidth))+'px'));
                            sbmn.locationAndDistances.width = parseFloat(self.locationAndDistances.width)-parseFloat(self.menuWidth);
                            sbmn.locationAndDistances.availWidth = parseFloat(self.locationAndDistances.availWidth)+parseFloat(self.menuWidth);
                        }else{
                            sbmn.locationAndDistances.width = parseFloat(self.locationAndDistances.width)+parseFloat(self.menuWidth);
                            sbmn.locationAndDistances.availWidth = parseFloat(self.locationAndDistances.availWidth)-parseFloat(self.menuWidth);
                        }
                    }
                    
                });
                //data sets
                self.buttonsSetUp[3].forEach(item=>{
                    //self.buttonsSetUp[3].push([box,inp,item.func,item.allowed,[front,back],buttonsIndex]);
                    if(!item["disabled"])
                    item[0].mouseenter(focusInput).mouseleave(blurInput).click(blurInput);
                    item[0].contextmenu((e)=>{e.preventDefault();});
                    if(!item['disabled'])
                    item[1].keydown(getUserData);
                    function getUserData(e){
                        if(e.keyCode==13){
                            data = this.value;
                            if(item[2])item[2](new ButtonClick(e.clientX,e.clientY,self,item[0][0],'data-set',item[4],null,self.details,data));
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
                    function focusInput(){
                        item[1].css('zIndex','3');
                        item[1].css('opacity','1');
                        item[4][0].css('opacity',0);
                        item[4][1].css('opacity',0);
                        item[1][0].focus();
                    }
                    function blurInput(){
                        item[1].css('zIndex','-1');
                        item[1].css('opacity','0');
                        item[4][0].css('opacity',1);
                        item[4][1].css('opacity',1);
                        item[1].val('');
                        item[1][0].blur();
                    }
                });
                /**/
                //checks box
                self.buttonsSetUp[2].forEach(item => {
                    //self.buttonsSetUp[1].push([item.name,item_id,state,[src,[label1,label2],item.func,func2],index);
                    if(!item['disabled'])
                    item[1].click(checkit);
                    item[1].contextmenu((e)=>{e.preventDefault();});;
                    function checkit(e){
                        if(item[2].val()==false){
                            item[2].val(true);
                            item[2].parent().css('backgroundImage',item[3][0]);
                            if(item[3][1]!=undefined)
                                if(item[3][1].length>1)
                                    item[1][0].childNodes[1].childNodes[0].childNodes[1].innerText = item[3][1][1];
                            
                            if(item[4]!=undefined)if(self.onerror.length>0)
                            try{
                                item[4](new ButtonClick(e.clientX,e.clientY,self, item[1][0],'check-box',item[4],null,self.details,'check'))
                            }catch(e){
                                self.onerror.forEach(itm=>itm(new ContextMenuError(e.name,e.message,new Error().stack)))}
                            else item[4](new ButtonClick(e.clientX,e.clientY,self,item[1][0],'check-box',item[4],null,self.details,'check'));
                            if(item[0]!=undefined)
                                registerData(item[0],true);
                            self.disableMenu(e,'normal');
                        }
                        else{
                            item[2].val(false);
                            item[2].parent().css('backgroundImage','none');
                            if(item[3][1]!=undefined)
                                if(item[3][1].length>1)
                                    item[1][0].childNodes[1].childNodes[0].childNodes[1].innerText = item[3][1][0];
                            if(item[0]!=undefined)
                                registerData(item[0],false);
                                if(item[5]!=undefined)if(self.onerror.length>0)
                                try{
                                    item[5](new ButtonClick(e.clientX,e.clientY,self,item[1][0],'check-box',item[4],null,self.details,'uncheck'))
                                }catch(e){
                                    self.onerror.forEach(itm=>itm(new ContextMenuError(e.name,e.message,new Error().stack)))}
                                else item[5](new ButtonClick(e.clientX,e.clientY,self, item[1][0],'check-box',item[4],null,self.details,'uncheck'));
                            self.disableMenu(e,'normal');
                        }
                    }
                });
                //definitions
                self.buttonsSetUp[5].forEach(item=>{
                    //self.buttonsSetUp[5].push([item_id,definitionBox,[item.moreDef,item.label,options]])
                    if(!item['disabled']){
                        item[0].mouseenter(()=>{
                            item[1].css('height','100%').css('opacity','1');
                        }).mouseleave(()=>{
                            item[1].css('height','1px').css('opacity','0');
                        });
                        if(item[2]!=undefined){
                            item[0].click(expandDefinition).contextmenu(expandDefinition);
                            function expandDefinition(e){
                                if($('#handy_menue_def_moreknowledge')[0]!=undefined)$('#handy_menue_def_moreknowledge').remove();
                                moreDef = $('<div id="handy_menue_def_moreknowledge"></div>')
                                .css('width','250px').css('height','fit-content')
                                .css('backgroundColor','rgb(230,230,230)').css('boxShadow','0 10px 15px rgb(200,200,200)')
                                .css('position','fixed')
                                .css('left','20px').css('top','50px').css('padding',"10px");
                                $('body').append(moreDef);
                                moreDefDefs = $('<p></p>').text(item[2][0]);
                                title = $('<b></b>').css('textAlign','center').css('width','100%').text(item[2][1]);
                                moreDef.append(title).append(moreDefDefs);
                                if(typeof item[2][2]==='boolean' &&item[2][2]==true){
                                    copybtn = $('<div></div>').attr('class','btn-defs-HandyMenue').text('copy').click(copydefs);
                                    readoutloud = $('<div></div>').attr('class','btn-defs-HandyMenue').text('read out loud').click(readOL);
                                    search = $('<div></div>').attr('class','btn-defs-HandyMenue').text('search').click(searchFor);
                                    exitbtn = $('<div></div>').attr('class','btn-defs-HandyMenue').text('exit').click(closeDefs);
                                    stel('.btn-defs-HandyMenue',{paddingTop:'3px',paddingBottom:'3px',textAlign:'center',boxSizing:'border-box'
                                    ,border:'1px solid transparent',backgroundColor:'rgb(240,240,240)',fontSize:'12px',width:'100%',userSelect:'none',
                                    mozUserSelect:'none',webkitUserSelect:'none',cursor:'default',marginBottom:'4px'},CSSStyle);
                                    stel('.btn-defs-HandyMenue:hover',{backgroundColor:'rgb(250,250,250)',transition:'all .5s'},CSSStyle);
                                    moreDef.append(copybtn).append(readoutloud).append(search).append(exitbtn);
                                }else if(typeof item[2][2]==='object'&&item[2][2]!=null){
                                    stel('.btn-defs-HandyMenue',{paddingTop:'3px',paddingBottom:'3px',textAlign:'center',boxSizing:'border-box'
                                    ,border:'1px solid transparent',backgroundColor:'rgb(240,240,240)',fontSize:'12px',width:'100%',userSelect:'none',
                                    mozUserSelect:'none',webkitUserSelect:'none',cursor:'default',marginBottom:'4px'},CSSStyle);
                                    stel('.btn-defs-HandyMenue:hover',{backgroundColor:'rgb(250,250,250)',transition:'all .5s'},CSSStyle);
                                    if(item[2][2].copy && item[2][2].copy==true){
                                        copybtn = $('<div></div>').attr('class','btn-defs-HandyMenue').text('copy').click(copydefs);
                                        moreDef.append(copybtn);
                                    }
                                    
                                    if(item[2][2].readOL && item[2][2].readOL==true){
                                        readoutloud = $('<div></div>').attr('class','btn-defs-HandyMenue').text('read out loud').click(readOL);
                                        moreDef.append(readoutloud);
                                    }
                                    if(item[2][2].search && item[2][2].search==true){
                                        searcher = $('<div></div>').attr('class','btn-defs-HandyMenue').text('search').click(searchFor);
                                        moreDef.append(searcher);
                                    }
                                    if(item[2][2].exit && item[2][2].exit==true){
                                        exitbtn = $('<div></div>').attr('class','btn-defs-HandyMenue').text('exit').click(closeDefs);
                                        moreDef.append(exitbtn);
                                    }else moreDef.click(closeDefs);
                                }else moreDef.click(closeDefs);
                                async function copydefs(e){
                                    if(navigator.clipboard){
                                        try{
                                            await navigator.clipboard.writeText(item[2][0]);
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
                                            if(self.onerror.length>0) self.onerror.forEach(itm=>itm(new ContextMenuError('BrowserSupportError',`your browser does'nt support navigator.clipBoard API`,new Error().stack)))
                                        }
                                    }else if(self.onerror.length>0) self.onerror.forEach(itm=>itm(new ContextMenuError('BrowserSupportError',`your browser does'nt support navigator.clipBoard API`,new Error().stack)))
                                }
                                function searchFor(){
                                    window.open(item[2][1]);
                                }
                                function readOL(){
                                    if(window.speechSynthesis&&window.SpeechSynthesisUtterance)window.speechSynthesis.speak(new SpeechSynthesisUtterance(item[2][0]));
                                    else if(self.onerror.length>0) self.onerror.forEach(itm=>itm( new ContextMenuError('BrowserSupportNotice',`speechSynthesis or speechSynthesisUtterance API is not supported by your browser!`,new Error().stack)));
                                }
                                function closeDefs(e){
                                    if(moreDef) moreDef.remove();
                                }; item[1].css('height','1px').css('opacity','0'); self.disableMenu(e,'normal');
                            }
                        }
                    }
                });
                // art-show
                var timooust;
                self.buttonsSetUp[7].forEach(item=>{
                    //[item_id,artShow,artShowRes,artShowClose]
                    if(!item['disabled']){
                        $('body').append(item[1].css('width',0).css('height',0).css('opacity',0));
                        item[1].css('transition','all .5s');
                        runtimeProcess.push(item[1]);
                        item[0].click(function(e){
                            if(timooust!=undefined) clearTimeout(timooust);
                            self.disableMenu(e,'normal');
                            $('body').append(item[1]);
                            artShowClose=$('<canvas></canvas>').css('borderRadius','50%').css('backgroundColor','white')
                            .attr('width','20px').attr('height',"20px").attr('id','HandyMenue_tinyPieces_artShow_closeBtn')
                            .css('width','20px').css('height','20px').css('position','absolute').css('right',0).css('top',0)
                            .css('margin','5px').css('cursor','pointer').css('transition','all .5s');
                            stel('#HandyMenue_tinyPieces_artShow_closeBtn:hover',{
                                transform : 'rotate(180deg)',
                                backgroundColor : 'red',
                                boxShadow : '0 0 4px black'
                            },CSSStyle);
                            ctx = artShowClose[0].getContext('2d');
                            console.log(ctx);
                            ctx.beginPath();
                            ctx.moveTo(4,4);
                            ctx.lineTo(16,16);
                            ctx.strokeStyle = 'black';
                            ctx.stroke();
                            ctx.closePath();
                            ctx.beginPath();
                            ctx.moveTo(16,4);
                            ctx.lineTo(4,16);
                            ctx.stroke();
                            item[1].append(artShowClose);
                            item[1].css('transition','unset');
                            grabbed = false;
                            window.addEventListener('mousemove',function(e){
                                if(grabbed){
                                    [x,y]=[e.clientX,e.clientY];
                                    artShow.css('width',(x-2)+'px').css('height',(y-2)+'px');
                                }
                            });
                            window.addEventListener('mouseup',function(){
                                grabbed = false;
                            });
                            item[2].mousedown(function(){
                                grabbed=true
                            });
                            artShowClose.click(function(){
                                artShowClose.css('right','calc(50% - 10px)').css('top','calc(50% - 10px)'); 
                                item[1].css("transition",'all .5s');
                                item[1].css('height','0').css('opacity','0');
                                timooust = setTimeout(() => {
                                    artShowClose.remove();
                                    item[1].remove();
                                }, 500);
                                
                            });
                            
                        }).mouseenter(function(){
                            item[1].css('width','300px');
                            item[1].css('height','300px');
                            item[1].css('opacity',1)
                        }).mouseleave(function(){
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
                if(event!='click' && event!= 'dblclick' && event!= 'contextmenu'){
                    if(self.onerror.length>0) self.onerror.forEach(item=>item(new ContextMenuError('UnacceptableEvent',`the event '${event}' is not acceptable, plz read the documentation to know about the acceptable values!`,new Error().stack)));
                    else throw new Error(`UnacceptableEvent \nthe event '${event}' is not acceptable, plz read the documentation to know about the acceptable values!`);}
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
                        if(event=='contextmenu') element.contextmenu(self.launchContextMenu);
                        else if(event=='dblclick') element.dblclick(self.launchContextMenu);
                        else if(event=='click') element.click(self.launchContextMenu);
                        if(container && typeof container==='object') self.container = container;
                        else if(container && typeof container!=='object'){
                            if(self.onerror.length>0)self.onerror.forEach(item=>item(new ContextMenuError('DOMElementNotRecognized','HandyMenue.setUp : third parameter not of type DOMElement!',new Error().stack)));
                            else throw new Error(`DOMElementNotRecognized\n HandyMenue.setUp : third parameter not of type DOMElement!`);
                        } 
                    }else if(self.onerror.length>0)self.onerror.forEach(item=>item( new ContextMenuError('DOMElementNotRecognized','HandyMenue.setUp : first parameter not a right id ,class ,nodeName or wildcard.',new Error().stack)));
                    else throw new Error(`DOMElementNotRecognized\n HandyMenue.setUp : first parameter not a right id ,class ,nodeName or wildcard.`)
                }
            };
            this.onopen=[];
            this.onclose=[];
            this.onerror=[];
            this.onappend=[];
            this.ondetach=[];
            this.onedge=[];
            this.ontimein=[];
            this.ontimeout=[];
            this.metatimeout=[];
            this.metatimein=[];
            this.metaopen=[];
            this.metaclose=[];
            this.metaerror=[];
            this.metaclosed=[];
            this.metaappend=[];
            this.metadetach=[];
            this.metaedge=[];
            this.on = function(event,listener){
                var possible_events = ['open','close','error','edge','append','detach','loaded','timein','timeout'];
                if(typeof listener!=='function'){
                        if(self.onerror.length>0)self.onerror.forEach(item=>item(new ContextMenuError('TypeError',`listener must be of type function : you passed a ${typeof listener}`,new Error().stack)));
                        else throw new Error(`TypeError\n listener must be of type function : you passed a ${typeof listener}`);
                }else{
                    label = new String(listener);
                    if(possible_events.findIndex((e)=>{if(e==event)return true;})!=-1){
                        self[`on${event}`].push(listener);self[`meta${event}`].push(label);
                    }else if(event.split(':')[0]=='timein'||event.split(':')[0]=='timeout'){
                        self[`on${event.split(':')[0]}`].push([listener,parseFloat(event.split(':')[1])]);self[`meta${event.split(':')[0]}`].push(label);
                    }else{
                        if(self.onerror.length>0)self.onerror.forEach(item=>item(new ContextMenuError('UnacceptableEvent',`'${event}' is not a acceptable event type to use in HandyMenue.on(e,listener)`,new Error().stack)));
                        else throw new Error(`UnacceptableEvent \n '${event}' is not a acceptable event type to use in HandyMenue.on(e,listener)`);
                    } 
                    return self;
                }
                
            };
            this.remove = function(event,listener=undefined){
                var possible_events = ['open','close','error','edge','append','detach','timein','timeout','loaded'];
                if(typeof listener!=='function'&&typeof listener!=='undefined'){
                    if(self.onerror.length>0)self.onerror.forEach(item=>item(new ContextMenuError('TypeError',`listener must be of type function : you passed a ${typeof listener}`,new Error().stack)));
                    else throw new Error(`TypeError\n listener must be of type function : you passed a ${typeof listener}`);
                }else{
                    if(possible_events.findIndex((e)=>{if(e==event)return true;})!=-1){
                        if(!listener) self[`on${event}`] = [];
                        else{
                            label = new String(listener);
                            self[`on${event}`].splice(self[`meta${event}`].indexOf(label),1);
                        }return self;
                    }else if(event.split(':')[0]=='timein'||event.split(':')[0]=='timeout'){
                        self[`on${event.split(':')[0]}`].splice(self[`meta${event.split(':')[0]}`].indexOf(label),1);
                        self[`meta${event.split(':')[0]}`].splice(self[`meta${event.split(':')[0]}`].indexOf(label),1);
                    }else{
                        if(self.onerror.length>0)self.onerror.forEach(item=>item(new ContextMenuError('UnacceptableEvent',`'${event}' is not a acceptable event type to use in HandyMenue.remove(e,listener)`,new Error().stack)));
                        else throw new Error(`UnacceptableEvent \n '${event}' is not a acceptable event type to use in HandyMenue.remove(e,listener)`);
                    }
                }
            }
            this.final={};
            this.disableMenu= function(x,type){
                self.details['x'] = x.clientX;
                self.details['y'] = x.clientY;
                self.onclose.forEach(item=>item(new ContextMenuClose(self,self.details,type,x,x.currentTarget)));
                if(self.wall!=null){ self.wall.remove(); self.wall = null;}
                if(self.disabled.length>0)self.disabled.forEach(item=>{
                    button=self.buttons[item[0]];
                    self.buttonsSetUp[button['addresse'][0]][button['addresse'][1]]['disabled']=undefined;
                    button[0].attr('style','');
                    self.disabled = [];
                });
                if(self.ondetach.length>0){
                    self.ondetach.forEach(item=>item(new ContextMenuDetach(self.details,self.container,x,x.target,self)));
                    self.used = false;
                }runtimeProcess.forEach(item=>item.remove());
                self.menu.remove();
                if(self.parent!=null)self.parent.disableMenu(x,type);
                self.used = false;
                if(self.ontimeout)self.ontimeout.forEach(item=>{
                    timers = setTimeout(() => {
                        item[0](item[1]);
                    }, item[1]);
                })
            }
            if(props.itemsOnHover){
                itemhoverstyle = aac(itemsOnHover,props.itemsOnHover) ;
                stel('.menu-item:hover',itemhoverstyle,CSSStyle);
            }else stel('.menu-item:hover',itemsOnHover,CSSStyle);
            var t1=performance.now();
        }
}));