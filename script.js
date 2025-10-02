const navLinks = document.querySelectorAll(".aside .nav li a, .btn.hire-me");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20, // small offset for header
          behavior: "smooth"
        });
      }

      // Update active link if it's from nav
      if (link.closest(".nav")) {
        document
          .querySelectorAll(".aside .nav li a")
          .forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

/* ===== Highlight Active Nav on Scroll ===== */
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".aside .nav li a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ===== Toggle Aside Navigation (Mobile) ===== */
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

if (navToggler) {
  navToggler.addEventListener("click", () => {
    aside.classList.toggle("open");
    navToggler.classList.toggle("open");
  });
}
document.querySelectorAll('.atlas-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var info = btn.getAttribute('data-info');
        var box = document.getElementById('atlas-info-box');
        box.textContent = info;
        box.style.display = 'block';
    });
});