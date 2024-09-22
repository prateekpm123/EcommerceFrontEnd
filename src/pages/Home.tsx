import { useProjectContext } from '@/contexts/ProjectContext';
import React from 'react';
import { ProductComp } from './ProductComp';
import { NavBar } from './NavBar';

const Home: React.FC = () => {
    const projectData =  useProjectContext();
    const email = projectData.userContext?.email
    return (
        <>
            <NavBar></NavBar>
            <p>Welcome {email}</p>
            <div className="grid sm:grid-cols-1 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-6 justify-items-center">
                {Array.from({ length: 10 }).map((_, i) => (
                    <ProductComp key={i} />
                ))}
            </div>
        </>
    );
};

export default Home;