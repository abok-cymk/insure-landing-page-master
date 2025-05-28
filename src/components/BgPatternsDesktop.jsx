const BgPatternsDesktop = () => {
  return (
    <>
      {/* Right pattern */}
      <picture className="hidden lg:block absolute top-0 right-0 z-40 lg:-mt-8">
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
          className="h-[32em]"
        />
      </picture>

      {/* Left pattern */}
      <picture className="hidden lg:block absolute left-0 bottom-0 z-0 -mb-50">
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
          className="h-[24em]"
        />
      </picture>
    </>
  );
};

export default BgPatternsDesktop;
