
var tag = document.createElement("input");
// var text = document.createTextNode("AAA");
// tag.appendChild(text);
tag.setAttribute("type", "image");
tag.setAttribute("id", "googler-image");
tag.setAttribute("src", "https://raw.githubusercontent.com/flaxinger/Googler-demo/master/images/icon_128.svg");
// tag.style.cssText += "padding-right: 13px";
// var element_padding = document.getElementsByClassName("Tg7LZd")[0];
// element_padding.
// setAttribute("padding-right", "0px");
const element_padding = document.querySelector('.Tg7LZd');
if(element_padding != null) element_padding.style.cssText += "padding-right:0px";
var element = document.getElementsByClassName("RNNXgb")[0];

if(element!=null) element.appendChild(tag);

{/* <button class="Tg7LZd" jsname="Tg7LZd" aria-label="Google Search" type="submit" data-ved="0ahUKEwi5-Y_wpZrzAhU5yYsBHX50CIUQ4dUDCA4"> 
    <div class="zgAlFc"> 
        <span class="z1asCe MZy1Rb">
        </span>
    </div>
</button> */}