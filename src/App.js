import React from "react";

import "./styles/main.css";

import PageHeader from "./components/PageHeader";
import DiscoverAmazingPlaces from "./components/DiscoverAmazingPlaces";
import Benefits from "./components/Benefits";
import Places from "./components/Places";
import Tours from "./components/Tours";
import TopPlaces from "./components/TopPlaces";
import VideoBlock from "./components/VideoBlock";
import PageFooter from "./components/PageFooter";

import TestBlock from "./components/TestBlock";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <DiscoverAmazingPlaces />
      <Benefits />
      <Places />
      <Tours />
      <TopPlaces />
      <VideoBlock />
      <PageFooter />
    </div>
  );
}

export default App;
