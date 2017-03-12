import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.js';
import App from './App.js';
import './index.css';

/* hello world example */

// ReactDOM.render(
//   React.createElement('h1', null, 'Hello World!'),
//   document.getElementById('example'),
//   () => {
//     console.log('Hello world was rendered');
//   }
// );

// ReactDOM.render(
//   React.createElement('h1',
//   {
//     className: 'title',
//     style: {
//       color: 'red'
//     }
//   }, React.DOM.span(null, 'Hello world!')),
//   document.getElementById('example')
// );

// let liElement1 = React.DOM.li({className: 'list__item', key: 1}, 'Item 1');
// let liElement2 = React.DOM.li({className: 'list__item', key: 2}, 'Item 2');
//
// let fragment = [liElement1, liElement2];
//
// let list = React.createElement(
//   'ul',
//   {className: 'list'},
//   fragment
// );
//
// ReactDOM.render(list, document.getElementById('example'));

// const fragment = ['Item 1', 'Item 2'].map((title, index) => {
//   return React.DOM.li({className: 'list__item', key: index}, title);
// });
//
// var list = React.createElement(
//   'ul',
//   {className: 'list'},
//   fragment
// );
//
// ReactDOM.render(list, document.getElementById('example'));

/*  JSX  */

// let list = (
//   <ul>
//   <li className="list__item" key={1}>Item 1</li>
//   <li className="list__item" key={2}>Item 2</li>
//   <li className="list__item" key={3}>Item 3</li>
//   </ul>
//   );

// ReactDOM.render(list, document.getElementById('example'));

/*   Components   */

/* State of Component */

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
//   );

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

