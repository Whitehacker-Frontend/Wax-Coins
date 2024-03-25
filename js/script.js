


const themes = {
    light: {
        '--bg': 'rgba(13, 0, 27, 1)',
        '--heading': 'rgba(246, 243, 249, 1)',
        '--text':' rgba(220, 208, 233, 1)',
        '--night': 'rgba(40, 26, 55, 1)',
    },
    dark: {
    '--bg': 'rgba(236, 230, 243, 1)',
    '--heading': 'rgba(40, 26, 55, 1)',
    '--text': 'rgba(78, 71, 86, 1)',
    '--night': 'rgba(246, 243, 249, 1)',
    }
  }

const btnTheme = document.querySelector('.night')
let nightImg = document.querySelector('.night-img')
let logo = document.querySelector('.logo')

btnTheme.addEventListener('click', selectTheme)

function selectTheme() {
  if (btnTheme.classList.contains('light')){
    btnTheme.classList.remove('light')
    btnTheme.classList.add('dark')
    btnTheme.setAttribute('data-theme', 'dark')
    nightImg.src = './img/light.png'
    logo.src = './img/log-light.png'

  }else{
    btnTheme.classList.remove('dark')
    btnTheme.classList.add('light')
    btnTheme.setAttribute('data-theme', 'light')
    logo.src = './img/logo-night.png'
    nightImg.src = './img/night.png'
  }
  const themeAttr = btnTheme.getAttribute('data-theme');
  const themeObj = themes[themeAttr];
  let themeStr = ``;
  for (let key in themeObj){
    themeStr += `${key}: ${themeObj[key]};`
  }
  document.documentElement.style = themeStr;
}
