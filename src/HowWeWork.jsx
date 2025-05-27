import HowWeWorkCard from "./components/HowWeWorkCard";
import Line from "./components/Line";

const works = [
  {
    icon: "/icon-snappy-process.svg",
    howWeWork: "Snappy Process",
    body: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    icon: "/icon-affordable-prices.svg",
    howWeWork: "Affordable Prices",
    body: " We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    icon: "/icon-people-first.svg",
    howWeWork: "People First",
    body: " Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];

const HowWeWork = () => {
  return (
  <section className="max-w-6xl mx-auto relative sm:px-10 lg:px-0 mt-36 sm:mt-48 lg:mt-52 mb-8">
    <Line className="-top-10 max-sm:left-1/2 max-sm:-translate-x-1/2"/>
    <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center sm:text-left lg:text-left">We're different</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {works.map((work, index) => (
            <HowWeWorkCard
            key={index}
            icon={work.icon}
            howWeWork={work.howWeWork}
            body={work.body}
            />
        ))}
    </div>
  </section>);
};

export default HowWeWork;
