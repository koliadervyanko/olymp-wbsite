const navBiography = document.getElementById("navBiography");
const biographyTitle = document.getElementById("biographyTitle");

navBiography.addEventListener("click", () => {
  const yOffset = -20;
  const y =
    biographyTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
});
