running_name = (id)=>{
let area = document.getElementById(id);
let textnode = area.childNodes[0];
let text = textnode.data;
setInterval(() => {
    text = text[text.length-1]+text.substring(0,text.length-1);
    textnode.data = text;
}, 300);
}