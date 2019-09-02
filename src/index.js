import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register('/service-worker.js');

// let installPromptEvent;

// window.addEventListener('beforeinstallprompt', (event) => {
//   // Prevent Chrome <= 67 from automatically showing the prompt
//   event.preventDefault();
//   // Stash the event so it can be triggered later.
//   installPromptEvent = event;
//   // Update the install UI to notify the user app can be installed
//   document.querySelector('#install-button').disabled = false;
// });


// btnInstall.addEventListener('click', () => {
//     // Update the install UI to remove the install button
//     document.querySelector('#install-button').disabled = true;
//     // Show the modal add to home screen dialog
//     installPromptEvent.prompt();
//     // Wait for the user to respond to the prompt
//     installPromptEvent.userChoice.then((choice) => {
//       if (choice.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       // Clear the saved prompt since it can't be used again
//       installPromptEvent = null;
//     });
//   });