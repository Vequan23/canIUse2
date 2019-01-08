import features from './features.js';

const canIuseUtil = (wrapperEl, options = {}) => {

    const defaults = {
        resultsEl: wrapperEl.querySelector('.results'),
        buttonEl: wrapperEl.querySelector('button'),
        inputEl: wrapperEl.querySelector('input'),
        features: features,
        flexboxMessage: 'Yes, you golden god',
        noSupportMessage: 'No Support Boss',
        fullSupportMessage: 'Full Support Boss',
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

        if (submittedFeature === 'flexbox') {
            settings.resultsEl.textContent = settings.flexboxMessage;
        }
        else if (featureFound && settings.version === 'optimistic') {
            settings.resultsEl.textContent = settings.fullSupportMessage;
        } else if (featureFound && settings.version === 'pessimistic') {
            settings.resultsEl.textContent = settings.noSupportMessage;
        } else {
            settings.resultsEl.textContent = settings.featureNotFoundMessage;
        }
    };
    init();
};
export default canIuseUtil;
