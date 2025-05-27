import React from 'react';

const BgPatternsMobile = () => {
  return (
    <>
      {/* Right pattern */}
      <picture className="lg:hidden block absolute -bottom-50 right-0 z-0">
        <source
          media="(min-width: 939px)"
          srcSet="/bg-pattern-intro-right-desktop.svg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/bg-pattern-intro-right-mobile.svg"
        />
        <img
          src="/bg-pattern-intro-right-desktop.svg"
          alt=""
          className="h-[18em]"
        />
      </picture>

      {/* Left pattern - Adding the left pattern that was missing */}
      <picture className="lg:hidden block absolute left-0 bottom-50 right-40 z-0">
        <source
          media="(min-width: 939px)"
          srcSet="/bg-pattern-intro-left-desktop.svg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/bg-pattern-intro-left-mobile.svg"
        />
        <img
          src="/bg-pattern-intro-left-desktop.svg"
          alt=""
          className="h-[16em]"
        />
      </picture>
    </>
  );
}

export default BgPatternsMobile;
