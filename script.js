document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector('.progress-bar');
    const branches = document.querySelectorAll('.branch');
    const contentSections = document.querySelectorAll('.content-section');
    const sliders = document.querySelectorAll('.slider');

    setTimeout(() => {
        progressBar.style.width = '100%';

        progressBar.addEventListener('transitionend', () => {
            // Oscurecer la imagen de fondo
            document.body.classList.add('darken-background');

            branches.forEach((branch, index) => {
                setTimeout(() => {
                    const branchLine = branch.querySelector('.branch-line');
                    const card = branch.querySelector('.card');

                    branchLine.style.height = '50px';
                    branchLine.addEventListener('transitionend', () => {
                        card.style.opacity = 1;
                        card.style.transform = branch.classList.contains('branch-up') ? 'translateY(-184px)' : 'translateY(0px)';
                    });

                    if (index === branches.length - 1) {
                        const footer = document.querySelector('footer');
                        footer.style.visibility = 'visible';
                        footer.style.opacity = 1;
                    }
                }, index * 1);
            });
        });
    }, 100);

    branches.forEach(branch => {
        branch.addEventListener("click", function () {
            const activeContentId = this.getAttribute("data-content");
            contentSections.forEach(section => {
                section.classList.remove('visible');
                section.style.display = "none"; 
            });
            const activeSection = document.getElementById(activeContentId);
            if (activeSection) {
                activeSection.style.display = "block"; 
                setTimeout(() => {
                    activeSection.classList.add('visible'); 
                }, 10); 
            }
        });
    });

    sliders.forEach(slider => {
        let index = 0;
        const slides = slider.querySelectorAll('.slide');
        const nextButton = slider.querySelector('.next');
        const prevButton = slider.querySelector('.prev');

        nextButton.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            updateSlider();
        });

        prevButton.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        });

        function updateSlider() {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(-${index * 100}%)`;
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    this.reset();
});
