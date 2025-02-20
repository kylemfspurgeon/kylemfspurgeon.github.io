// Example of a simple interactive element: a "back to top" button.
document.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
