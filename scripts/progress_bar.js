document.addEventListener('DOMContentLoaded', function() {
    const progressIndicator = document.querySelector('.progress-indicator');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        progressIndicator.style.top = `calc(${scrollPercentage}% - 10px)`;
    });
});