window.onload = function() {
  const storage = JSON.parse(localStorage.getItem("tasks")) || [];

  

  const listContainer = document.getElementById("list-container");


  if(storage){

    storage.forEach(item => {
      

    let li = document.createElement("li");
    li.id = item.id;
    // li.classList.add("space-x-6", "hidden"); 
    let i = document.createElement("i");
    let e = document.createElement("i");
    let d = document.createElement("div");
    d.appendChild(e);
    let s = document.createElement("span");
    d.appendChild(i);

    i.classList.add("bi", "bi-trash", "cursor-pointer", "px-6")
    e.classList.add("bi", "bi-pencil", "cursor-pointer", "px-6")



    s.innerText = item.task;

    li.appendChild(s);
    li.appendChild(d);


    
    listContainer.appendChild(li);
    
    
    i.onclick = function(){
      const toDelete = li.id;
      const newArr = storage.filter (item => item.id !== toDelete);
      localStorage.removeItem("tasks", JSON.stringify(newArr));
      listContainer.removeChild(li);
      
    }
    
  
      e.onclick = function () {
      edit();
    }
    
    const edit = () => {
        var newTask = prompt("edit task");
        
    
    while(newTask == ""){
      alert("Enter task");
      var newTask = prompt("edit task");
    }
    if(!newTask){
      return;
    }
    s.innerText = newTask;
  }
 

  
  
  })

}
  
  

  

// [
//   {
//     id: 3,
//     task: "sweep"
//   },
//   {
//     id: 4,
//     task: "mop"
//   }
// ]

}

const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  addTask();
})

function addTask() {

    const inputBox = document.getElementById("inputbox");
    const listContainer = document.getElementById("list-container");
    const deletex = document.getElementById("delete");
    const edit = document.getElementById("edit");
    const hiddenIcon = document.getElementById("icons");

    let storage = JSON.parse(localStorage.getItem("tasks")) || []
    

    // const icon = document.getElementById("icon-container");
    

    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
      
      const id = Math.random() * 1000;
      storage.push({
        id: id,
        task: inputBox.value

      })

      localStorage.setItem("tasks", JSON.stringify(storage));
      


      let li = document.createElement("li");
      // li.classList.add("space-x-6", "hidden"); 
      let i = document.createElement("i");
      let e = document.createElement("i");
      let d = document.createElement("div");
      let s = document.createElement("span");

      i.classList.add("bi", "bi-trash", "cursor-pointer", "px-6")
      e.classList.add("bi", "bi-pencil", "cursor-pointer", "px-6")

      d.appendChild(i);
      d.appendChild(e);


      s.innerText = inputBox.value;

      li.appendChild(s);
      li.appendChild(d);


      
      listContainer.appendChild(li);
      inputBox.value = "";
  

      i.onclick = function(){

        const toDelete = id;
        const newArr = storage.filter (item => item.id !== toDelete);
        localStorage.setItem("tasks", JSON.stringify(newArr));
        
        listContainer.removeChild(li);
 
      }

       e.onclick = function () {
        edit();
      }
      
      const edit = () => {
          var newTask = prompt("edit task");
          
      
      while(newTask == ""){
        alert("Enter task");
        var newTask = prompt("edit task");
      }
      if(!newTask){
        return;
      }
      s.innerText = newTask;
     

      
      
      

    
      
      
      
      
    }   
}



// let todos = [{
//   id: 1,
//   task: completed
// }];

// for(let i = 0; i < length; i++){
  
// }

}