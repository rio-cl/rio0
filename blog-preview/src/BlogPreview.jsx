import Illustration from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp"

function BlogPreview(){

    return(
        <>
            <div className="page">
                <div className="card">
                    <div className="contents">
                        <img className="Illustration-Pic" src={Illustration} alt="Ill-Pic"/>
                        <h3 className="category"> Learning</h3>
                        <p className="publishment">Published 21 Dec 2023</p>
                        <h1 className="MainTitle">HTML & CSS foundations</h1>
                        <p className="description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
                        <div className="profile">
                            <span><img className="ProfilePic" src={avatar} alt="Avatar Pic"/></span>
                            <span><h3>Greg Hooper</h3></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BlogPreview