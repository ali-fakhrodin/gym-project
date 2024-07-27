const $ = document

const dietBox = $.querySelector('.diet-box')
const exersiseBox = $.querySelector('.exersise-box')

const toggleCont = $.querySelector('.home-toggles')
const dietToggle = $.querySelector('.diet-toggle')
const exersiseToggle = $.querySelector('.exersise-toggle')
const toggleXIcon = $.querySelector('.toggle-x-i')

const scrollHightLine = window.getComputedStyle($.body, '::before')

// ---------------------------- Type-writer ----------------------------

let mainTwriterTxt = document.querySelector('.section-top h1');

let typewriter = new Typewriter(mainTwriterTxt, {
     loop: true,
     delay: 25,
     deleteSpeed: 15
});

typewriter
     .pauseFor(500)
     .typeString(`دریافت آنلاین <mark style="font-size: 2.6rem;">برنامه غذایی</mark>
          &nbsp; و &nbsp; <mark style="font-size: 2.6rem;">بدنسازی</mark> + پشتیبانی رایگان`)
     .pauseFor(2000)
     .deleteChars(15)
     .changeDelay(260)
     .typeString(`VIP`)
     .pauseFor(2000)
     .start();

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