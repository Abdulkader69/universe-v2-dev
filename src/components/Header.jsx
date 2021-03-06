import { useState, useEffect } from 'react';
import Logo from './assets/images/Universev2.png';
import Discord from './assets/images/discord-icon.svg';
import Twitter from './assets/images/twitter.svg';

function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    const [menuExpanded, setMenuExpanded] = useState(false);

    return (
      <header id="main-header" className={` ${scroll ? "bg-[rgba(0,0,0,0.6)] py-3" : "py-7"} fixed z-50 top-0 left-0 w-full px-4 transition-all overflow-hidden`}>
        <div className="max-w-screen-2xl m-auto flex items-center justify-between relative z-40">
            <div className="logo 2xl:w-96 xl:w-72 w-60">
                <a href="/"><img className="w-full" src={Logo} alt="main-logo" /></a>
            </div>
            <div className="menu-right-area lg:flex hidden items-center 2xl:w-w-calc-100-24 xl:w-w-calc-100-18 w-w-calc-100-15 justify-end">
                <div className="menu-area ">
                    <ul className="flex items-center">
                        <li><a className="2xl:text-lg text-base text-white font-bold" href="/">Road Map</a></li>
                        <li><a className="2xl:text-lg text-base text-white font-bold ml-8" href="/">About</a></li>
                        <li><a className="2xl:text-lg text-base text-white font-bold ml-8" href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className="social-button-wrapper flex items-center 2xl:ml-28 xl:ml-20 ml-5 ">
                    <ul className="header-social flex items-center">
                        <li><a className="bg-white xl:w-9 w-8 xl:h-9 h-8 flex justify-center items-center rounded-full xl:mr-5 mr-3" href="/"><img className="xl:w-5 w-4" src={Twitter} alt="twitter" /></a></li>
                        <li><a href="/"><img className="xl:w-10 w-8" src={Discord} alt="discord" /></a></li>
                    </ul>
                    <ul className="header-buttons flex items-center xl:ml-10 ml-5">
                        <li><a className="2xl:px-7 xl:px-5 px-4 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-gradient-to-r from-[rgba(53,216,247)] to-[rgba(151,82,238)] rounded-md text-white ml-3 flex items-center transition-all hover:bg-gradient-to-l" href="/">Mint Now</a></li>
                        <li><a className="2xl:px-7 xl:px-5 px-4 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-white rounded-md text-dark ml-3 border-2 border-solid border-white flex items-center transition-all hover:bg-transparent hover:text-white" href="/">Marketplace</a></li>
                        <li><a className="2xl:px-6 xl:px-4 px-3 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-transparent rounded-md text-white ml-3 border-2 border-solid border-white flex items-center transition-all hover:bg-white hover:text-dark" href="/">Connect Wallet</a></li>
                    </ul>
                </div>
            </div>
            <button
                type="button"
                onClick={() => {
                    setMenuExpanded(!menuExpanded);  
                }}
                className={`border-solid border-2 border-white w-10 h-8 p-1 relative lg:hidden inline-block`}
            >
                <span className={`absolute left-0 w-full inline-block h-[2px] bg-white transition-all ${menuExpanded ? 'rotate-45 top-[12px]' : 'top-[6px]'}`}></span>
                <span className={`absolute top-[13px] left-0 w-full inline-block h-[2px] bg-white transition-all ${menuExpanded ? '-rotate-45' : ''}`}></span>
                <span className={`absolute top-[20px] left-0 w-full inline-block h-[2px] bg-white transition-all ${menuExpanded ? 'opacity-0' : ''}`}></span>
            </button>       
        </div>
        <div className={`mobile-menu-wrapper lg:hidden fixed top-0 left-0 w-full transition-height-transition bg-dark ${menuExpanded ? 'm-menu-activated opacity-1 visible h-screen' : 'opacity-0 invisible h-0'}`}>
            <div className="menu-right-area px-4 pt-36">
                <div className="menu-area w-full mb-7">
                    <ul className="flex items-center justify-center">
                        <li className="inline-block"><a className="2xl:text-lg text-base text-white font-bold" href="/">Road Map</a></li>
                        <li className="inline-block"><a className="2xl:text-lg text-base text-white font-bold ml-8" href="/">About</a></li>
                        <li className="inline-block"><a className="2xl:text-lg text-base text-white font-bold ml-8" href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className="social-button-wrapper flex flex-wrap justify-center">
                    <ul className="header-social flex items-center justify-center w-full">
                        <li><a className="bg-white xl:w-9 w-8 xl:h-9 h-8 flex justify-center items-center rounded-full xl:mr-5 mr-3" href="/"><img className="xl:w-5 w-4" src={Twitter} alt="twitter" /></a></li>
                        <li><a href="/"><img className="xl:w-10 w-8" src={Discord} alt="discord" /></a></li>
                    </ul>
                    <ul className="header-buttons text-center mt-7">
                        <li className="inline-block mb-4"><a className="2xl:px-7 xl:px-5 px-4 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-gradient-to-r from-[rgba(53,216,247)] to-[rgba(151,82,238)] rounded-md text-white ml-3 flex items-center transition-all hover:bg-gradient-to-l" href="/">Mint Now</a></li>
                        <li className="inline-block mb-4"><a className="2xl:px-7 xl:px-5 px-4 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-white rounded-md text-dark ml-3 border-2 border-solid border-white flex items-center transition-all hover:bg-transparent hover:text-white" href="/">Marketplace</a></li>
                        <li className="inline-block mb-4"><a className="2xl:px-6 xl:px-4 px-3 2xl:h-14 h-11 2xl:text-lg lg:text-base text-sm bg-transparent rounded-md text-white ml-3 border-2 border-solid border-white flex items-center transition-all hover:bg-white hover:text-dark" href="/">Connect Wallet</a></li>
                    </ul>
                </div>
            </div>  
        </div>
      </header>
    );
}

export default Header;
  