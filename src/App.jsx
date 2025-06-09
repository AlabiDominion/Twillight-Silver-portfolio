import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/styles.css";
import "./styles/loader.css";
import "./styles/Animation.css";
import DesktopHome from './pages/DesktopView/DesktopHome';
import DesktopAbout from './pages/DesktopView/DesktopAbout';
import DesktopService from './pages/DesktopView/DesktopServices';
import DesktopPortfolio from './pages/DesktopView/DesktopPortfolio';
import DesktopContact from './pages/DesktopView/DesktopContact';
import TabletHome from './pages/TabletView/TabletHome';
import TabletAbout from './pages/TabletView/TabletAbout';
import TabletService from './pages/TabletView/TabletServices';
import TabletPortfolio from './pages/TabletView/TabletPortfolio';
import TabletContact from './pages/TabletView/TabletContact';
import MobileHome from './pages/MobileView/MobileHome';
import MobileAbout from './pages/MobileView/MobileAbout';
import MobileService from './pages/MobileView/MobileServices';
import MobilePortfolio from './pages/MobileView/MobilePortfolio';
import MobileContact from './pages/MobileView/MobileContact';




function App() {
  const [loading, setloading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1280);

  useEffect(()=>{
    const LoaderTimer = setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div></div>
      ) : isMobile ? (
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element= {<MobileHome/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      ) : isTablet ? (
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element= {<TabletHome/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element= {<DesktopHome/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
