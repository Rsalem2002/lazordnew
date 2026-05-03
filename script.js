 
// img
const images = document.querySelectorAll("img");

window.addEventListener("scroll", () => {
    images.forEach(img => {
        const top = img.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            img.classList.add("show");
        }
    });
});
// accordion2 home الاسئلة الشائعة 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
// accordion1  قم بتحويل ممارساتك
const workflowItems = document.querySelectorAll(".workflow-item");

workflowItems.forEach(item => {
    const question = item.querySelector(".workflow-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
//why
const animatedElements = document.querySelectorAll(".reveal, .text-reveal");

function showElements() {
    animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("load", showElements);
window.addEventListener("scroll", showElements);
window.addEventListener("load", () => {
    textElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
});

//pricing
const pricingItems = document.querySelectorAll(".pricing-item");

pricingItems.forEach(item => {
    const header = item.querySelector(".pricing-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
//learning
const learningFaqItems = document.querySelectorAll(".learning-faq-item");

learningFaqItems.forEach(item => {
    const question = item.querySelector(".learning-faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
 
//toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
