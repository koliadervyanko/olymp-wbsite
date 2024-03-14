const navBiography = document.getElementById("navBiography");
const biographyTitle = document.getElementById("biographyTitle");
const biographyEducationTitle = document.getElementById(
  "biographyEducationTitle"
);
const hint = document.getElementById("hint");
const navBiographyEducation = document.getElementById("navBiographyEducation");
const navBiographyFamily = document.getElementById("navBiographyFamily");
const biographyFamilyTitle = document.getElementById("biographyFamilyTitle");
const inventionsTitle = document.getElementById("inventionsTitle");
const navInventions = document.getElementById("navInventions");

// functions
const hideHint = () => {
  hint.style.opacity = "0%";
  setTimeout(() => {
    hint.style.visibility = "hidden";
  }, 300);
};

const scrollToElem = (element, offset) => {
  const yOffset = -offset;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
////////////////////////////////////////////////////////////

// scroll to
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

////////////////////////////////////////////////////////////

// show or hide elem on hover
navBiography.addEventListener("mouseenter", () => {
  hint.style.opacity = "100%";
  hint.style.visibility = "visible";
});

navBiography.addEventListener("mouseleave", () => {
  if (!hint.matches(":hover")) {
    hideHint();
  }
});
hint.addEventListener("mouseleave", () => {
  if (!navBiography.matches(":hover")) {
    hideHint();
  }
});
