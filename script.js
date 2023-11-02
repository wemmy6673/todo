
function addTask() {

    const inputBox = document.getElementById("inputbox");
    const listContainer = document.getElementById("list-container");
    const deletex = document.getElementById("delete");
    const edit = document.getElementById("edit");
    const hiddenIcon = document.getElementById("icons");

    // const icon = document.getElementById("icon-container");
    

    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
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


      
      //li.innerHTML = deletex;
      //li.innerHTML = edit;
      listContainer.appendChild(li);

      // setTimeout(() => {

      //   listContainer.removeChild(li);
      // }, 3000);

      // icon.appendChild(div);

      // hiddenIcon.style.display = 'flex';

      i.onclick = function(){
        listContainer.removeChild(li);
      }

       e.onclick = function () {
        edit();
      }

      const edit = () => {
          var newTask = prompt("edit task");
          s.innerText = newTask;
      }
     

      

      

    
      
      
      
      
    }

    
    
}






