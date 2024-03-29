document.getElementById("viewportWidth").textContent
  = window.innerWidth + "px";

var nWindow;

function OnClick() {
  nWindow = window.open();
  nWindow.document.write("<h1>This is new windown</h1>");
  nWindow.document.write("<button id='closeWindown'>Close New Window</button>");
}

document.querySelector("#openWindowBtn").addEventListener.OnClick();

