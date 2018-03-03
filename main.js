//SVG icon links 


var removeSVG = '<svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="trash"><path class="fill" d="M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001   c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17   c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10   c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002   c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z" fill="#333333" fill-rule="evenodd"/><path clip-rule="evenodd" d="M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9   c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z" fill="#333333" fill-rule="evenodd"/><path clip-rule="evenodd" d="M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2   c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z" fill="#333333" fill-rule="evenodd"/><path clip-rule="evenodd" d="M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2   c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z" fill="#333333" fill-rule="evenodd"/></g></svg>';

var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <rect class="noFill" width="22" height="22"/> <polyline style="fill:none;stroke:#424A60;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points=" 42,20 26,38 16,30 "/> <g> <path class="fill"> </g> <g></g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';


// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
if (value) {
addItemToDo(value);
document.getElementById('item').value='';

} 
});

function removeItem () {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  
  parent.removeChild(item);
  
}

function completeItem() {
var item = this.parentNode.parentNode;
var parent = item.parentNode;
var id = parent.id;
//check if item needs to be added to toDo or completed

var target = (id === 'toDo') ? document.getElementById('completed'):document.getElementById('toDo');
}

parent.removeChild(item);
target.insertBefore(item, target.childNodes[0]);



//Adding new items to do list
function addItemToDo(text) {
  var list = document.getElementById('toDo');

  var item = document.createElement('li');
  item.innerText =text;
  
  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
  
  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  //Add a click event for removing items
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  //Add click event for completing items
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);



}

