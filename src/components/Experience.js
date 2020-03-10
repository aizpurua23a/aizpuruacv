import React from 'react';
import styled from 'styled-components';
import ceitLogo from '../../assets/ceit.png'
import incotecLogo from '../../assets/incotec.png'
import leytonLogo from '../../assets/leyton.png';

const ExperienceWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray_light};
  border-right: 1px solid ${props => props.theme.gray_light};
  display: flex;
  padding: 64px 8px 56px 0;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
    padding: 32px 8px 32px 8px;
  }
`
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
const ExperienceText = styled.div`
  margin-left: 48px;
  flex-grow: 1;
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-left: 0;
  }
`
const Company = styled.div`
  margin-bottom: ${props => props.marginBottom};
`
const Project = styled.div`
  margin-bottom: ${props => props.marginBottom};
`


const CompanyTitle = styled.h3`
  margin: ${props => props.marginTop} 0;
  font-weight: normal;
  span {
    color: gray;
    font-size: 0.8em;
    margin-left: 16px;
  }
`
const CompanyImage = styled.img`
  height: ${props => props.size};
`
const ExperienceListWrapper = styled.div`
`

const MyProjects = function(props) {
  return(
    <ProjectsWrapper>
      <VerticalCaption pos={'left'}>My Projects</VerticalCaption>
      <Project>

      </Project>
    </ProjectsWrapper>
  )
}

const Experience = function(props) {
  return (
    <ExperienceWrapper>
      <VerticalCaption pos={'left'}>Experience</VerticalCaption>
      <ExperienceText>
        <Company marginBottom={'48px'}>
          <a href='https://www.leyton.com/en/usa/home' target='_balnk'><CompanyImage size={'30px'} src={leytonLogo}/></a>
          <CompanyTitle marginTop={'16px'}> Team Lead for R&D Consulting <span>2019-2020</span></CompanyTitle>
          <ExperienceListWrapper>
            <ul>
              <li>Responsible for team objectives. </li>
              <li>Implemented Scrum framework for consulting (planning, retrospectives, daily stand-ups). </li>
              <li>Worked with many top50 Barcelona based Tech Startups, while documenting their R&D. </li>
              <li>Learned a whole lot about web development understand and explain code from our clients. </li>
            </ul>
          </ExperienceListWrapper>
        </Company>
        <Company marginBottom={'64px'}>
          <a href='http://www.incotec.es/en/' target='_balnk'><CompanyImage size={'60px'} src={incotecLogo}/></a>
          <CompanyTitle marginTop={'10'}> R&D Consultant <span>2016-2018</span></CompanyTitle>
          <ExperienceListWrapper>
            <ul>
              <li>Developed team and collaborative skills while learning a trade.</li>
              <li>Incremented my learning speed to keep up with clients' tech.</li>
              <li>Learned to work in a fast paced, client driven environment.</li>
            </ul>
          </ExperienceListWrapper>
        </Company>
        <Company marginBottom={'0'}>
          <a href='https://www.ceit.es/es/' target='_balnk'><CompanyImage size={'55px'} src={ceitLogo}/></a>
          <CompanyTitle marginTop={'16px'}> Python and C++ Developer <span>2015-2016</span></CompanyTitle>
          <ExperienceListWrapper>
            <ul>
              <li>Programming (c++)</li>
              <li>Data Structures</li>
              <li>Software Designing</li>
            </ul>
          </ExperienceListWrapper>
        </Company>
      </ExperienceText>
    </ExperienceWrapper>
  );
};

export default Experience;
