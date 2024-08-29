const menu = document.getElementById("Dropdown")
const active = false;
const Dropdown = () => {
   
    if(active == false){
      menu.style.display = `inline-block`
      menu.style.borderStyle = "Solid"
      active = true;
    }
       
   else if(active == true){
    menu.style.display = `none`
    active = false
   }
}