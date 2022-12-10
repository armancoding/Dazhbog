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

