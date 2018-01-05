import App from '../../containers/App'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
    const initialState = { output: 100 }
    const mockStore = configureStore()
    let store, container

    beforeEach(() => {
        store = mockStore(initialState)
        // container = shallow(<App store={store} />)
    })

    it('+++ render the connected(SMART) component', () => {
        expect(container.length).toEqual(1)
    });

});