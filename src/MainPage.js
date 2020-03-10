import React, { Component } from 'react';
import { Container } from 'styled-bootstrap-grid';
import CvFile from './components/CvFile.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Intro from './components/Intro.js';
import Projects from "./components/Projects.js";

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Intro />
        <Projects />
        <Education />
        <Experience />
        <CvFile />
      </Container>
    );
  }
}

export default MainPage;
