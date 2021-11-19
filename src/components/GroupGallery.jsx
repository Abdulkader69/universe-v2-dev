import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Gallery1 from '../components/assets/images/gallery-1.jpg';
import Gallery2 from '../components/assets/images/gallery-2.jpg';
import Gallery3 from '../components/assets/images/gallery-3.jpg';
import Gallery4 from '../components/assets/images/gallery-4.jpg';
import Gallery5 from '../components/assets/images/gallery-5.jpg';

const responsive = {
  allDevice: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
    // slidesToSlide: 1 // optional, default to 1.
  }
};

function GroupGallery() {
    return (
      <div className="group-gallery-section relative z-10 mb-40 overflow-hidden">
        <div className="w-full max-w-container m-auto flex flex-wrap">
          <div className="left md:w-1/2 w-full text-white">
            <h2 className="lg:text-5xl md:text-4xl text-3xl uppercase text-center">Group 1</h2>
            <div className="gallery-carousel relative">
              <Carousel
                 swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
              >
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery3} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery2} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery5} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery4} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery1} alt="gallery-1" /></div>
              </Carousel>
            </div>
          </div>
          <div className="right md:w-1/2 w-full text-white">
            <h2 className="lg:text-5xl md:text-4xl text-3xl uppercase text-center">Group 1</h2>
            <div className="gallery-carousel relative">
              <Carousel
                swipeable
                draggable
                showDots
                responsive={responsive}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery3} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery2} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery5} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery4} alt="gallery-1" /></div>
                <div className="overflow-hidden cursor-pointer rounded-3xl border-[5px] border-solid border-white shadow-gallery mx-[10%] my-16"><img className="w-full" src={Gallery1} alt="gallery-1" /></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GroupGallery;