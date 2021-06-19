var scene = new Scene({
    ".searchbox": {
        "0%": "width: 50px",
        "70%": "width: 300px",
    },
    ".line": {
        "30%": "width: 0%",
        "100%": "width: 100%",
    }
}, {
    duration: 1,
    easing: Scene.EASE_IN_OUT,
    selector: true,
}).exportCSS();

scene.setTime(0);
var toggle = false;

document.querySelector(".submit").addEventListener("click", function() {
    toggle = !toggle;
    scene.setDirection(toggle ? "normal" : "reverse");
    scene.play();
});