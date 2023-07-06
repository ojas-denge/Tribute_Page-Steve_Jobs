document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });
  
    scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });