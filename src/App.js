import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work , CompetitiveProgrammingAchievements} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <CompetitiveProgrammingAchievements/>
    <Work />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
