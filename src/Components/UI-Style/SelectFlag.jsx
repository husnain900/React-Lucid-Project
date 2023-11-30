import React, { useState } from "react";

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "English", flag: "Assets/img/usa.svg" },
    { label: "Arabic", flag: "Assets/img/kawait.png" },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={() => handleOptionSelect(null)}>
        {selectedOption ? (
          <img src={selectedOption.flag} alt={selectedOption.label} />
        ) : (
          "Select an option"
        )}
      </div>
      <div className={`options ${selectedOption ? "hidden" : ""}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => handleOptionSelect(option)}
          >
            <img src={option.flag} alt={option.label} />
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
