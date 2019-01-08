import features from './features.js'

const canIuseUtil = (options = {}) => {
    const defaults = {
        resultsEl: document.querySelector('.results'),
        features: features
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
        if (submittedFeature === 'flexbox') {
            settings.resultsEl.textContent = 'Yes, you golden god';
        } else {
            checkIfFeatureExists(submittedFeature);
        }
    };

    const checkIfFeatureExists = submittedFeature => {
        const featureFound = settings.features.includes(submittedFeature);

        if (featureFound && settings.version === 'optimistic') {
            settings.resultsEl.textContent = 'Full Support Boss';
        } else if (featureFound && settings.version === 'pessimistic') {
            settings.resultsEl.textContent = 'No Support Boss';
        } else {
            settings.resultsEl.textContent = 'Feature not found';
        }
    };
    init();
};
export default canIuseUtil;
