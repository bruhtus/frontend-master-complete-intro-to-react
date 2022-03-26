// import React from 'react';
import ReactDOM from 'react-dom';

// import Pet from './Pet';
import SearchParams from './SearchParams';

// const App = () => {
//   return React.createElement(
//     'div', {},
//     [
//       React.createElement('h1', {}, 'adopt me!'),
//       React.createElement(Pet, {
//         name: 'Luna',
//         animal: 'Dog',
//         breed: 'Havanese'
//       }),
//       React.createElement(Pet, {
//         name: 'Pepper',
//         animal: 'Bird',
//         breed: 'Cockatiel'
//       }),
//       React.createElement(Pet, {
//         name: 'Sudo',
//         animal: 'Dog',
//         breed: 'Wheaten Terrier'
//       }),
//     ]
//   );
// };

// JSX example

// const App = () => {
//   return (
//     <div>
//       <h1>adopt me!</h1>
//       <Pet name='Luna' animal='Dog' breed='Havanese' />
//       <Pet name='Pepper' animal='Bird' breed='Cockatiel' />
//       <Pet name='Sudo' animal='Dog' breed='Wheaten Terrier' />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <h1>adopt me!</h1>
      <SearchParams />
    </div>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
