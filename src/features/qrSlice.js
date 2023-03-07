import {createSlice} from '@reduxjs/toolkit';
import QRCode from 'qrcode';


const initialState = {
    url: '',
    urlImage: '',
}


export const generateQrCode = (url) => {

    QRCode.toDataURL(url)
    .then(url => {
       return url
    })
    .catch(err => {
        console.error(err)
    })
}



const qrSlice = createSlice({
    name: 'qrCode',
    initialState,
    reducers: {
       
    }
})



export default qrSlice.reducer