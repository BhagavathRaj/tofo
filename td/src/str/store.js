import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../feautures/counter/counterslice'

export const store=configureStore({
    reducer:counterReducer, 
})