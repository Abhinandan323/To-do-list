let add = document.getElementById("add");
let todobox = document.getElementById("inputbox");
let input = document.getElementById("inputfield");

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
add.addEventListener('click', function() {

    var para = document.createElement('li');
    para.appendChild(document.createTextNode(input.value));
    
    todobox.append(para); 

    var del = document.createElement('button');
    var com = document.createElement('button');

    
    para.appendChild(del);
    para.appendChild(com);
    
    del.className= 'button';
    del.innerText = 'delete';
    com.className= 'button';
    com.innerText = 'complete';
    

    todobox.appendChild(para);
    para.classList.add("paragraph-styling");

    del.addEventListener('click',function(){
        todobox.removeChild(para);
    })
    com.addEventListener('click',function(){
        para.style.textDecoration= 'line-through';
       
    })
})
