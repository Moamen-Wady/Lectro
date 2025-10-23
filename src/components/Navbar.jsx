import { memo, useCallback, useLayoutEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default memo(function Navbar({ debounce, showMenu, hideMenu }) {
  useLayoutEffect(() => {
    const nvbht = document.getElementById("nvb").clientHeight;
    function addPadding() {
      document.getElementById("root").style.paddingTop = `${nvbht}px`;
    }
    function setCorrectHeight() {
      let lp = document.querySelectorAll(".lp");
      lp.forEach((item) => {
        let padding = window
          .getComputedStyle(item)
          .getPropertyValue("padding")
          .toString()
          .replace("px", "");
        let paddingValue = Number(padding);
        item.style.height = `${nvbht - paddingValue * 2}px`;
      });
    }
    function setUpperDimensions() {
      addPadding();
      setCorrectHeight();
    }
    setUpperDimensions();
    const debounceDimensions = debounce(() => setUpperDimensions(), 100);

    function d() {
      if (window.screen.width > 768) {
        let s = window.scrollY;
        let n = document.getElementById("nvb");
        let ch = document.getElementById("imgch");
        let edt = document.getElementById("edt");

        if (s > 1) {
          n.style.background = "#00395f";
          ch.setAttribute("src", "/logow.webp");
          ch.classList.remove("logoimg");
          ch.classList.add("replacelogoimg");
          edt.classList.remove("logoimg");
          edt.classList.add("replacelogoimg");
        } else {
          n.style.background =
            " radial-gradient(rgba(44, 44, 44, 0.5), rgb(128, 128, 128 ))";
          ch.setAttribute("src", "/logow2.webp");
          ch.classList.add("logoimg");
          ch.classList.remove("replacelogoimg");
          edt.classList.add("logoimg");
          edt.classList.remove("replacelogoimg");
        }
      }
    }

    window.onscroll = d;
    window.onresize = debounceDimensions;
    return () => ((window.onscroll = null), (window.onresize = null));
  }, [window.screen.width, window.innerWidth]);

  const prodshow = useCallback(() => {
    if (window.screen.width > 768) {
      let prodmm = document.getElementById("prodmm");
      prodmm.style.height = "auto";
      prodmm.style.padding = "1rem";
    }
  }, []);
  const prodhide = useCallback(() => {
    if (window.screen.width > 768) {
      let prodmm = document.getElementById("prodmm");
      prodmm.style.height = 0;
      prodmm.style.padding = 0;
    }
  }, []);
  const projshow = useCallback(() => {
    if (window.screen.width > 768) {
      let projmm = document.getElementById("projmm");
      projmm.style.height = "auto";
      projmm.style.padding = "1rem";
    }
  }, []);
  const projhide = useCallback(() => {
    if (window.screen.width > 768) {
      let projmm = document.getElementById("projmm");
      projmm.style.height = 0;
      projmm.style.padding = 0;
    }
  }, []);
  const servshow = useCallback(() => {
    if (window.screen.width > 768) {
      let servmm = document.getElementById("servmm");
      servmm.style.height = "auto";
      servmm.style.padding = "1rem";
    }
  }, []);
  const servhide = useCallback(() => {
    if (window.screen.width > 768) {
      let servmm = document.getElementById("servmm");
      servmm.style.height = 0;
      servmm.style.padding = 0;
    }
  }, []);
  const mobprodtrigger = useCallback(() => {
    if (window.screen.width <= 768) {
      let prodmm = document.getElementById("prodmm");
      let projmm = document.getElementById("projmm");
      projmm.style.display = "none";
      if (prodmm.computedStyleMap().get("display").value == "none") {
        prodmm.style.display = "flex";
      } else {
        prodmm.style.display = "none";
      }
    }
  }, []);
  const mobprojtrigger = useCallback((e) => {
    if (window.screen.width <= 768) {
      e.preventDefault();
      let projmm = document.getElementById("projmm");
      let prodmm = document.getElementById("prodmm");
      prodmm.style.display = "none";
      if (projmm.computedStyleMap().get("display").value == "none") {
        projmm.style.display = "flex";
      } else {
        projmm.style.display = "none";
      }
    }
  }, []);

  return (
    <div className="nvbr" id="nvb">
      <div className="nvbrcont">
        <span className="nvbrlogo" id="lcc">
          <Link to="/" className="logop">
            <p>
              <img
                loading="eager"
                src="/logow2.webp"
                alt=""
                id="imgch"
                className="logoimg"
              />
            </p>
          </Link>
        </span>
        <span id="vbtn" onClick={showMenu}>
          <img loading="eager" src="/mbar.webp" className="mImg" alt="" />
        </span>
        <ul className="nvbrul1" id="nvbrul1">
          <li className="l" id="hbtn" onClick={hideMenu}>
            <Link to="#" className="lp">
              <p>
                <img loading="eager" src="/mbar.webp" className="mImg" alt="" />
              </p>
            </Link>
          </li>
          <li className="l">
            <Link to="/" className="lp">
              <p>Home</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
            </Link>
          </li>
          <li className="l">
            <Link to="/Aboutus" className="lp">
              <p>About Us</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
            </Link>
          </li>
          <li
            className="l prodmmcont"
            onMouseEnter={prodshow}
            onMouseLeave={prodhide}
          >
            <Link to="#" className="lp">
              <p>Products</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
              <button id="nvbprod" className="nvbrbtn" onClick={mobprodtrigger}>
                <img loading="eager" src="/r.webp" alt=" " />
              </button>
            </Link>
            <div className="prodmm" id="prodmm">
              <div className="prodh">
                <h1>Medium Voltage:</h1>
                <a href="#">Ring</a>
                <a href="#">Transformer</a>
              </div>
              <div className="prodh">
                <h1>Low Voltage:</h1>
                <h2>Busduct</h2>
                <Link to="/Products/lsbpro">
                  <strong>-</strong>LSB PRO
                </Link>
                <Link to="/Products/lsb2">
                  <strong>-</strong>LSB II
                </Link>
                <Link to="/Products/lsba">
                  <strong>-</strong>LSB A
                </Link>
                <Link to="/Products/llb">
                  <strong>-</strong>LLB
                </Link>
                <h2>Low Voltage Panels</h2>
                <h2>Fuses and Switches</h2>
              </div>
            </div>
          </li>
          <li
            className="l projmmcont"
            onMouseEnter={projshow}
            onMouseLeave={projhide}
          >
            <Link to="/Projects" className="lp">
              <p>Projects</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
              <button
                id="nvbproj"
                className="nvbrbtn"
                onClick={(e) => mobprojtrigger(e)}
              >
                <img loading="eager" src="/r.webp" alt=" " />
              </button>
            </Link>
            <div className="projmm" id="projmm">
              <h1>National & International</h1>
              <div className="projh">
                <ul>
                  <li>
                    <Link to="/Projects/Education">Education</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Gov">Governmental Org</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Villages">Villages</Link>
                  </li>
                  <li>
                    <Link to="#">Exhibitions</Link>
                  </li>
                </ul>
              </div>
              <div className="projh">
                <ul>
                  <li>
                    <Link to="/Projects/Factories">Factories</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Hotels">Hotels</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Towers">Towers</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Malls">Malls</Link>
                  </li>
                </ul>
              </div>
              <div className="projh">
                <ul>
                  <li>
                    <Link to="/Projects/TechCenters">Tech Centers</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Hospitals">Hospitals</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Banks">Banks</Link>
                  </li>
                  <li>
                    <Link to="/Projects/Etc">Etc</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="l" onMouseEnter={servshow} onMouseLeave={servhide}>
            <Link to="#" className="lp">
              <p>Services</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
            </Link>
            <div className="servmm" id="servmm">
              <div className="servh">
                <a href="#">Supply</a>
                <img loading="lazy" src="/supply.webp" alt="" />
                <a href="#">Test And Commisioning</a>
                <img loading="lazy" src="/test.webp" alt="" />
              </div>
              <div className="servh">
                <a href="#">Install</a>
                <img loading="lazy" src="/install.webp" alt="" />
                <a href="#">Value Engineering</a>
                <img loading="lazy" src="/valueEngineering.webp" alt="" />
              </div>
              <div className="servh">
                <a href="#">Maintenance</a>
                <img loading="lazy" src="/maintenance.webp" alt="" />
                <a href="#">Technical Support</a>
                <img loading="lazy" src="/technicalSupport.webp" alt="" />
              </div>
            </div>
          </li>
          <li className="l">
            <Link to="/Blog" className="lp">
              <p>Blog</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
            </Link>
          </li>
          <li className="l">
            <Link to="/Contact" className="lp">
              <p>Contact</p>
              <img loading="eager" src="/bluebg.webp" alt="" />
            </Link>
          </li>
        </ul>
        <span className="nvbrlogo" id="edc">
          <Link to="#" className="logop">
            <p>
              <img
                loading="eager"
                src="/edt.webp"
                alt=""
                id="edt"
                className="logoimg"
              />
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
});
