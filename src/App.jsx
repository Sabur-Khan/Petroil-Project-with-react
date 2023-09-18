import { useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Bannner/Banner';
import BannerBottompart from './Components/BannerBottomPart/BannerBottompart';
import Supplier from './Components/SupplierImage/Supplier';
import Services from './Components/Services/Services';
import Lernmore from './Components/Lernmore/Lernmore';
import BrandSection from './Components/BrandSection/BrandSection';
import WorkSection from './Components/WorkSection/WorkSection';
import MapsSection from './Components/MapsSection/MapsSection';
import MembarshipTitle from './Components/MembarshipTitle/MembarshipTitle';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyright/Copyright';

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerBottompart></BannerBottompart>
      <Supplier></Supplier>
      <Services></Services>
      <Lernmore></Lernmore>
      <BrandSection></BrandSection>
      <WorkSection></WorkSection>
      <MapsSection></MapsSection>
      <MembarshipTitle></MembarshipTitle>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  )
}

export default App
