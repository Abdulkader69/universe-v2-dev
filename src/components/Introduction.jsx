import Image1 from '../components/assets/images/gallery-6.jpg';
import Image2 from '../components/assets/images/gallery-5.jpg';
import Image3 from '../components/assets/images/gallery-1.jpg';
import Image4 from '../components/assets/images/team1.jpg';
import Image5 from '../components/assets/images/team2.jpeg';
import Image6 from '../components/assets/images/team3.jpg';

function Introduction() {
    return (
      <div className="introduction-section relative z-10 flex flex-wrap items-center px-4 lg:mb-40 md:mb-32 mb-20 overflow-hidden">
        <div className="left md:w-1/2 w-full lg:py-40 md:py-24 py-10 xl:pl-half-pd">
            <div className="content-area text-white">
                <h2 className="lg:text-5xl md:text-4xl text-3xl lg:mb-12 mb-8">Introduction</h2>
                <p className="lg:text-2xl md:text-lg text-base leading-[1.6] lg:mb-10 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste ea nemo tempora ipsam sit accusamus impedit provident. Nostrum laborum quidem excepturi libero iste culpa aut pariatur.</p>
                <p className="lg:text-2xl md:text-lg text-base leading-[1.6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste ea nemo tempora ipsam sit accusamus impedit provident. Nostrum laborum quidem excepturi libero iste culpa aut pariatur.</p>
            </div>
        </div>
        <div className="right md:w-1/2 w-full">
            <div className="masonry">
              <figure>
                <img src={Image1} alt="aa" />
              </figure>
              <figure>
                <img src={Image2} alt="aa" />
              </figure>
              <figure>
                <img src={Image3} alt="aa" />
              </figure>
              <figure>
                <img src={Image4} alt="aa" />
              </figure>
              <figure>
                <img src={Image5} alt="aa" />
              </figure>
              <figure>
                <img src={Image6} alt="aa" />
              </figure>
            </div>
        </div>
      </div>
    );
}

export default Introduction;
