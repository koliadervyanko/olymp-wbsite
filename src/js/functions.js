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

export const setCount = (selected, spans) => {
  setTimeout(() => {
    const count = document.getElementById("count");
    count.textContent = `${spans.length ? selected : "0"}/${spans.length}`;
  }, 300);
};

export const setFirstSelected = (selected, spans, scroll) => {
  setCount(selected, spans);
  if (spans) {
    spans[0].classList.add("selectedHighlight");
    spans[0].style.backgroundColor = "orange";
    if (scroll) {
      scrollToElem(spans[0], 15);
    }
  }
};

export const clearSelectedHighlight = () => {
  const hightLightSpan = document.querySelector(".selectedHighlight");
  hightLightSpan.classList.remove("selectedHighlight");
  hightLightSpan.style.backgroundColor = "";
};

export const setSelected = (elem) => {
  elem.classList.add("selectedHighlight");
  elem.style.backgroundColor = "orange";
};
