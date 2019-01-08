import features from './features.js';

const canIuseUtil = (wrapperEl, options = {}) => {
    const defaults = {
        resultsEl: wrapperEl.querySelector('.results'),
        buttonEl: wrapperEl.querySelector('.js-search-button'),
        inputEl: wrapperEl.querySelector('.js-input'),
        formEl: wrapperEl.querySelector('.form'),
        features,
        goldenFeature: 'flexbox',
        goldenFeatureMessage: 'Yes, you golden god',
        featureNotFoundMessage: 'Feature not found'
    };

    const settings = { ...defaults, ...options };

    const init = () => {
        bindEvents();
    };

    const bindEvents = () => {
        settings.buttonEl.addEventListener('click', handleClick);
    };

    const handleClick = e => {
        const submittedFeature = settings.inputEl.value.toLowerCase();
        e.preventDefault();
        checkIfFeatureExists(submittedFeature);
    };

    const checkIfFeatureExists = submittedFeature => {
        const featureFound = settings.features.includes(submittedFeature);
        const featureFoundMessage = settings.formEl.getAttribute('data-message');

        if (submittedFeature === settings.goldenFeature) {
            settings.resultsEl.textContent = settings.goldenFeatureMessage;
        } else if (featureFound) {
            settings.resultsEl.textContent = featureFoundMessage;
        } else {
            settings.resultsEl.textContent = settings.featureNotFoundMessage;
        }
    };
    init();
};
export default canIuseUtil;
