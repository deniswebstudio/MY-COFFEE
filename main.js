// =====================
// Sticky Header
// =====================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

if(window.innerWidth > 768){

    window.addEventListener("scroll", () => {

        const offset =
        window.pageYOffset;

        heroImage.style.transform =
        `translateY(${offset * 0.3}px)`;

    });

}


// =====================
// Reveal Animation
// =====================

const revealElements = document.querySelectorAll(
    ".about, .menu-category, .gallery-item, .feature-card, .review-card, .contact-item, .stat-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =====================
// Counter Animation
// =====================

const counters = document.querySelectorAll(".stat-card h3");

const startCounter = () => {

    counters.forEach(counter => {

        const originalText = counter.innerText;

        if (
            !originalText.includes("+")
        ) return;

        const target =
            parseInt(originalText);

        let count = 0;

        const updateCounter = () => {

            count += Math.ceil(target / 80);

            if (count < target) {

                counter.innerText = count + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

startCounter();


// =====================
// Gallery Lightbox
// =====================

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img =
        document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(
                lightbox.firstChild
            );

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// =====================
// Smooth Menu Active Link
// =====================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// =====================
// Hero Parallax
// =====================

const heroImage =
document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    const offset =
    window.pageYOffset;

    heroImage.style.transform =
    `translateY(${offset * 0.3}px)`;

});


// =====================
// Back To Top Button
// =====================

const topButton =
document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.classList.add("scroll-top");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});