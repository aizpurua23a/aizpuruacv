import React from 'react';
import styled from 'styled-components';
import tecnunLogo from '../../assets/tecnun.png'
import UOCLogo from '../../assets/uoc.png'

import CodeBarLogo from '../../assets/codebar.png'
import TOPLogo from '../../assets/theOdinProject.png'
import HackerRankLogo from '../../assets/hackerrank.png'
import FreeCodeCampLogo from '../../assets/freeCodeCamp.png'



const EducationWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray_light};
  border-left: 1px solid ${props => props.theme.gray_light};
  padding: 80px 8px 80px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column-reverse;
  }
`
const University = styled.div`
  text-align: center;
  flex-basis: 47%;
`
const EduCaption = styled.span`
  color: gray;
  font-size: 32px;
  text-align: center;
  writing-mode: vertical-rl;
  flex-basis: 6%;
  @media (max-width: ${props => props.theme.mobile_size}) {
    writing-mode: horizontal-tb;
    margin-bottom: 32px;
  }
`
const UniLogo = styled.img`
  height: ${props => props.size}
`
const UniInfo = styled.div`
`
const UniTitle = styled.h3`
  font-weight: normal;
  span{
    color: gray;
    font-size: 0.8em;
  }
`
const UniDesc = styled.p``

const Education = function(props) {
  return (
    <div>
    <EducationWrapper>
      
    <University>
        <UniLogo size={'40px'} src={CodeBarLogo}/>
        <UniInfo>
          <UniTitle>CodeBar<br/></UniTitle>
          <UniDesc>LGBTQ friendly coding coaching.</UniDesc>
        </UniInfo>
      </University>

      <University>
        <UniLogo size={'40px'} src={TOPLogo}/>
        <UniInfo>
          <UniTitle>The Odin Project<br/></UniTitle>
          <UniDesc>Front, Back and DataBase stuff.</UniDesc>
        </UniInfo>
      </University>

      <University>
        <UniLogo size={'40px'} src={HackerRankLogo}/>
        <UniInfo>
          <UniTitle>HackerRank<br/></UniTitle>
          <UniDesc>Python and SQL</UniDesc>
        </UniInfo>
      </University>

      <University>
        <UniLogo size={'25px'} src={FreeCodeCampLogo}/>
        <UniInfo>
          <UniTitle>freeCodeCamp<br/></UniTitle>
          <UniDesc>React, Angular and Bash</UniDesc>
        </UniInfo>
      </University>

      <EduCaption>Programming</EduCaption>
    </EducationWrapper>
    <EducationWrapper>
    <University>
      <UniLogo size={'100px'} src={tecnunLogo}/>
      <UniInfo>
        <UniTitle>Tecnun - University of Navarray<br/><span>2012-2016</span></UniTitle>
        <UniDesc>Bachelor of Science (BSc), Computer Electronic Engineering</UniDesc>
      </UniInfo>
    </University>
    <University>
      <UniLogo size={'100px'} src={UOCLogo}/>
      <UniInfo>
        <UniTitle>Open University of Catalunya<br/><span>2018-2020</span></UniTitle>
        <UniDesc>Mathematics and Data Science</UniDesc>
      </UniInfo>
    </University>
    <EduCaption>Formal Education</EduCaption>
  </EducationWrapper>
  </div>
  );
};

export default Education;
