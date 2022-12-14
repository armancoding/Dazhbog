let tabButtons = document.querySelectorAll(".headMenu button");
let panels = document.querySelectorAll(".tabs")

function showPanel(panelIndex)
{
    panels.forEach(function(node)
    {
        node.style.display="none";
    });
    panels[panelIndex].style.display="block";

}

showPanel(0);

let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



let icon = document.getElementById("icon");
let Logo = document.getElementById("Logo")
let icon1 = document.getElementById("a");
let icon2 = document.getElementById("b");
let icon3 = document.getElementById("c");
let nav = document.getElementById('nav');
let blue = document.getElementById("blue");

if(window.innerWidth > 500)
{
    icon.style.display="none";
    Logo.style.display="none";
}

window.addEventListener('resize', function() 
{
    if(window.innerWidth > 500)
    {
        icon.style.display="none";
        Logo.style.display="none";

    }
    else
    {
        icon.style.display="inline";
        Logo.style.display="inline";
    }
});

icon.addEventListener('click', function() 
{
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    //blue.classList.toggle('slide');
});