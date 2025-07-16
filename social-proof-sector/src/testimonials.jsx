import Star from "./assets/icon-star.svg";
import Anne from "./assets/image-anne.jpg";
import Irene from "./assets/image-irene.jpg";
import Colton from "./assets/image-colton.jpg"

function Testimonial(){

    return(
        <>
            <div className="testimonials-container">
      <div className="top-section">
        <div className="left-text">
          <h1>
            10,000+ of our users <br /> love our products.
          </h1>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="right-ratings">
          <div className="rating-card">
            <span><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/></span>
            <p>Rated 5 Stars in Reviews</p>
          </div>
          <div className="rating-card">
            <span><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/></span>
            <p>Rated 5 Stars in Report Guru</p>
          </div>
          <div className="rating-card">
            <span><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/><img className="star" src={Star} alt="Star Logo"/></span>
            <p>Rated 5 Stars in BestTech</p>
          </div>
        </div>
      </div>

      <div className="bottom-testimonials">
        <div className="testimonial-card">
          <div className="user-info">
            <img src={Colton} alt="Colton Smith" />
            <div>
              <h4>Colton Smith</h4>
              <span>Verified Buyer</span>
            </div>
          </div>
          <p>
            “ We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent! ”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="user-info">
            <img src={Irene} alt="Irene Roberts" />
            <div>
              <h4>Irene Roberts</h4>
              <span>Verified Buyer</span>
            </div>
          </div>
          <p>
            “ Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery. ”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="user-info">
            <img src={Anne} alt="Anne Wallace" />
            <div>
              <h4>Anne Wallace</h4>
              <span>Verified Buyer</span>
            </div>
          </div>
          <p>
            “ Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone! ”
          </p>
        </div>
      </div>
    </div>
        </>
    )

}

export default Testimonial