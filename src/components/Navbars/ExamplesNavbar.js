import React from "react";
import classnames from "classnames";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

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

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
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
                {/*<NavLink onClick={() => {toProfile()}}>*/}
                {/*  Бидний тухай*/}
                {/*</NavLink>*/}
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

  );
}

export default ExamplesNavbar;
