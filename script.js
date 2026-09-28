const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

if (menu && nav) {

  menu.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menu.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation"
        : "Open navigation"
    );

  });

}


/* Close mobile menu after selecting a link */

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      nav?.classList.remove("open");

      menu?.setAttribute(
        "aria-expanded",
        "false"
      );

      menu?.setAttribute(
        "aria-label",
        "Open navigation"
      );

    });

  });


/* Current year */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* Smooth reveal animation */

const revealItems = document.querySelectorAll(
  ".project, .timeline-item, .impact-card, .skill-card"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealItems.forEach((item) => {

  item.classList.add("reveal");

  observer.observe(item);

});
