import {useState, useRef} from 'react'
import { FaQrcode, FaLink } from "react-icons/fa";
import QRCode from 'qrcode';


const Qrcode = () => {
    const [urlImag, setUrlImage] = useState('')
    const urlText = useRef('')


    const generateQr = () => {

        const url = urlText.current.value
        if(!url) {
            return alert('Write somthing???')
        }
        QRCode.toDataURL(url)
        .then(url => {
            console.log(url)
            setUrlImage(url)
        })
        .catch(err => {
            console.error(err)
        })
    }


  return (
    <>
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="title">
                            <FaQrcode/>
                            <h2>SQR Qrcode</h2>
                        </div>
                        <div className="content">
                            <p><FaLink/> URL</p>
                            <ul><input type="text" spellCheck="false" ref={urlText}/></ul>
                        </div>
                        <div className="details">
                            <button onClick={generateQr}>Qrcode</button>
                            {urlImag && (<a href={urlImag} download={"qrcode.png"} onClick={generateQr}>Download</a>)}
                        </div>
                    </div>
                    <div className="col-md-4">
                        {urlImag && <img src={urlImag}/>}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Qrcode