import Header from '../../Organisms/Header/Header'
import Footer from "../../Organisms/Footer/Footer";
import React from "react";
function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
export default Layout;