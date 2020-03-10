import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import {Github} from 'styled-icons/boxicons-logos/Github'
import {Envelope} from 'styled-icons/boxicons-regular/Envelope'
import {LinkedinSquare} from 'styled-icons/boxicons-logos/LinkedinSquare'

const FooterWrapper = styled.div`
  background-color: #DCDCDC;
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  background-color: #DCDCDC;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
  }
`
const InfoLink = styled.div`
  flex-basis: 33%;
  text-align: ${props => props.pos};
  a {
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.mobile_size}) {
    text-align: left;
    margin-bottom: ${props => props.isMargin ? '16px' : '0' }
  }
`

const Footer = function(props) {
  return (
    <FooterWrapper>
      <Container>
        <InfoWrapper>
          <InfoLink pos={'left'} isMargin>
            <a href='mailto:aizpurua23a@gmail.com'><Envelope size="40"/>  aizpurua23a@gmail.com</a>
          </InfoLink>
          <InfoLink pos={'center'} isMargin>
            <a href='https://github.com/aizpurua23a'><Github size="40"/>  aizpurua23a</a>
          </InfoLink>
          <InfoLink pos={'right'}>
            <a href='https://www.linkedin.com/in/adri%C3%A1n-aizpurua-7862a967/'><LinkedinSquare size="40"/>  Adrián Aizpurua</a>
          </InfoLink>
        </InfoWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
