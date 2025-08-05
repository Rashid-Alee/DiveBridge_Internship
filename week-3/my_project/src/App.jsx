import Header , {Footer, NetflixCards} from "./components/NetflixCards";
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <Header/>
      <NetflixCards />
      {/* <NetflixCards />
      <NetflixCards />
      <NetflixCards />
      <NetflixCards /> */}
      <Footer/>
    </Fragment>
  );
};

