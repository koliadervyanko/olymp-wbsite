// todo: on click on search icon
import {
  clearSelectedHighlight,
  hideHint,
  setCount,
  setFirstSelected,
  setSelected,
} from "./functions.js";
import { scrollToElem } from "./functions.js";
const navBiography = document.getElementById("navBiography");
const body = document.querySelector("body");
const hint = document.getElementById("hint");
const navSearchInput = document.getElementById("navSearchInput");
const logo = document.getElementById("logo");
const upBtn = document.getElementById("upBtn");
const navSearch = document.getElementById("navSearch");
const searchIcon = document.getElementById("searchIcon");
const elementsToSearch = [
  ...document.querySelectorAll("h1, p, span, h2, h3, h4, li"),
].filter((element) => !element.closest("nav"));
let arrowDown = null;
let arrowUp = null;

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.altKey && event.code === "KeyF") {
    navSearchInput.focus();
  }
});
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
searchIcon.addEventListener("click", () => {
  navSearchInput.focus();
});
let created = false;
navSearchInput.addEventListener("input", () => {
  const searchText = navSearchInput.value.trim();
  if (searchText === "") {
    clearHighlights();
    navSearchInput.style.width = "";
    const arrowsElement = document.querySelector("#arrows");

    arrowsElement.style.opacity = 0;

    arrowsElement.remove();
    created = false;
    return;
  }
  navSearchInput.style.width = "190px";

  const searchRegex = new RegExp(
    searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "gi"
  );
  let elements = [];
  let spans =
    // highlight
    elementsToSearch.forEach((element) => {
      const text = element.textContent;
      let newText = text.replace(
        searchRegex,
        `<span class="highlight" style="font-weight: ${
          window.getComputedStyle(element).fontWeight
        };font-size: ${window.getComputedStyle(element).fontSize}">$&</span>`
      );
      element.innerHTML = newText;
      if (element.innerHTML.includes('class="highlight"')) {
        elements.push(element);
      }
    });
  spans = document.querySelectorAll("span.highlight");
  // create arrow and count
  let selected = 1;
  if (!created) {
    created = true;
    setTimeout(() => {
      let actHtml = `<div class="nav-search-menu" style="opacity: 0%" id="arrows">
      <p id="count">${spans.length ? selected : "0"}/${spans.length}</p>
      <div class="nav-search-menu-arrows">
        <i class="fa-solid fa-chevron-up" id="arrowUp"></i>
        <i class="fa-solid fa-chevron-down" id="arrowDown"></i>
      </div>
      </div>`;
      navSearch.insertAdjacentHTML("beforeend", actHtml);
    }, 300);

    setTimeout(() => {
      const arrows = document.getElementById("arrows");
      arrows.style.opacity = "1";
    }, 400);
    setTimeout(() => {
      arrowDown = document.getElementById("arrowDown");
      arrowUp = document.getElementById("arrowUp");
    }, 300);
  }
  // change count
  if (created) {
    setCount(selected, spans);
  }
  // set first element
  setFirstSelected(selected, spans, false);
  setTimeout(() => {
    if (created) {
      arrowDown.addEventListener("click", () => {
        if (spans.length) {
          // todo
          if (selected === spans.length) {
            // clear highlight
            const highlighted = document.querySelector(".selectedHighlight");
            if (highlighted) {
              highlighted.classList.remove("selectedHighlight");
              highlighted.style.backgroundColor = "";
            }
            selected = 1;
            setFirstSelected(selected, spans, true);
          } else {
            // clear highlight
            const highlighted = document.querySelector(".selectedHighlight");
            if (highlighted) {
              highlighted.classList.remove("selectedHighlight");
              highlighted.style.backgroundColor = "";
            }

            selected += 1;
            // use selected - 1 because array counts from 0
            const currentElementSpan = spans[selected - 1];
            if (currentElementSpan) {
              setCount(selected, spans);

              currentElementSpan.classList.add("selectedHighlight");
              currentElementSpan.style.backgroundColor = "orange";

              scrollToElem(currentElementSpan, 15);
            }
          }
        }
      });
      arrowUp.addEventListener("click", () => {
        if (spans.length) {
          if (selected === 1) {
            selected = spans.length;
            setCount(selected, spans);
            // set last element
            const lastElementSpan = spans[spans.length - 1];
            // todo
            clearSelectedHighlight();
            if (lastElementSpan) {
              setSelected(lastElementSpan);
            }
            scrollToElem(lastElementSpan, 15);
          } else {
            // *clear highlight
            clearSelectedHighlight();
            selected -= 1;
            // use selected - 1 because array counts from 0
            const currentElementSpan = spans[selected - 1];
            if (currentElementSpan) {
              setCount(selected, spans);
              setSelected(currentElementSpan);
              scrollToElem(currentElementSpan, 15);
            }
          }
        }
      });
    }
  }, 300);
});

logo.addEventListener("click", () => {
  location.reload();
});

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 150) {
    upBtn.style.opacity = "100%";
    upBtn.style.visibility = "visible";
  } else {
    upBtn.style.opacity = "0%";
    upBtn.style.visibility = "hidden";
  }
});
upBtn.addEventListener("click", () => {
  scrollToElem(body, 0);
});
function clearHighlights() {
  elementsToSearch.forEach((element) => {
    element.innerHTML = element.textContent;
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Your code to handle the Escape key press goes here
    navSearchInput.blur();
    navSearchInput.value = "";
    clearHighlights();
    navSearchInput.style.width = "";
    const arrowsElement = document.querySelector("#arrows");

    if (arrowsElement) {
      arrowsElement.style.opacity = 0;

      arrowsElement.remove();
    }
    created = false;
  }
});
