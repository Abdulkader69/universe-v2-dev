import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Gallery1 from '../components/assets/images/gallery-1.jpg';
import Gallery2 from '../components/assets/images/gallery-2.jpg';
import Gallery3 from '../components/assets/images/gallery-3.jpg';
import Gallery4 from '../components/assets/images/gallery-4.jpg';
import Gallery5 from '../components/assets/images/gallery-5.jpg';

const responsive = {
  allDevice: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  }
};

function GroupGallery() {
    return (
      <div className="group-gallery-section relative z-10 lg:mb-40 md:mb-32 mb-20 overflow-hidden">
        <div className="w-full max-w-container m-auto flex flex-wrap">
          <div className="left md:w-1/2 w-full text-white md:mb-0 mb-14">
            <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase text-center">Group 1</h2>
            <div className="gallery-carousel relative">
              <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={5000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
              >
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery3} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery2} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery5} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery4} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery1} alt="gallery-1" /></div>
              </Carousel>
            </div>
          </div>
          <div className="right md:w-1/2 w-full text-white">
            <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase text-center">Group 1</h2>
            <div className="gallery-carousel relative">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery4} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery2} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery3} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery1} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery md:mx-[10%] mx-[5%] lg:my-16 my-10"><img className="w-full" src={Gallery1} alt="gallery-1" /></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GroupGallery;