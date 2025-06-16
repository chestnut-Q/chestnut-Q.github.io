import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Page from "./components/Page/Page";
import Misc from "./components/Page/Misc";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <HashRouter basename="/">
        <ScrollToTop />
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5em 1em",
            boxShadow: isScrolled ? "0 1px 1px rgba(0, 0, 0, 0.1)" : "none",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <div>Ruoyu Qin</div>
          <div>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  href="/#/home"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    marginLeft: "20px",
                  }}
                  onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                  onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  href="/#/misc"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    marginLeft: "20px",
                  }}
                  onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                  onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
                >
                  Misc
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Routes>
            <Route path="/home" element={<Page />} exact />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
