/* ----- NAVIGATION BAR FUNCTION ----- */
const menuBtn = document.getElementById("myNavMenu");
const closebtn = document.querySelector(".nav-menu-btn");
function myMenuFunction() {
  if (menuBtn) {
    if (menuBtn.classList.contains("responsive-nav")) {
      menuBtn.classList.remove("responsive-nav");
      closebtn.innerHTML = `<i class="uil uil-bars"></i>`;
    } else {
      menuBtn.classList.add("responsive-nav");
      closebtn.innerHTML = `<i class="uil uil-times"></i>`;
    }
  } else {
    console.error("Menu element not found!");
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTo > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(255, 0, 0, 0.83)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    console.log(navHeader.style.boxShadow);
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* span Progress bar  */
document.querySelectorAll(".skills-list span").forEach((span) => {
  const percentage = parseInt(
    getComputedStyle(span).getPropertyValue("--per"),
    10
  );

  if (percentage <= 25) {
    span.style.setProperty("--progress-color", "red");
    span.style.setProperty("--span-color", "#000");
  } else if (percentage <= 50) {
    span.style.setProperty("--progress-color", "orange");
    span.style.setProperty("--span-color", "#000");
  } else if (percentage <= 75) {
    span.style.setProperty("--progress-color", "yellowgreen");
    span.style.setProperty("--span-color", "#000");
  } else {
    span.style.setProperty("--progress-color", "green");
    span.style.setProperty("--span-color", "#fff");
  }

  span.addEventListener("mouseenter", () => {
    span.style.color = "transparent";
  });

  span.addEventListener("mouseleave", () => {
    span.style.color = "inherit";
  });
});

/* MODAL  */
// Open the modal
function openModel(image) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImage.src = image.src;
  caption.textContent = image.alt;
  caption.style.textAlign = "right";
  caption.style.paddingInline = "100px";
  caption.style.color = "#fff";

  document.body.style.overflow = "hidden";
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll(".sec");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// modal close after link clicked
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menuBtn.classList.remove("responsive-nav");
    closebtn.innerHTML = `<i class="uil uil-bars"></i>`;
  })
);

// Mail to
function hireMe() {
  const email = "srinivasanganesh123@gmail.com";
  const subject = "Job Opportunity";
  const body = "Hello I would like to hire you. ";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

function sendMail() {
  const name = document.getElementById("cname").value || "";
  const email = document.getElementById("cemail").value || "";
  const message = document.getElementById("cmessage").value || "";

  const subject = `New Message from ${name} `;
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

  window.location.href = `mailto:srinivasanganesh123@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
}

// Resume
function downloadResume() {
  const resumeUrl = "http://linkedin.com/in/gane-an";
  window.open(resumeUrl, "_blank");
}
