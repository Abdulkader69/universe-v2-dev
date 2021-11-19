import Logo from './assets/images/Universev2.png';
import Discord from './assets/images/discord-icon.svg';
import Twitter from './assets/images/twitter.svg';

function Footer() {
    return (
      <footer className="main-footer relative z-20 overflow-hidden lg:pb-24 md:pb-16 pb-12 lg:pt-40 md:pt-32 pt-20">
        <div className="circle-bg left-1/2 transform translate-x-[-50%] absolute top-0 z-10 w-[1150px] h-[1150px] rounded-full bg-[rgba(20,20,20)]"></div>
        <div className="w-full max-w-container m-auto px-4 relative z-20">
            <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase text-center text-white lg:mb-16 md:mb-10 mb-8 text-shadow">Join Discord</h2>
        </div>
        <div className="w-full max-w-container m-auto px-4 flex flex-wrap relative z-20">
            <div className="social-button-wrapper flex justify-center items-center w-full">
                <ul className="header-social flex items-center">
                    <li><a className="bg-white xl:w-14 w-8 xl:h-14  h-8 flex justify-center items-center rounded-full xl:mr-5 mr-3" href="/"><img className="xl:w-7  w-4" src={Twitter} alt="twitter" /></a></li>
                    <li><a href="/"><img className="xl:w-20 w-14" src={Discord} alt="discord" /></a></li>
                    <li><a className="2xl:px-10  xl:px-4 px-3 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-transparent rounded-md text-white ml-5 border-2 border-solid border-white flex items-center transition-all hover:bg-white hover:text-dark" href="/">Join Now</a></li>
                </ul>
            </div>
            <div className="logo 2xl:w-96 xl:w-72 w-60 m-auto lg:mt-14 md:mt-10 mt-8">
                <a href="/"><img className="w-full" src={Logo} alt="main-logo" /></a>
            </div>
        </div>
      </footer>
    );
}

export default Footer;