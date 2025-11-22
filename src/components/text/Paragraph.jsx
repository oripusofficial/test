import React from "react";

const Paragraph = ({ children, className,  ...props}) => {
  return (
    <p {...props} className={` ${className} my-4  font-primary lg:text-left text-lg lg:text-xl text-primary tracking-wide`}>
      {children}
    </p>
  );
};

export default Paragraph;
