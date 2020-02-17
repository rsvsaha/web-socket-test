import {combineReducers} from 'redux';
import {listenerReducers} from './listenerReducers';
import {emitterReducers} from './emitterReducer';
export const rootReducer = combineReducers({listenerReducers,emitterReducers})