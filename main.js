var collapsible = document.getElementsByClassName("collapsible");
var index;

for (index = 0; index < collapsible.length; index++) {
    collapsible[index].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}