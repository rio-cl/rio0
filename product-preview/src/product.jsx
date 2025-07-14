import ProductPic from "./assets/image-product-desktop.jpg"
import CartPic from "./assets/icon-cart.svg"

function ProductPreview(){

    return(
        <>
            <div className="page">
                <div className="card">
                    <div className="PicSide">
                        <img className="ImageName" src={ProductPic} alt="Product Picture"/>
                    </div>
                    <div className="descriptionside">
                        <h3>P E R F U M E</h3>
                        <h1><strong>Gabrielle Essence Eau De Parfum</strong></h1>
                        <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
                        <div className="Price">
                            <span className="NewPrice"><h1>$149.99</h1></span>
                            <span className="OldPrice">$169.99</span>
                        </div>
                        <div>
                            <button className="Button"> <img className="Cartlogo" src={CartPic} alt="Cart Picture"/> Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>   
    );

}

export default ProductPreview