import { jsdom } from 'jsdom';
import styles from './fakes/styles';

// JSDOM
const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(win).forEach((k) => {
    if (!win.hasOwnProperty(k)) return;
    if (k in global) return;

    global[k] = window[k];
});

global.navigator = {
    userAgent: 'node.js'
};

// STYLES
function css(module) {
    const fake = module;

    fake.exports = styles;

    return fake;
}

require.extensions['.scss'] = css;
