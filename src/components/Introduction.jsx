

function Introduction() {
    const photos = [
        {
          src: './assets/images/banner-bg.png',
          width: 4,
          height: 3
        },
        {
          src: './assets/images/banner-bg.png',
          width: 1,
          height: 1
        }
    ];
    return (
      <div className="introduction-section relative z-10 flex items-center px-4 mb-40 overflow-hidden">
        <div className="left md:w-1/2 py-40 pl-half-pd">
            <div className="content-area text-white">
                <h2 className="lg:text-5xl md:text-4xl text-3xl lg:mb-12 mb-8">Introduction</h2>
                <p className="lg:text-2xl md:text-lg text-base leading-[1.6] lg:mb-10 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste ea nemo tempora ipsam sit accusamus impedit provident. Nostrum laborum quidem excepturi libero iste culpa aut pariatur.</p>
                <p className="lg:text-2xl md:text-lg text-base leading-[1.6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste ea nemo tempora ipsam sit accusamus impedit provident. Nostrum laborum quidem excepturi libero iste culpa aut pariatur.</p>
            </div>
        </div>
        <div className="right md:w-1/2">
            {/* <Gallery photos={photos} direction={"column"} /> */}
            {/* <Carousel responsive={responsive}>
              <div className="text-white">Item 1</div>
              <div className="text-white">Item 11</div>
              <div className="text-white">Item 111</div>
              <div className="text-white">Item 1111</div>
            </Carousel>; */}
        </div>
      </div>
    );
}

export default Introduction;
