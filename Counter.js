var counter = 0;
var dom;

function getElementBtnIncrement() {

    document.getElementById('counter').addEventListener("click", increment);

}
function increment() {
  dom = document.getElementById("text");
    dom.innerHTML = "Count = " + counter++;
}

window.addEventListener("load", getElementBtnIncrement, false);
