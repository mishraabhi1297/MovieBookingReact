import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './Store';
import { Provider } from 'react-redux';
import { register } from './serviceWorker';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

register();
