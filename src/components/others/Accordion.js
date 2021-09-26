import { useState } from "react";
import clsx from "clsx"
const Accordion = ({ title, children ,className,expand}) => {
  const [isOpen, setOpen] = useState(expand ? expand : true);
  return (
    <article className={clsx('accordion-wrapper', className)} >
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-content ${!isOpen ? "collapsed" : ""}`}>
        {children}
      </div>
    </article>
  );
};
export default Accordion