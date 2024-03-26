import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="leftpanels">
          <div className="swiping">
            <img src={require("assets/img/pin-8-24.ico")} width="24px"/>
            <div className="filter">
              <div className="swipe">
                <div className="front">
                  <img src={require("assets/img/car1.jpg")}/>
                </div>
                <div className="texts">
                  <div className="gradient">
                    <div className="top">
                      <div className="name">Prius30'Gs</div>
                      <div className="yearGrade">2013/2020</div>
                    </div>
                    <div className="bottom">
                      <img src={require("assets/img/pin-8-24.ico")} width="24px"/>
                      <div className="location">Сонгинохайрхан</div>
                      <div className="phone">86980808</div>
                    </div>
                    <div className="comment">
                      Маш цэвэр, Сэвгүй, Нэг гараар унасан, ️️Суудлын бүрээс шалавчтай, ️Тос, масло Antifriz солисон.ориг яндантай мотор хроп батриа сайн
                    </div>
                  </div>
                </div>
                <div className="control-bar">
                  <div className="bttn left">
                    {/*<img src={require()}/>*/}
                  </div>
                  <div className="bttn top">

                  </div>
                  <div className="bttn right">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightpanels">
          <div className="header">
            <a>Buy car</a>
            <a>Sell car</a>
            <a>Info</a>
            <img src={require("assets/img/profile.jpg")}/>
          </div>
          <div className="buyCar">
            <div className="header">
              <div>

                <a>Liked cars</a>
                {/*<div className="line"></div>*/}
              </div>
              <div>
                <a>Messages</a>
                <div className="line"></div>
              </div>
            </div>
            <div className="deprecatedLine"></div>
            <div className="likedCars">
              <Row >
                <Col md="6">
                  <div className="likedCar">
                      <img src={require("assets/img/car1.jpg")} width="100%"/>
                    <div className="bar">
                      <div className="top">
                        <div className="name">Prius30'Gs</div>
                        <div className="yearGrade">2013/2020</div>
                      </div>
                      <div className="bottom">
                        <img src={require("assets/img/pin-8-24.ico")} width="24px"/>
                        <div className="location">Сонгинохайрхан</div>
                        <div className="phone">86980808</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="likedCar">
                      <img src={require("assets/img/car1.jpg")} width="100%"/>
                    <div className="bar">
                      <div className="top">
                        <div className="name">Prius30'Gs</div>
                        <div className="yearGrade">2013/2020</div>
                      </div>
                      <div className="bottom">
                        <img src={require("assets/img/pin-8-24.ico")} width="24px"/>
                        <div className="location">Сонгинохайрхан</div>
                        <div className="phone">86980808</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="likedCar">
                      <img src={require("assets/img/car1.jpg")} width="100%"/>
                    <div className="bar">
                      <div className="top">
                        <div className="name">Prius30'Gs</div>
                        <div className="yearGrade">2013/2020</div>
                      </div>
                      <div className="bottom">
                        <img src={require("assets/img/pin-8-24.ico")} width="24px"/>
                        <div className="location">Сонгинохайрхан</div>
                        <div className="phone">86980808</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="likedCar">
                      <img src={require("assets/img/car1.jpg")} width="100%"/>
                    <div className="bar">
                      <div className="top">
                        <div className="name">Prius30'Gs</div>
                        <div className="yearGrade">2013/2020</div>
                      </div>
                      <div className="bottom">
                        <img src={require("assets/img/pin-8-24.ico")} width="24px"/>
                        <div className="location">Сонгинохайрхан</div>
                        <div className="phone">86980808</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              {/*<div className="likedCar">*/}

              {/*</div>*/}
              {/*<div className="likedCar">*/}

              {/*</div>*/}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
