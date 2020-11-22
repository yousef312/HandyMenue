# HandyMenueJs
a library which handle creating, interact and managing context menu with ease

## What does we offer?
* easy step to create, deploy and manipulate your contextmenu
* a lot of possiblity to design and manage your contextmenu the way you want
* no dependency at all
* an event system for more control
* official buttons types.

and soon(still working on)
* the menu direction: you can choose the direction of the menu for both english, arabic contextmenu.
* more default themes and more..
## Installation
**sorry the library not published on npm yet! you can only download it from github**.

still you can use it in your nodejs project and require it with.
## Dependencies 
no dependency required

## Usage
```javascript
//this step is mean for nodeJS usuage, about ordinary browser usuage you can just skip this step and use HandyMenue global class.
const handymenue = require('handymenuejs');

/* 
this array contains bunch of objects each one act like a button
*/
var buttonsList = [
{
  label : 'File', //the button label(text to display over the button)
  func : function(){ // a function to excute when clicking the button
  console.log('opening file explorer');
  },
  icon : 'img/icon.png' // a path to an image to play it as a button icon
},
{
  label : 'Big Icons',
  type : 'check-box', // the type of button there is a bunch of types we will be dicussing later
  func : function(){
  var icons = document.getElementsByClassName('.icons');
  icons.style.width = '100px';
  icons.style.height = '100px';
  },
  func_off : function(){ //for check-box buttons there is two function to excute: one when check the button and an other function when uncheck the button
  var icons = document.getElementsByClassName('.icons');
  icons.style.width = '50px';
  icons.style.height = '50px';
  } 
},
{
  label : 'exit', 
  func : function(){
  window.close()
  }
}
];
//the props/properties is an object contains some set up for the menu
var props = {
  id : 'myhandymenue', // set an id to the menu
  bars : '5px', //define a bar to add to the top and the bottom of the menu
  indent : '20px', // an indentation for each buttons label(some space added before the label)
  indentReverse : '20px', // an indent added to the comment zone(the right of the menu)
  theme : 'silver', //default:silver ; some already created themes for your menu
  stairs : 3, // the indent increase or decrease from the top button to the bottom one of the menu
  //....
};
// the style of the menu
var style = {
  width : '300px',//really important(obligatory)
  height : 'fit-content', //it's better to keep it always 'fit-content'
  //...
}
//instantiation the global object
var handy = handymenue.ContextMenu(buttonsList,props,style);
// set up the menu
let zone = 'window';//the place where to launch the context menu(element id, node name, element class, wildcard)
let event = 'contextmenu'; //the event that will fire the contextmenu(default : 'contextmenu') acceptable values:: 'click' 'dblclick' 'contextmenu'
let container = document.getElementById('.ctxmenuContainer'); //optional container for your menu(the menu won't take the click position but will be appended to the container)
//event and container are optional : zone is required
handy.setUp(zone);
//listening to an contextmenu event
handy.on('open',function(e){
  console.log('menu opened!');
});
handy.on('close',function(e){
  console.log('menu closed!');
});
//removing an event listener
handy.remove('open',function(e){
  console.log('menu opened!');
});
```
### Buttons Types
**we support a bunch of buttons types i will be mentioning right now:**
<span style="color:blue">check-box</span>:
```javascript
 {
    label : ['Check','Uncheck'],
    type : 'check-box',
    func : function(){
      console.log('choosen!');
    },
    func_off : function(){
      console.log('not choosen!');
    },
    icon : 'img/checkIcon.png'// a path to an image to use as the checking icon
 }
```
check-box are like the usual html check box, they excute two function:
* <span style="color:red">func</span> : excuted when checking the button 
* <span style="color:red">func_off</span> : excuted when unchecking the button
a check box may take an array as a label with maximum length of 2, in this case the first array value will be displayed first, then when checking the button the second value
will be displayed and so on.
<span style="color:blue">radio-button</span>:
```javascript
 {
    label : 'Sized 5',
    type : 'radio-button',
    name : 'groupName',
    func : function(){
      console.log('you ve choosed this');
    },
    icon : 'img/radioIcon.png'// a path to an image to use as the radio icon
 }
```
the radio box is like the html usual radio boxes, the name is required so it can work with other radio buttons list and subtract data.

