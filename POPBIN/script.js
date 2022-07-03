const clicks = document.getElementById("count");

let counts = 0;
counts = parseInt(localStorage.getItem("count"));

function openTheMouse(){
    document.body.style = `background-image:url('./openMouse.jpg')`;
    clicks.style = `font-size:58px;`
}
function closeTheMouse(){
    document.body.style = `background-image:url('./closeMouse.jpg')`;
    clicks.style = `font-size:50px;`
}

window.addEventListener("keyup", function countsPlus(){
    counts += 1;    
    clicks.innerText = `${counts}`;
    localStorage.setItem("count", parseInt(counts));
    closeTheMouse();
});
window.addEventListener("keydown", openTheMouse);

window.addEventListener("mouseup", function countsPlus(){
    counts += 1;    
    clicks.innerText = `${counts}`;
    localStorage.setItem("count", parseInt(counts));
    closeTheMouse();
});
window.addEventListener("mousedown", openTheMouse);
