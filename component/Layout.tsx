import React from 'react';
import Link from 'next/link';
import Header from "./header";
import Footer from "./footer";

const AppLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header/>
            <section>
                {children}
            </section>
            <Footer/>
        </div>
    );
};

export default AppLayout;