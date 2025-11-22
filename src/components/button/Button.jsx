import React from "react";

const Button = ({ title, theme = "primary", variant = "filled", className }) => {
  // Theme color sets
  const colors = {
    primary: {
      bg: "bg-primary",
      text: "text-white",
      border: "border-primary",
      light: "bg-primary-100 text-primary-700",
    },
    secondary: {
      bg: "bg-secondary",
      text: "text-white",
      border: "border-secondary",
      light: "bg-secondary-50 text-secondary",
    },
    danger: {
      bg: "bg-red-500",
      text: "text-white",
      border: "border-red-500",
      light: "bg-red-100 text-red-700",
    },
  };

  // Variants logic
  const variantStyles = {
    filled: `${colors[theme].bg} ${colors[theme].text}`,
    outline: `bg-transparent border ${colors[theme].border} text-${theme}-500`,
    light: `${colors[theme].light}`,
  };

  return (
    <button
      className={`${className} px-20 py-4 rounded-full shadow-xl text-2xl font-primary font-2xl font-semibold border-2 transition duration-200 ${variantStyles[variant]}`}
    >
      {title}
    </button>
  );
};

export default Button;
