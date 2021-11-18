import Logo from '../../public/Universev2.png';

function Header() {
    return (
      <header id="main-header" className=" py-7 fixed z-50 top-0 left-0 w-full">
          <div className="container m-auto flex items-center justify-between">
              <div className="logo">
                <a href="/"><img className="w-96" src={Logo} alt="main-logo" /></a>
                </div>
                <div className="menu-right-area flex items-center">
                    <div className="menu-area ">
                        <ul className="flex items-center">
                            <li><a className="text-lg text-white font-bold" href="#">Road Map</a></li>
                            <li><a className="text-lg text-white font-bold ml-8" href="#">About</a></li>
                            <li><a className="text-lg text-white font-bold ml-8" href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="social-button-wrapper flex items-center ml-40 ">
                        <ul className="header-social flex items-center">
                            <li><a href="#">T</a></li>
                            <li><a href="#">D</a></li>
                        </ul>
                        <ul className="header-buttons flex items-center ml-10">
                            <li><a className="px-8 bg-gradient-to-r from-[rgba(53,216,247)] to-[rgba(151,82,238)] rounded-md text-white text-lg ml-3 h-14 flex items-center" href="#">Mint Now</a></li>
                            <li><a className="px-8 bg-white rounded-md text-dark text-lg ml-3 border-2 border-solid border-white h-14 flex items-center" href="#">Marketplace</a></li>
                            <li><a className="px-8 bg-transparent rounded-md text-white text-lg ml-3 border-2 border-solid border-white h-14 flex items-center" href="#">Connect Wallet</a></li>
                        </ul>
                    </div>
                </div>              
          </div>
      </header>
    );
}

export default Header;
  