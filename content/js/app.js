import './utils/shared.js'

const $ = document
let nowScrollY = null
const headerElem = $.querySelector('header')

// -------------------------------- Events --------------------------------
window.addEventListener('scroll', () => {
     if (Math.floor(window.scrollY) > nowScrollY) {
          headerElem.classList.add('hide-header')
     } else {
          headerElem.classList.remove('hide-header')
     }     
     nowScrollY = window.scrollY
})