const $ = document

const dietBox = $.querySelector('.diet-box')
const exersiseBox = $.querySelector('.exersise-box')

const toggleCont = $.querySelector('.home-toggles')
const dietToggle = $.querySelector('.diet-toggle')
const exersiseToggle = $.querySelector('.exersise-toggle')
const toggleXIcon = $.querySelector('.toggle-x-i')

const scrollHightLine = window.getComputedStyle($.body, '::before')

// ------------------------------- Events -------------------------------

dietBox.addEventListener('click', () => {
     exersiseToggle.classList.add('hide')
     toggleCont.classList.remove('hide')
     dietToggle.classList.remove('hide')
})

exersiseBox.addEventListener('click', () => {
     dietToggle.classList.add('hide')
     toggleCont.classList.remove('hide')
     exersiseToggle.classList.remove('hide')
})

toggleXIcon.onclick = () => {
     toggleCont.classList.add('hide')
     dietToggle.classList.add('hide')
     exersiseToggle.classList.add('hide')
}
