const biographyTitle = document.getElementById("biographyTitle");
const biographyEducationTitle = document.getElementById(
  "biographyEducationTitle"
);
const navBiographyEducation = document.getElementById("navBiographyEducation");
const navBiographyFamily = document.getElementById("navBiographyFamily");
const navInventions = document.getElementById("navInventions");
const navAwards = document.getElementById("navAwards");

navBiography.addEventListener("click", () => {
  scrollToElem(biographyTitle, 20);
});

navBiographyEducation.addEventListener("click", () => {
  scrollToElem(biographyEducationTitle, 10);
});

navBiographyFamily.addEventListener("click", () => {
  scrollToElem(biographyFamilyTitle, 10);
});

navInventions.addEventListener("click", () => {
  scrollToElem(inventionsTitle, 10);
});

navAwards.addEventListener("click", () => {
  scrollToElem(awardsTitle, 10);
});
