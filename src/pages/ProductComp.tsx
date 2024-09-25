import { ProductDto } from "@/dtos/ProductDto";
import React from "react";

interface IProductCompInputs {
    productData: ProductDto;
}

export const ProductComp: React.FC<IProductCompInputs> = ({ productData}) => {
    return (
        <div className="flex-block items-start justify-center border-2 border-slate-500 rounded-md h-80 w-60 sm:w-200 bg-slate-700 mt-8">
            <img src="" className="h-48 w-full"></img>
            <p className="flex justify-center text-gray-200">{productData.name}</p>
            <p className="flex justify-start text-gray-200">{productData.description}</p>
        </div>
    )
}