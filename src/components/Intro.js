import React from 'react';
import styled from 'styled-components';
import profilePic from '../../assets/adri.jpg';

const IntroWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 32px 32px 32px;
  border-left: 1px solid ${props => props.theme.gray_light};
  border-bottom: 1px solid ${props => props.theme.gray_light};
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
  }
`
const IntroPicWrapper = styled.div`
  height: 300px;
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-bottom: 16px;
    text-align: center;
    background-color: #F5E1C8;
  }
`
const IntroPic = styled.img`
  height: 100%;
`
const IntroTextWrapper = styled.div`
  padding-left: 32px;
`
const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
`
const IntroParagraph = styled.p`
  :first-child{
    margin-top: 0;
  }
  @media (max-width: ${props => props.theme.tablet_small}) {
    margin-bottom: 16px;
  }
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-top: ${props => props.first ? '32px' : 0};
  }
`

const Intro = function(props) {
  return (
    <IntroWrapper>
      <IntroPicWrapper>
        <IntroPic src={profilePic} alt="me" />
      </IntroPicWrapper>
      <IntroTextWrapper>
        <IntroText>
          <IntroParagraph first>Hi! I'm Adrián. <b>I'll be blunt. I'm looking for a job in programming.</b> My passions are automation and building complex systems. <br/>
          I've been curating my programming skills since my university times. I spent some time in consulting before I found out my passion for programing and tech. Meanwhile, I developed a personal touch approach to team leadership and leadership through vulnerability and honesty.</IntroParagraph>
          <IntroParagraph>During late 2019 I discovered <a href="https://www.codebar.io">CodeBar</a>, and shortly after, I quit my job to commit to programming and tech. I do Python and Javascript, while I also know some other stuff (Are you curious? Check it below!)</IntroParagraph>
          <IntroParagraph>My hobbies revolve around science and entrepreneurship. I tried to launch a company - Check the <a href="https://subyware.com/">web</a> I built! - and I study Physics in my free time. Oh, I also collaborate in a podcast. Check it out <a href="https://curvapodcast.com">here!</a></IntroParagraph>
        </IntroText>
      </IntroTextWrapper>
    </IntroWrapper>
  );
};

export default Intro;
