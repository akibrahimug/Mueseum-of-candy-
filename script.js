const buttons = document.querySelectorAll('.box-button');

for(const button of buttons){
     button.addEventListener('mouseover', (e) => {
         const box = e.target.parentNode;
             box.style.backgroundColor = 'black';
             box.style.color = 'white';  
           
     })

     button.addEventListener('mouseout', (e) => {
         const box = e.target.parentNode;
         box.style.backgroundColor = 'white';
         box.style.color = 'black';  
     })
}



