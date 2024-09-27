import React, { createContext, useState } from 'react';

export const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
  const [discountActive, setDiscountActive] = useState(false);

  const activateDiscount = () => {
    setDiscountActive(true);
  };

  return (
    <DiscountContext.Provider value={{ discountActive, activateDiscount }}>
      {children}
    </DiscountContext.Provider>
  );
};