import canIuseUtil from './canIuseUtil.js'

const wrapperEl = document.querySelector('.wrapper')
const init = () => {
    canIuseUtil(wrapperEl)
}

init()