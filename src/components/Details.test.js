import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from './Details';
import store from './redux/configureStore';

const MockDetails = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Details />
    </BrowserRouter>
  </Provider>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockDetails />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
