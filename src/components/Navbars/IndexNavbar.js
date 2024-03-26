import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container, Row, Col,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [main, setMain] = React.useState(true);
  const [profile, setProfile] = React.useState(false);
  const [sign, setSign] = React.useState(false);
  const [reg, setReg] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const toProfile = () => {
    setProfile(true);
    setMain(false);
    setSign(false);
  }
  const toHome = () => {
    setProfile(false);
    setMain(true);
    setSign(false);
  }
  const login = () => {
    setProfile(false);
    setMain(false);
    setSign(true);
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    // setProfile(true);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
      <>
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                  data-placement="bottom"
                  title="Coded by Creative Tim"
              >
                <span onClick={() => {toHome()}}>Century Car</span>
              </NavbarBrand>
            </div>
            <Collapse
                className="justify-content-end"
                navbar
                isOpen={navbarCollapse}
            >
              <Nav navbar>
                <NavItem>
                  <NavLink onClick={() => {toProfile()}}>
                    Бидний тухай
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <p onClick={() => {login()}}>Нэвтрэх</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                      className="btn-round"
                      color="info"
                      href="/register-page"
                  >
                    Бүртгүүлэх
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>

        </Navbar>
        <div
            className="page-header section-dark"
            style={{
              backgroundImage:
                  "url(" + require("assets/img/background.jpg") + ")",
            }}
        >
          <div className="filter" />
          <div className="content-center">
            {main ?
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Century Car</h1>
              </div>
              <h2 className="presentation-subtitle text-center">
                Баталгаат машин худалдааны цогц системд тавтай морил!
              </h2>

            </Container>
            : null}

            {profile && (<Container>
              <div className="owner">
                <div className="avatar">
                  <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/faces/logo.png")}
                  />
                </div>
                <div className="name">
                  <h2 className="title">
                    Бидний тухай <br />
                  </h2>
                </div>
              </div>
              <Row>
                <Col className="ml-auto mr-auto text-center presentation-subtitle" md="6">
                  <p>
                    Манай сайт нь оношилгоонд орсон баталгаат автомашин зарах болон худалдаж авах сонирхолтой хүмүүс зочилоход тохиромжтой онлайн машин худалдааны сайт юм.
                  </p>
                </Col>
              </Row>
            </Container>)
            }
            {sign && (<Container>
              <div className="logind">
                <input placeholder="UserName"/>
              </div>
              <Row>
                <Col className="ml-auto mr-auto text-center presentation-subtitle" md="6">
                  <p>
                    Манай сайт нь оношилгоонд орсон баталгаат автомашин зарах болон худалдаж авах сонирхолтой хүмүүс зочилоход тохиромжтой онлайн машин худалдааны сайт юм.
                  </p>
                </Col>
              </Row>
            </Container>)
            }


          </div>
          <div
              className="moving-clouds"
              style={{
                backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
              }}
          />
          <h6 className="category category-absolute">
            CenturyCar
          </h6>
        </div>
      </>
  );
}

export default IndexNavbar;
