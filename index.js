let menuIcon = document.querySelector(".menu");
let navSmall = document.querySelector(".hero nav.nav-sm");
let header = document.querySelector(".hero header");
let headerContent = document.querySelector(".hero .header-content");

menuIcon.onclick = function () {
  if (navSmall.style.opacity == "0" && navSmall.style.visibility == "hidden") {
    navSmall.style.opacity = "1";
    navSmall.style.visibility = "visible";
  } else {
    navSmall.style.opacity = "0";
    navSmall.style.visibility = "hidden";
  }
};

document.body.onscroll = function () {
  if (window.scrollY == 0) {
    header.classList.remove("js-style1");
    headerContent.classList.remove("js-style2");
  } else {
    header.classList.add("js-style1");
    headerContent.classList.add("js-style2");
  }
};

document.querySelector(".video .circle img").onclick = function () {
  document.querySelector("video").style.display = "inline-block";
  this.style.display = "none";
  document.querySelector("video").play();
};

document.querySelector(".home-4 a.show").onclick = function () {
    document.querySelector(".home-4 div.filter").remove()
    document.querySelector(".home-4 .img-group-sm ").style.overFlow="none"
    document.querySelector(".home-4 .img-group-sm ").style.height="auto"
    this.remove()
    document.querySelector(".home-4 button.hidden").style.display="inline-block"

};
