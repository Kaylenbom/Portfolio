/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SHOW MENU =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the blur-header class to the heaader tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_gaq83qf', 'template_3zptbci', '#contact-form', 'zyTiAg0nEhMQVd6rc').then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
    }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
// const scrollUp = () =>{
//     const scrollUp = document.getElementById('scroll-up')
//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
   // reset: true //Animations repeat
})

sr.reveal('.home__data, .home__social, .footer__container')
sr.reveal('about__image, .skills__content', {origin: 'right'})
sr.reveal('about__data, .skills__data', {origin: 'left'})
sr.reveal('services__card, .projects__card', {interval: 100})