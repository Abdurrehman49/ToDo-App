
var list = document.getElementById('item');
function addTask() {
   
    var inputValue = document.getElementById('myInput').value;
    var li = document.createElement('li');
    var liText = document.createTextNode(inputValue);
    li.appendChild(liText);


    var delbtn = document.createElement('button');
    var deltxt = document.createTextNode("DELETE");
    delbtn.setAttribute("onclick", "delebtn(this)");
    
    delbtn.appendChild(deltxt);



    var edtBtn = document.createElement('button')
    var edtTxt = document.createTextNode('EDIT');
    edtBtn.setAttribute('onclick', 'editFun(this)') 
    edtBtn.appendChild(edtTxt);
    li.appendChild(edtBtn);

    li.appendChild(delbtn);
    list.appendChild(li);


    myInput.value = "";



}
function delebtn(e) {
    e.parentNode.remove();
    
}
function deleteAll()
{
    list.innerHTML= " ";
}
function editFun(e)
{
    var val = e.parentNode.firstChild.nodeValue;
    var edtval = prompt("Enter the value",val);
    e.parentNode.firstChild.nodeValue = edtval;

}

