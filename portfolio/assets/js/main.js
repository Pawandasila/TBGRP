/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 300,
    reset: true
});

// blink effect 
var roles = ["Web Developer", "Web Designer"];
var roleIndex = 0;
var textIndex = 0;
var roleTextElement = document.getElementById('roleText');
var cursorElement = document.getElementById('cursor');

function updateRoleText() {
    var currentRole = roles[roleIndex];
    roleTextElement.textContent = currentRole.substring(0, textIndex);

    if (textIndex < currentRole.length) {
        textIndex++;
    } else {
        setTimeout(deleteRoleText, 1000);
    }
}

function deleteRoleText() {
    if (textIndex > 0) {
        textIndex--;
        setTimeout(deleteRoleText, 100); 
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(updateRoleText, 1000);
    }
}
updateRoleText();
setInterval(updateRoleText, 250);

var select = document.getElementById("Country");

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Sort the data alphabetically by country name
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        // Add "Select Country" option as the first option
        var defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Select Country";
        defaultOption.selected = true;
        defaultOption.disabled = true;
        select.add(defaultOption);

        // Add options to the select element based on the sorted data
        data.forEach(country => {
            var option = document.createElement("option");
            option.value = country.cca2.toLowerCase(); // Use country code as value
            option.text = country.name.common;
            select.add(option);
        });
    })
    .catch(error => console.error("Error fetching country data:", error));

    var stateSelect = document.getElementById("state");

   

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

