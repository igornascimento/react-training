import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  // this first test just ensure that our component is being loaded
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  
  console.log(div.innerHTML);
  
  ReactDOM.unmountComponentAtNode(div);
});