<span style="color:blue">data-set</span>:
```javascript
 {
    label : 'enter your name',
    type : 'data-set',
    allowed : 'a',
    func : function(e){
      console.log(`your name is ${e.data}`);
    }
 }
```
display a text input for major use and you subtract the data from the event object passed to your function dynamically(e.data).
* allowed : may take either 'a' or 1 ;  and 1
  * 'a' : mean the input will only accept characteres/no numbers
  * 1 : mean the input will accpet only numbers/ no characters
  * default : passing any thing else or not to pass this attributes mean to accept every thing numbers and characteres
<span style="color:blue">defintion</span>
```javascript
{
  label : 'blender',
  type : 'definition',
  def : 'a blender is this machine that mix, and cut foods together';
  moreDef : `
  a blender is.......
  .....
  ...a lot of definition
  `,
  option : {
    exit : true,
    readOL : true,
    search : true,
    copy : true
  }
}
```
a defintion buttons is a button that display a definition box when hovering over.
* def : the text definition to be displayed
* moreDef : if this passed, when click on the definition button a new box will be displayed containing this defintion
* option : some options for the new box containing the moreDef text
  * copy : if true add a button the moreDef box allows you to copy it content
  * exit : if true add a button to exit the moreDef box
  * search : if true add a button to search for the defined term in a new window
  * readOL : if true add a button to read the definition content of the moreDef box outloud with speech speak API(if supported)
<span  style="color:blue">submenu</span>
```javascript
{
  label : 'Check for more',
  type : 'submenu',
  submenu : [
  {
    label : '...',
    func : function(){...}
  },
  {
  ..
  },..
  ]
}
```
a submenu will dislay an sub-menu when hovering on
* submenu : an array of object describe the new menu buttons
<span style="color:blue">slider</span>
```javascript
{
  label : 'volume',
  type : 'slider',
  range : [20,300],
  step : 5,
  init : 100,
  format : 'value-pec',
  backshow : {
    color : 'red',
    height : '30px'
  }
}
```
a slider is button when you wheel(circle your mouse wheel)  over it it will slide between two numbers (range attribute).
* range : describe the two sliding points of the slider [min,max]
* step : how much to add/subtract in each wheel event
* init : the intila value of the slider
* format : the format(the way to display) the value of the slider: the word value will be changed the actual value of the slider and rest will stay the same
* backshow : if passed a line will appear at the background of the buttons shows the actual value as in percent
  * css-attribute : backshow takes a css attribute in upperCase  mode(instead of 'text-align'=>textAlign) the will be applied the backshow div element
<span>art-show</span>
```javascript
{
  label : 'Check image'
  type : 'art-show',
  src : 'img/sourceOfTheImage.png' //the source of the image to show
}
```
art show button display a **resizable** image at the top right corner of your page, you can define this image throught the src attribute
* src : the source of the image to display

* accelerator : an accelerator is a shortcut you can set for your ordinary buttons only, passing a string of keys name concatination.
to complete setting up your accelerator you must have the library Quiway.Js, instantiate the quiway class and pass the Quiway object into HandyMenue.quiwayIntegration(quiwayObject) and done.
**functions**:

* HandyMenue.getMenuData() : this function allows you to get some of your menu data like width height location properties... it returns an object.
* HandyMenue.quiwayIntegration(quiwayObject) : this function used to complete setting up your accelerator key using the Quiway.Js library passed as an object.
* HandyMenue.retrieveData(step) : this function allows you to retrieve a data of a check-box, radio-button, slider or a data-set button, the step is the name attribute you 
passed to the button of those types. Otherwise, if no name was passed the radio button will throw an error but the other buttons will take their label as the name.
## License
[MIT](https://choosealicense.com/licenses/mit/)
