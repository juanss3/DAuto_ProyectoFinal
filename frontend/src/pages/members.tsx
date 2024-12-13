import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
    const products = [
        { id: 1, name: "Membresía Carro", price: 100000, imageUrl: "/img/carro.png" },
        { id: 2, name: "Membresía Camioneta", price: 120000, imageUrl: "/img/camioneta.png" },
        { id: 3, name: "Membresía C", price: 180000, imageUrl: "/img/c.png" }
    ];

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center min-h-screen">
            {products.map((product) => (
                <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/productDetail/${product.id}`}>
                        <div className="h-56 bg-gray-100 rounded-t-lg">
                            <img className="h-full w-full object-contain" src={product.imageUrl} alt={product.name} />
                        </div>
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to={`/productDetail/${product.id}`}>
                            <div className="flex items-center justify-center w-full">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </div>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center justify-center w-full">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductCard;
