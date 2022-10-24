var accordion = document.getElementsByClassName("content-box");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight === "present") {
            content.style.maxHeight = "none";
        } else {
            content.style.maxHeight = "present";
        }
    });
}