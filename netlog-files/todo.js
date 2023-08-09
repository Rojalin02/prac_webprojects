const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask(){
   if(inputBox === ''){
    alert("You must write something!");
   }
   else{
    let li= document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span=document.getElementById("span");
    span.innerhtml="\u00d7";
    li.appendChild(span);

   }
   inputBox===" ";
   saveData();
}
listContainer.addEventListener("click", function(e){
       if(e.target.tagname === "LI")
{
        e.target.classlist.toggle("checked");
        saveData();
}
else if(e.target.tagname ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
