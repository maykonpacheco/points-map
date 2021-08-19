import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";

const CartContext = createContext();

export function PointsProvider({ children }) {
  const [point, setPoint] = useState([])

  function createNewPoint (item) {
    setPoint(item)
  }

  console.log(point, 'cart')

  return (
    <CartContext.Provider
      value={{ point, setPoint, createNewPoint }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function usePoints() {
  const context = useContext(CartContext);

  return context;
}
