import React from "react";

import { About, Footer, Header, Skills, Research, Testimonial, Work , CompetitiveProgrammingAchievements} from "./container";
import { Navbar } from "./components";
import "./App.scss";
// import Research from "./container/Research/Research";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <CompetitiveProgrammingAchievements/>
    <Research/>
    <Work />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
