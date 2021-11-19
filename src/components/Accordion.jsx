import React, { useEffect, useRef, useState } from "react";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion-item-wrap flex flex-wrap">
      <div
        className={`accordion w-full cursor-pointer py-5 text-white transition-bg-transition flex items-center justify-between ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion-title text-4xl">{props.title}</p>
        <p className="ml-5 h-10 overflow-hidden flex items-center justify-center"><span className="text-[60px]">{active ? "-" : "+"}</span></p>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion-content overflow-hidden transition-height-transition w-full"
      >
        <div
          className="accordion-text text-lg text-white leading-[1.7] pb-5"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
