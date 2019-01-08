import canIuseUtil from './canIuseUtil.js'

const buttonEl = document.querySelector('.js-optimisticSearchButton')
const inputEl = document.querySelector('.js-optimistic-input')


const optimistic = () => {

    const init = () => {
        canIuseUtil({
            buttonEl,
            inputEl,
            version: 'optimistic'
        })
    }

    init()

}


export default optimistic
