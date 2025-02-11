import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const hanldeSubmint = () => {
    const value = inputRef.current?.value;
    if (value) {
      console.log(`Producto agregado: ${value}`);
      alert(`Producto agregado: ${value}`);
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Nombre del producto. ej. manzana" />
      <button onClick={hanldeSubmint}>Agregar al carrito</button>
    </div>
  );
};
