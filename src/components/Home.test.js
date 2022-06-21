import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import Home from './Home';

const MockHome = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

describe('Check if Home Component renders correctly', () => {
  test('renders heading', () => {
    render(<MockHome />);
    const headingElement = screen.getByRole('heading', {
      name: /who's that pokemon\?/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders textbox', () => {
    render(<MockHome />);
    const textBoxElement = screen.getByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
  });

  test('renders button', () => {
    render(<MockHome />);
    const buttonElement = screen.getByRole('button', {
      name: /check answer/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders heading', () => {
    render(<MockHome />);
    const headingElement = screen.getByRole('heading', {
      name: /pokemon by id/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});

// describe('Check if Details Component renders correctly', () => {
//   test('renders heading', async () => {
//     render(<MockHome />);
//     userEvent.click(screen.getByRole('link', {
//       name: /01 bulbasaur/i,
//     }));
//     expect(screen.getByRole('heading', {
//       name: /bulbasaur/i,
//     })).toBeInTheDocument();
//   });
// });
