import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPage from "views/examples/LandingPage.js"


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
      <>
        <IndexNavbar />
{/*<LandingPage />*/}
      </>
  );
}

export default Index;
