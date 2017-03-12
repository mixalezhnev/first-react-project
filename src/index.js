import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './Clock.js';
import App from './App.js';
import './index.css';

const employers = [
  {id: 1463777842462, name: 'Jordan Walke', email: 'jordan@somemail.com'},
  {id: 1463777853704, name: 'Dan Abramov', email: 'dan@somemail.com'},
  {id: 1463777863341, name: 'Sebastian Markbage', email: 'vjeux@somemail.com'},
  {id: 1463777872559, name: 'Pete Hunt', email: 'pete@somemail.com'}
];

ReactDOM.render(
  <App initialItems={employers}/>,
  document.getElementById('my-component')
);

