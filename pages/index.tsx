import React from 'react'

import styled from 'styled-components'

import { Heading, HeadingVariant } from 'components/heading'
import { Root } from 'components/layout'
import { Text } from 'components/text'
import FlickrSvg from 'public/flickr-brands.svg'
import GitHubSvg from 'public/github-brands.svg'
import LinkedInSvg from 'public/linkedin-in-brands.svg'
import YoutubeSvg from 'public/youtube-square-brands.svg'

const SocialLinksList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SvgContainer = styled.div`
  height: 2rem;
  width: 2rem;
  margin: 1rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 280px;
`

const IndexPage: React.FC = () => (
  <Root>
    <Content>
      <Heading>Adrian De Lisle</Heading>
      <Text>
        I&apos;m a Canada based software developer. Click an icon below to learn more about my profressional work,
        GitHub, photography, or timelapses.
      </Text>
      <SocialLinksList>
        <a href="https://www.linkedin.com/in/adriandelisle/" target="_blank" rel="noreferrer noopener">
          <SvgContainer>
            <LinkedInSvg />
          </SvgContainer>
        </a>
        <a href="https://github.com/adriandelisle" target="_blank" rel="noreferrer noopener">
          <SvgContainer>
            <GitHubSvg />
          </SvgContainer>
        </a>
        <a href="https://www.flickr.com/photos/adriandelisle/" target="_blank" rel="noreferrer noopener">
          <SvgContainer>
            <FlickrSvg />
          </SvgContainer>
        </a>
        <a href="https://www.youtube.com/c/AdrianDeLisle" target="_blank" rel="noreferrer noopener">
          <SvgContainer>
            <YoutubeSvg />
          </SvgContainer>
        </a>
      </SocialLinksList>
      <Heading variant={HeadingVariant.H2}>Projects</Heading>
      <Text>
        <a href="https://intensifies-transparency.adriandelisle.dev/" target="_blank" rel="noreferrer noopener">
          Intensifies Transparency
        </a>
      </Text>
    </Content>
  </Root>
)

export default IndexPage
