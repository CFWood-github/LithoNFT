import React from 'react';
import Header from "./header";
import Right from "./right";
import Footer from "./footer"


export default function Layout({children, account, setAccount}) {
  return (
    <>
      <Header account={account} setAccount={setAccount} />
      <div className="page-content">
        {children}
      </div>
      <Right />
      <Footer />
    </>
  )
}
