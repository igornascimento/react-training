import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  // this first test just ensure that our component is being loaded
  const div = document.create('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtDone(div);
});