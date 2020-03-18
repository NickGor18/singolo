function menucolor(id){
    elem = document.getElementById(id)
    if (menucolor.prev_elem !== undefined){
        menucolor.prev_elem.style.color = "#ffffff"
    }
    menucolor.prev_elem = elem
    elem.style.color = "#f30b0b"
}
function FuncImagesV(str) {
    elem = document.getElementById('i_v_off');
    if(str == "on") {
        elem.style.display = "block";
    } else {
        elem.style.display = "";
   }
 };

 function FuncImagesH(str){
    elem = document.getElementById('i_h_off');
    if(str == "on") {
        elem.style.display = "block";
    } else {
        elem.style.display = "";
   }
 };
 function shuffleImages(id) {
    var ul = document.getElementById('wrap');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    tabsToggler(id)
 }

 function tabsToggler(id) {
     elem = document.getElementById(id)
    if (tabsToggler.prev_elem !== undefined){
        tabsToggler.prev_elem.style.border = "1px solid #666d89"
        tabsToggler.prev_elem.style.color = "#767e9e"
    }
    tabsToggler.prev_elem = elem
    elem.style.border = "1px solid #c5c5c5"
    elem.style.color = "white"
 }
 function borderSetter(id) {
    elem = document.getElementById(id)
    if (borderSetter.prev_elem !== undefined) {
         borderSetter.prev_elem.style.border = "0px solid red"
    }
    borderSetter.prev_elem = elem
    elem.style.border = "3px solid grey"

 }
 function FormInformation(FormId, SubjectId, DescribeId){
    let subject = document.forms[FormId].elements[SubjectId].value
    let desrc = document.forms[FormId].elements[DescribeId].value
    if((!desrc) && (!subject)){
        alert(`${"The letter was sent!"}\n${"No subjest"}\n${"No description"}`);
        return false;
    }
    if(!subject){
        alert(`${"The letter was sent!"}\n${"No subjest"}\n${"Descripstion: "+desrc}`);
        return false;
    }
    
    if(!desrc){
        alert(`${"The letter was sent!"}\n${"Subject:"+subject}\n${"No description"}`);
        return false;
    }
    
    alert(`${"The letter was sent!"}\n${"Subject: "+subject}\n${"Description: "+desrc}`)
    return false;
}
