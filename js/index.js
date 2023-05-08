const portalselect = document.getElementById("mobile_menu");

portalselect.addEventListener("change", function(event){
    let selectedValue = event.target.value;
    if ( selectedValue ==="location"){
        window.location = "location.html";
    }
});