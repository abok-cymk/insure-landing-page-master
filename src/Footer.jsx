import { FaPinterest } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram, FiTwitter } from "react-icons/fi";

const companyItems = {
  "our company": ["how we work", "why insure?", "view plans", "reviews"],
  "help me": ["faq", "terms of use", "privacy policy", "cookies"],
  contact: ["sales", "support", "live chat"],
  others: ["careers", "press", "licenses"],
};

const Footer = () => {
  return (
    <footer className="bg-Blue-500/20 relative overflow-hidden py-24 px-20">
      <picture className="absolute left-0 top-0 z-0 -mt-10">
        <source
          media="(min-width: 939px)"
          srcSet="/bg-pattern-footer-desktop.svg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/bg-pattern-footer-mobile.svg"
        />
        <img src="/bg-pattern-footer-desktop.svg" alt="" className="" />
      </picture>
      <div className="max-w-6xl mx-auto flex flex-col justify-between divide-y divide-Gray-700">
        <div className="z-70 flex sm:flex-row flex-col items-center  justify-center sm:justify-start pb-4">
          <a href="#">
            <img src="/logo.svg" alt="INSURE" aria-label="INSURE" />
          </a>
          <ul className="flex gap-5 sm:ml-auto pt-6">
            <li>
              <FaSquareFacebook size={28} className="text-Gray-700 hover:text-Gray-950 transition-colors duration-500 cursor-pointer"/>
            </li>
            <li>
              <FiTwitter size={28} className="text-Gray-700 hover:text-Gray-950 transition-colors duration-500 cursor-pointer"/>
            </li>
            <li>
              <FaPinterest size={28} className="text-Gray-700 hover:text-Gray-950 transition-colors duration-500 cursor-pointer"/>
            </li>
            <li>
              <FiInstagram size={28} className="text-Gray-700 hover:text-Gray-950 transition-colors duration-500 cursor-pointer"/>
            </li>
          </ul>
        </div>
        <div className="z-70 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 text-center sm:text-left lg:text-left pt-4">
          {Object.entries(companyItems).map(([title, items]) => (
            <div key={title} className="pt-6">
              <p className="uppercase text-Gray-700 font-k700 text-sm tracking-widest mb-6">
                {title}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="uppercase text-Gray-950 text-sm font-bold hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
