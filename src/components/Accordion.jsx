import React, { useRef, useState } from "react";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion-item-wrap flex flex-wrap">
      <div
        className={`accordion w-full cursor-pointer md:py-5 py-4 text-white transition-bg-transition flex items-center justify-between ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion-title lg:text-4xl md:text-3xl sm:text-2xl text-xl">{props.title}</p>
        <p className="ml-5 md:h-10 h-8 md:w-10 w-8 overflow-hidden flex items-center justify-center"><span className="text-[60px]">{active ? "-" : "+"}</span></p>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion-content overflow-hidden transition-height-transition w-full"
      >
        <div
          className="accordion-text md:text-lg text-sm text-white leading-[1.7] pb-5"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
