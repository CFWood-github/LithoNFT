import React from 'react';
import Header from "./header";
import Right from "./right";
import Footer from "./footer"


export default function Layout({children}) {
  return (
    <>
      <Header/>
      <div className="page-content">
        {children}
      </div>
      <Right />
      <Footer />
    </>
  )
}
