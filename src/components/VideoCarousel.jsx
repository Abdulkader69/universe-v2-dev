import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player/youtube'

const responsive = {
  allDevice: {
    breakpoint: { max: 5000, min: 768 },
    items: 2,
    slidesToSlide: 2
  },
  mobileDevice: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  }
};

function VideoCarousel() {
    return (
      <div className="video-gallery-section relative z-10 lg:mb-40 md:mb-32 mb-20 overflow-hidden">
        <div className="w-full max-w-container m-auto flex flex-wrap">
          <div className="left w-full text-white">
            <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase text-center lg:mb-10 mb-6">Video Intro</h2>
            <div className="video-carousel relative">
              <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={false}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={5000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
              >
                <div className="video overflow-hidden cursor-pointer rounded-xl border-[2px] border-solid border-white shadow-video m-5 "><ReactPlayer controls={true} url='https://www.youtube.com/watch?v=_PXjXY4ZAB8' /></div>
                <div className="video overflow-hidden cursor-pointer rounded-xl border-[2px] border-solid border-white shadow-video m-5 "><ReactPlayer controls={true} url='https://www.youtube.com/watch?v=PM101DvvG4Q' /></div>
                <div className="video overflow-hidden cursor-pointer rounded-xl border-[2px] border-solid border-white shadow-video m-5 "><ReactPlayer controls={true} url='https://www.youtube.com/watch?v=8iPCKfkXmew' /></div>
                <div className="video overflow-hidden cursor-pointer rounded-xl border-[2px] border-solid border-white shadow-video m-5 "><ReactPlayer controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></div>
                <div className="video overflow-hidden cursor-pointer rounded-xl border-[2px] border-solid border-white shadow-video m-5 "><ReactPlayer controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
}

export default VideoCarousel;