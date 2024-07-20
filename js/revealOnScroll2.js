document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});