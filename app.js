import canIuseUtil from './canIuseUtil.js'
import optimistic from './optimistic.js'
import pessimistic from './pessimistic.js';


const wrapperEl = document.querySelector('.wrapper')
const formEl = wrapperEl.querySelector('.form');
const version = formEl.getAttribute('data-version');
const init = () => {
    if (version === 'optimistic') {
        optimistic();
    }
    else {
        pessimistic();
    }
}

init()