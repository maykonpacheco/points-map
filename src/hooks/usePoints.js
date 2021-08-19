import React, { useState, createContext, useContext } from 'react';

const CartContext = createContext();

export function PointsProvider({ children }) {
  const [point, setPoint] = useState([]);
  const [pointSelected, setPointSelected] = useState(null);

  return (
    <CartContext.Provider
      value={{
        point,
        setPoint,
        pointSelected,
        setPointSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(CartContext);

  return context;
}
