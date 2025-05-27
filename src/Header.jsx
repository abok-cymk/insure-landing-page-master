import BgPatternsDesktop from "./components/BgPatternsDesktop";
import BgPatternsMobile from "./components/BgPatternsMobile";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="bg-Blue-950 pb-10 relative">
        <BgPatternsDesktop />
        <div className="flex flex-col-reverse lg:flex-row max-w-6xl mx-auto gap-12 relative">
            <BgPatternsMobile />
            <div className="text-Gray-50 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-0 py-10 lg:py-28 gap-8 relative z-40">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl text-balance">
                Humanizing your insurance.
              </h1>{" "}
              <p>
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <Button
                text="View plans"
                className="py-3 w-1/2 hover:bg-Gray-50 hover:text-Gray-950 text-xl font-k700"
              />
            </div>
          
          <div className="w-full relative">
            <picture className="">
              <source
                media="(min-width: 939px)"
                srcSet="/image-intro-desktop.jpg"
              />
              <source
                media="(max-width: 928px)"
                srcSet="/image-intro-mobile.jpg"
              />
              <img
                src="/image-intro-desktop.jpg"
                alt=""
                className="w-full max-lg:h-[28em] lg:absolute object-cover z-30 lg:-bottom-42"
              />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
