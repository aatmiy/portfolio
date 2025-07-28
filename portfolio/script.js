document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    if (link.href && !link.href.includes('#')) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      setTimeout(() => {
        window.location.href = link.href;
      }, 300); // Match transition duration
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = link.getAttribute("href");
    // Ignore anchor links and external links
    if (href && !href.startsWith('#') && !href.startsWith('http')) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      setTimeout(() => {
        window.location.href = href;
      }, 300); // Match CSS transition time
    }
  });
});

  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Remove when out of view so it re-triggers on scroll up
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    observer.observe(section);
  });



