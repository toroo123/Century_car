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
                Century Car
              </NavbarBrand>
              <button
                  aria-expanded={navbarCollapse}
                  className={classnames("navbar-toggler navbar-toggler", {
                    toggled: navbarCollapse,
                  })}
                  onClick={toggleNavbarCollapse}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
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
                  <NavLink
                      to="/landing-page"
                  >
                    Нэвтрэх
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
                {/*<div className="fog-low">*/}
                {/*  <img alt="..." src={require("assets/img/fog-low.png")} />*/}
                {/*</div>*/}
                {/*<div className="fog-low right">*/}
                {/*  <img alt="..." src={require("assets/img/fog-low.png")} />*/}
                {/*</div>*/}
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
                      src={require("assets/img/faces/joe-gardner-2.jpg")}
                  />
                </div>
                <div className="name">
                  <h4 className="title">
                    Jane Faker <br />
                  </h4>
                  <h6 className="description">Music Producer</h6>
                </div>
              </div>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <p>
                    An artist of considerable range, Jane Faker — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                    and records all of his own music, giving it a warm, intimate
                    feel with a solid groove structure.
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
            fast buy
          </h6>
        </div>
      </>
  );
}

export default IndexNavbar;
