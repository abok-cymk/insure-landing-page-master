import { memo } from "react";
import Button from "./components/Button";

const BlogCTA = () => {
  return (
    <section className="max-w-6xl mx-auto bg-Blue-950 py-12 px-18 flex flex-col gap-3 sm:flex-row lg:flex-row items-center justify-between text-center sm:text-left lg:text-left mt-28 text-Gray-50 relative overflow-hidden">
      {/* Right pattern */}
      <picture className="absolute top-0 right-0 z-0">
        <source
          media="(min-width: 939px)"
          srcSet="/bg-pattern-how-we-work-desktop.svg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/bg-pattern-how-we-work-mobile.svg"
        />
        <img src="/bg-pattern-how-we-work-desktop.svg" alt="" className="" />
      </picture>
      <h2 className="sm:max-w-sm lg:max-w-2xl text-2xl sm:text-4xl lg:text-7xl text-balance z-70">
        Find out more about how we work
      </h2>
      <Button text="how we work" className="py-2 z-70" />
    </section>
  );
}

export default memo(BlogCTA);
