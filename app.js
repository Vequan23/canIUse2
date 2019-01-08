import canIuseUtil from './canIuseUtil.js'

const wrapperEl = document.querySelector('.wrapper')
const formEl = wrapperEl.querySelector('.form');
const version = formEl.getAttribute('data-version');
const init = () => {
    canIuseUtil(wrapperEl, {
        version

    })
}

init()