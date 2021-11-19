import { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import BannerBG from './assets/images/banner-bg.png';
import PlayBTN from './assets/images/play-button.svg';

function HeroBanner() {
    const [videoPopUp, setVideoPopUp] = useState(false);
    return (
      <>
      <div className="hero-banner-section h-screen relative z-10 flex items-center justify-center overflow-hidden">
        <img className="absolute w-full h-full top-0 right-0 m-auto object-cover object-top" src={BannerBG} alt="banner-bg" />
        <div className="container pt-20 z-10">
          <h1 className="2xl:text-[8rem] xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[40px] text-[25px] text-white text-center uppercase">Universe v2</h1>
          <div onClick={() => {setVideoPopUp(!videoPopUp);}} className="play-btn cursor-pointer text-center flex items-center justify-center mt-5"><p className="btn md:h-28 h-14 md:w-28 w-14  rounded-full bg-white flex items-center justify-center md:mr-8 mr-5"><img className="w-5" src={PlayBTN} alt="play" /></p><p className="text text-white lg:text-3xl md:text-2xl text-base">Watch Video Trailer</p></div>
        </div>
      </div>
      <div className={`video-popup-wrap fixed top-0 left-0 z-[999] flex flex-wrap justify-center items-center bg-[rgba(9,9,9,.9)] w-full h-full transition-all ${videoPopUp ? 'm-menu-activated opacity-1 visible' : 'opacity-0 invisible'}`}>
          <div className="video-wrap">
            <div onClick={() => {setVideoPopUp(!videoPopUp);}} className="text-right text-white mb-3"><h4 className=" inline-block border-solid border-2 border-white w-auto text-sm py-1 px-1">Close</h4></div>
            <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=_PXjXY4ZAB8' />
          </div>
        </div>
      </>
    );
}
  
export default HeroBanner;
  