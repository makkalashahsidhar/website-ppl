
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Filter properties
const filters = document.querySelectorAll(".filter");
const properties = document.querySelectorAll(".property-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(button => button.classList.remove("active"));
    filter.classList.add("active");

    const selectedType = filter.dataset.type;

    properties.forEach(property => {
      const matches =
        selectedType === "all" ||
        property.dataset.type === selectedType;

      property.hidden = !matches;
    });
  });
});

// Property enquiry buttons
document.querySelectorAll(".enquire").forEach(button => {
  button.addEventListener("click", () => {
    const propertyName = button.dataset.property;
    document.querySelector("#interest").value =
      propertyName.includes("Arcade") ? "Retail" :
      propertyName.includes("Hub") ? "Industrial" : "Office";

    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });

    document.querySelector("#name").focus({
      preventScroll: true
    });
  });
});

// Contact form demonstration
document.querySelector("#enquiry-form").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const interest = document.querySelector("#interest").value;

  if (!name || !email || !interest) return;

  document.querySelector("#form-message").textContent =
    `Thank you, ${name}. Your enquiry has been prepared successfully.`;

  event.target.reset();
});

// Automatic copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();
