
document.getElementById("demoBtn").addEventListener("click", function() {
  const demoSection = document.getElementById("demo");
  demoSection.scrollIntoView({ behavior: "smooth" });

  // Auto-play video after scroll
  setTimeout(() => {
    const video = document.getElementById("demoVideo");
    if (video) {
      video.play();
    }
  }, 800); // delay matches scroll time
});

