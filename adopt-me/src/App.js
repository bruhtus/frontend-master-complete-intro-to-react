// import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Pet from './Pet';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

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
  const theme = useState('darkblue');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
