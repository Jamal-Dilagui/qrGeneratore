import {configureStore} from '@reduxjs/toolkit';
import qrReducer from '../features/qrSlice'


const store = configureStore({
    reducer: {
        qrCode: qrReducer
    }
})

export default store