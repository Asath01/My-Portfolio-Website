// typing animation

const words = ["Web Developer", "Frontend Developer", "C# Developer"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  let display = document.getElementById("typing");

  if (!isDeleting) {
    display.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    display.textContent = currentWord.substring(0, j--);
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) i = 0;
    }
  }

  setTimeout(type, 100);
}

function hireMe() {
  let phone = "+94711310848";

  let message =
    "Hello, I saw your portfolio website and I am interested in your web development services.";

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
type();

// particles background

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  },
});
