import { memo } from "react";

function Button ({ text, className, onClick }) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`border-2 transition duration-300 px-4 uppercase cursor-pointer flex items-center justify-center shrink-0 ${className}`}
      >
        <span className="sr-only">{text}</span>
        {text}
      </button>
    );
}

export default memo(Button);