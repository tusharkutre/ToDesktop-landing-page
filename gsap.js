// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Animate the title on window load
window.onload = function() {
    gsap.from("#companies-container", {
        y: 100,
        duration: 0.5,
        // Uncomment the following line if you want to add rotation
    });
};