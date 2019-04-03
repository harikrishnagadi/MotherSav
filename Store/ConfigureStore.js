import {createStore, combineReducers,compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anmred from './reducers/anmreducer';
import mothered from './reducers/motheregreducer';
import UpdateDet from './reducers/UpdateReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
   anmdetails : anmred,
   motherdetails: mothered,
   updatedetails: UpdateDet


});

const configureStore =() =>{
    return createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
