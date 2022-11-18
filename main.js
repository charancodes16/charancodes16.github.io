let slideup = document.getElementById("slide-up-id");
let nonScroll = document.getElementById("home");
function slideUpWork()
{
    slideup.classList.add("slide-up");
    nonScroll.classList.add("non-scroll");
}

function slideDown()
{
    slideup.classList.remove("slide-up");
    nonScroll.classList.remove("non-scroll");
}

