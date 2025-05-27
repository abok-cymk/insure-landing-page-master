import { memo } from "react";

const HowWeWorkCard = ({ icon, howWeWork, body }) => {
  return (
    <div className="flex flex-col items-center sm:items-start lg:items-start gap-6 text-center sm:text-left lg:text-left max-sm:px-10">
      <img src={icon} alt={`${howWeWork} icon`} className="h-20 w-20" />
      <div>
        <h3 className="tracking-tight font-medium text-2xl text-Gray-950 my-2">
          {howWeWork}
        </h3>
        <p className="text-base/6 font-k400 text-Gray-700">{body}</p>
      </div>
    </div>
  );
}

export default memo(HowWeWorkCard);
