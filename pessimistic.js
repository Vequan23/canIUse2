import canIuseUtil from './canIuseUtil.js'

const buttonEl = document.querySelector('.js-pessimisticSearchButton')
const inputEl = document.querySelector('.js-pessimistic-input')


const pessimistic = () => {

    const init = () => {
        canIuseUtil({
            buttonEl,
            inputEl,
            version: 'pessimistic'
        })
    }

    init()

}


export default pessimistic
