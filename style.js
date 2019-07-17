
// MAKING TABS USING JAVASCRIPT

const btns = document.querySelectorAll(".tablinks");
btns[0].className +=' active';
let a = document.querySelector(".tabcontent[data-num='1']"); //set the default tab content
document.getElementById('selectedContent').innerHTML= a.innerHTML;

btns.forEach(element => {
          element.addEventListener("click", (event) => {

               for(let btn of btns){
                    btn.className = btn.className.replace(" active","");
               }

               let number = element.dataset.forTab;
               
               a = document.querySelector(".tabcontent[data-num='"+number+"']"); //setting the content dynamically.

               document.getElementById('selectedContent').innerHTML= a.innerHTML;

               event.currentTarget.className += ' active';
               
     });
});