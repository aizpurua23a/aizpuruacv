import React from 'react';
import styled from 'styled-components';
import clockLogo from '../../assets/clock.png'


const ProjectsWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray_light};
  border-right: 1px solid ${props => props.theme.gray_light};
  display: flex;
  padding: 64px 8px 56px 0;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
    padding: 32px 8px 32px 8px;
  }
`

const VerticalCaption = styled.span`
  color: gray;
  font-size: 32px;
  text-align: center;
  writing-mode: vertical-rl;
  @media (max-width: ${props => props.theme.mobile_size}) {
    writing-mode: horizontal-tb;
    margin-bottom: 48px;
  }
`
const ProjectsText = styled.div`
  margin-left: 48px;
  flex-grow: 1;
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-left: 0;
  }
`
const Project = styled.div`
  margin-bottom: ${props => props.marginBottom};
`

const ProjectImage = styled.img`
height: ${props => props.size};
`

const ProjectName = styled.h3`
  {
  margin: ${props => props.marginTop} 0;
  font-weight: normal;
  span {
    color: gray;
    font-size: 0.8em;
    margin-left: 16px;
  }
`

const KeyPoints = styled.div`
`

const Projects = function(props) {
  return (
    <ProjectsWrapper>
      <VerticalCaption pos={'left'}>Projects</VerticalCaption>
      <ProjectsText>
        <Project marginBottom={'48px'}>
          <a href="https://aizpurua23a.github.io/cloeck/" target='_balnk'><ProjectImage size={'70px'} src={clockLogo}/></a>
          <ProjectName marginTop={'16px'}> React-Redux Clock</ProjectName>
          <KeyPoints>
            <p>I grew up reading (and loving) sci-fi movies and books. That's why, when learning a new framework, I like to build stuff that, while not very useful, may be at least interesting.
            Features:</p>           
            <ul>
              <li>React-Redux <a href="https://github.com/aizpurua23a/cloeck">Front End</a></li>
              <li>npm/yarn package managers</li>
              <li><a href="">Shannon </a>optimized clock-calendar!</li>
            </ul>
          </KeyPoints>
        </Project>
       
      </ProjectsText>
    </ProjectsWrapper>
  );
};

export default Projects
