import "./Banner.scss";
// import BannerImg from '../../../assets/banner-img.png'
import BannerImg from '../../../assets/bannernew.webp'

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <i><h1>Music!</h1></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi fugit dolore dolor, obcaecati, exercitationem, repudiandae atque consequuntur excepturi enim </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="Banner Image" />
        </div>
    </div>;
};

export default Banner;
