import Drawers from "./assets/drawers.jpg"
import User from "./assets/avatar-michelle.jpg"
import share from "./assets/icon-share.svg"

function ArticlePreview(){
 
    return(
        <>
            <div className="page">
                <div className="card">
                    <div className="ImageSide">
                        <img className="ImageDrawer" src={Drawers} alt="Drwaers Picture"/>
                    </div>
                    <div className="DescriptionSide">
                        <div>
                            <h1 className="header">
                                <strong>Shift the overall look and feel by adding these wonderful touches to furniture in your home</strong>
                            </h1>
                            <p className="description">
                                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.  I've got some simple titps to help you nake your room fel complete
                            </p>
                            <div className="UserProfile">
                                <img className="UserImage" src={User} alt="Users Picture"/>
                                <div className="author-info">
                                    <span className="author-name">Michelle Appleton</span>
                                    <span className="author-date">28 Jun 2020</span>
                                </div>
                                <button className="sharebutton">
                                    <img className="shareicon" src={share} alt="Share Icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ArticlePreview