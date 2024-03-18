export const hideHint = () => {
  hint.style.opacity = "0%";
  setTimeout(() => {
    hint.style.visibility = "hidden";
  }, 300);
};

export const scrollToElem = (element, offset) => {
  const yOffset = -offset;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const setCount = (selected, elements) => {
  setTimeout(() => {
    const count = document.getElementById("count");
    count.textContent = `${elements.length ? selected : "0"}/${
      elements.length
    }`;
  }, 300);
};
