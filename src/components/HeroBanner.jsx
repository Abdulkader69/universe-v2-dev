import BannerBG from './assets/images/banner-bg.png';
import PlayBTN from './assets/images/play-button.svg';

function HeroBanner() {
    return (
      <div className="hero-banner-section h-screen relative z-10 flex items-center justify-center overflow-hidden">
        <img className="absolute w-full h-full top-0 right-0 m-auto object-cover object-top" src={BannerBG} alt="banner-bg" />
        <div className="container pt-20 z-10">
          <h1 className="2xl:text-[8rem] xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[40px] text-[30px] text-white text-center uppercase">Universe v2</h1>
          <div className="play-btn cursor-pointer text-center flex items-center justify-center mt-5"><p className="btn h-28 w-28  rounded-full bg-white flex items-center justify-center mr-8"><img className="w-5" src={PlayBTN} alt="play" /></p><p className="text text-white text-3xl">Watch Video Trailer</p></div>
        </div>
      </div>
    );
}
  
export default HeroBanner;
  