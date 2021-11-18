import BannerBG from './assets/images/banner-bg.png';

function HeroBanner() {
    return (
      <div className="hero-banner-section h-screen relative z-10 flex items-center justify-center">
        <img className="absolute w-full h-full top-0 right-0 m-auto object-cover object-top" src={BannerBG} alt="banner-bg" />
        <div className="container pt-20 z-10">
          <h1 className="text-[8rem] text-white text-center">Universe v2</h1>
          <div className="play-btn text-center"><p className="btn"><span></span><span></span></p><p className="text">Watch Video Trailer</p></div>
        </div>
      </div>
    );
}
  
export default HeroBanner;
  