import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import RegistrationReducer from './Registration/Store/Reducers';
import { Provider } from 'react-redux';
import Registration from './Registration/Registrations';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
    RegistrationReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

const ApplicationIndex = () => {
    return (
        <Provider store={store}>
            <Registration />
        </Provider>
    )
}

export default ApplicationIndex;