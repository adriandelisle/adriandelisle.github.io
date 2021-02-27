import React from 'react'

import styled from 'styled-components'

import { Anchor } from 'components/anchor'
import { Attribution } from 'components/attribution'
import { Heading, HeadingVariant } from 'components/heading'
import { Root, Header, Footer } from 'components/layout'
import { SocialIcon } from 'components/social-icon'
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 450px;

  @media only screen and (max-width: 450px) {
    width: 350px;
    padding: 0 16px;
  }
`

const HeroSection = styled.div``

const ProjectSection = styled.div`
  margin-top: 32px;
`

const IndexPage: React.FC = () => (
  <Root>
    <Header />
    <Content>
      <HeroSection>
        <Heading>Adrian De&nbsp;Lisle</Heading>
        <Text>
          I&apos;m a Canada based software developer and photographer. Click an icon below to learn more about my
          profressional work, GitHub, photography, or timelapses.
        </Text>

        <SocialLinksList>
          <SocialIcon url="https://www.linkedin.com/in/adriandelisle/">
            <LinkedInSvg />
          </SocialIcon>
          <SocialIcon url="https://github.com/adriandelisle">
            <GitHubSvg />
          </SocialIcon>
          <SocialIcon url="https://www.flickr.com/photos/adriandelisle/">
            <FlickrSvg />
          </SocialIcon>
          <SocialIcon url="https://www.youtube.com/c/AdrianDeLisle">
            <YoutubeSvg />
          </SocialIcon>
        </SocialLinksList>
      </HeroSection>
      <ProjectSection>
        <Heading variant={HeadingVariant.H2}>Projects</Heading>
        <Text>
          <Anchor href="https://intensifies-transparency.adriandelisle.dev/" target="_blank" rel="noreferrer noopener">
            Intensifies Transparency
          </Anchor>
          <Text>
            Create a silly slack emoji that bounces around with a transparent background just by uploading an image.
          </Text>
        </Text>
      </ProjectSection>
    </Content>
    <Footer>
      <Text>
        Made by: Adrian De Lisle.{' '}
        <Anchor href="https://github.com/adriandelisle/adriandelisle.github.io">Source on GitHub</Anchor>
      </Text>
      <Attribution>
        Uses <Anchor href="https://fontawesome.com/license">Font Awesome Icons</Anchor>
      </Attribution>
    </Footer>
  </Root>
)

export default IndexPage
