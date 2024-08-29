const menu = document.getElementById("Dropdown")
const active = false;
const Dropdown = () => {
   switch(active){
    case(active == false):
      menu.style.display = `inline-block`
      active = true;
      case(active == true):
      menu.style.display = `none`      
      active = false;
   }
}