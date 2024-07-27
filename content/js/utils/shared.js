// ------------------------------------- Vars -------------------------------------
const $ = document
const headerMenuNav = $.querySelector('.header-menu-nav')
const barIcon = $.querySelector('.header-bar-i')
const moonIcon = $.querySelector('.moon-i')
const bodyElem = $.querySelector('body')
const mainElem = $.querySelector('main')
const topFXImg = $.querySelectorAll('.img-fx')

let isDark = localStorage.getItem('isDark')

// ------------------------------------- Start Funcs -------------------------------------
window.closeHeaderMenu = () => {
     headerMenuNav.classList.remove('mini-menu')
     barIcon.firstElementChild.className = 'fa-solid fa-bars fa-2xl'
}

function makeDarkOrLightPage() {
     bodyElem.classList.toggle('dark')
     mainElem.classList.toggle('dark')
     
     if (bodyElem.classList.contains('dark')) {
          isDark = true

          topFXImg.forEach(fx => fx.setAttribute('src', 'content/img/fx/01-dark.png'))
          moonIcon.firstElementChild.className = "fa-solid fa-sun fa-2xl"

          localStorage.setItem('isDark', 'true')
     } else {
          isDark = false
          
          topFXImg.forEach(fx => fx.setAttribute('src', 'content/img/fx/01.png'))
          moonIcon.firstElementChild.className = "fa-solid fa-moon fa-2xl"

          localStorage.setItem('isDark', 'false')
     }
}

if (isDark === 'true') {
     bodyElem.classList.toggle('dark')
     mainElem.classList.toggle('dark')
     moonIcon.firstElementChild.className = "fa-solid fa-sun fa-2xl"
     
     topFXImg.forEach(fx => {
          fx.setAttribute('src', 'content/img/fx/01-dark.png')
     })
}
// ------------------------------------- End Funcs -------------------------------------

// ------------------------------------- Start Events -------------------------------------
moonIcon.onclick = makeDarkOrLightPage

barIcon.onclick = () => {
     headerMenuNav.classList.toggle('mini-menu')

     if (headerMenuNav.classList.contains('mini-menu')) {
          barIcon.firstElementChild.className = 'fa-solid fa-x fa-2xl'
          console.log('mini');
     } else {
          barIcon.firstElementChild.className = 'fa-solid fa-bars fa-2xl'
     }
}

// Scroll Fx
window.addEventListener('scroll', () => {
     // console.log('scrollY', (window.scrollY));
     // console.log('offsetH', ($.body.offsetHeight));
     // console.log('innerH', (window.innerHeight - 144));

     const windowIn = window.innerHeight - 144
     const newScrollHgt = window.scrollY / ($.body.offsetHeight - windowIn) * 100

     $.body.style.setProperty('--before-height', `${newScrollHgt}%`)
     
})
// ------------------------------------- End Events -------------------------------------