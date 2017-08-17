import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
