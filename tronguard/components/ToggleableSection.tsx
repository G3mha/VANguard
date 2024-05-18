import React, { useState } from 'react';

const ToggleableSection = ({ title, children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSection = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <h2 onClick={toggleSection} style={{ cursor: 'pointer' }}>
        {title} {isToggled ? '▲' : '▼'}
      </h2>
      {isToggled && <div>{children}</div>}
    </div>
  );
};

export default ToggleableSection;
