// CarSaleCard.tsx
import React from "react";

// Definimos las propiedades que recibirá el componente
interface CarSaleCardProps {
  name: string;
  carDetails: string;
  price: number;
  dateofsale: string;
}

const CarSaleCard: React.FC<CarSaleCardProps> = ({
  name,
  carDetails,
  price,
  dateofsale,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-gray-600">{carDetails}</p>
      <p className="text-gray-900 font-bold mt-2">
        Precio: ${price.toLocaleString()}
      </p>
      <p className="text-gray-500 mt-1">
        Fecha de venta: {new Date(dateofsale).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CarSaleCard;
