import canIuseUtil from './canIuseUtil.js'
import features from './features.js';


const wrapperEl = document.querySelector('.wrapper')
const init = () => {
    canIuseUtil(wrapperEl, {
        features
    })
}

init()