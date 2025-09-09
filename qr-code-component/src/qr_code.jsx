import QrCodePic from "./assets/image-qr-code.png"

function QrCode(){
    return(
            <>
                <div className="Page">
                    <div className="card">
                        <div className="contents1">
                            <img className="QrImage" src={QrCodePic} alt="QrCode Picture" />
                            <div className="contents2">
                                <h1 className="title"><strong>Improve your front-end skills by building projects Raymond</strong></h1>
                                <p>Scan the qr code to visit Frontend Mentor and your coding skills to the next level</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
    )
}

export default QrCode 
