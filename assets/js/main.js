const headerBarButton = document.querySelector(".header__bar");
const sidebarElement = document.querySelector(".sidebar");
const overlayElement = document.querySelector(".overlay");
const goToTopButton = document.querySelector(".go-to-top");
function showSidebar() {
  sidebarElement && (sidebarElement.style.transform = `translateX(0%)`);
  overlayElement && (overlayElement.style.display = "block");
}
function hideSidebar() {
  sidebarElement && (sidebarElement.style.transform = `translateX(-200%)`);
  overlayElement && (overlayElement.style.display = "none");
}
if (headerBarButton) {
  headerBarButton.addEventListener("click", showSidebar);
}
window.addEventListener("click", (e) => {
  if (e.target.matches(".overlay")) {
    hideSidebar();
  } else if (e.target.matches(".go-to-top")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
window.addEventListener("scroll", function () {
  const height = this.scrollY > 200;
  goToTopButton && goToTopButton.classList.toggle("is-show", height);
});
