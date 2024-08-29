const menu = document.getElementById("Dropdown")
const active = false;
const Dropdown = () => {
   
    if(active == false){
      menu.style.display = `inline-block`
      active = true;
    }
       
     else if(active == true){
      menu.style.display = `none`      
      active = false;
      }
}