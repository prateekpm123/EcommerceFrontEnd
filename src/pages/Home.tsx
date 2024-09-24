import { useProjectContext } from '@/contexts/ProjectContext';
import React, { Suspense, useEffect, useState } from 'react';
import { ProductComp } from './ProductComp';
import { NavBar } from './NavBar';
import { ProductDto } from '@/dtos/ProductDto';
import ProductController from '@/controller/ProductController';

const Home: React.FC = () => {
    const projectData =  useProjectContext();
    const email = projectData.userContext?.email;
    const productController = new ProductController();
    const [allProductData, setAllProductData] = useState<ProductDto[]>([]);
    
    // This useEffect runs only once when the component first renders.
    useEffect(() => {
        const getAllProductData = async () => {
            const data = await productController.fetchAllProducts();
            setAllProductData(data);
        }
        getAllProductData();
    },[]);

    return (
        <>
            <NavBar></NavBar>
            <p>Welcome {email || "Sign In"}</p>
            <div className="grid sm:grid-cols-1 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-5 justify-items-center">
                <Suspense>
                {
                allProductData.map((_, i) => (
                // Array.from({ length: 10 }).map((_, i) => (
                    <ProductComp key={i} productData={allProductData[i]} />
                ))}
                </Suspense>
                
            </div>
        </>
    );
};

export default Home;