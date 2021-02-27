import React from 'react'

import styled from 'styled-components'

const StyledAnchor = styled.a`
  color: #000;
  text-decoration: none;
  text-transform: none;

  :visited {
    color: #000000;
  }
`

const SvgContainer = styled.div`
  height: 2rem;
  width: 2rem;
  margin: 1rem;
`

export interface SocialIconProps {
  url: string
  children: React.ReactNode
}

export const SocialIcon = ({ url, children }: SocialIconProps) => (
  <StyledAnchor href={url} target="_blank" rel="noreferrer noopener">
    <SvgContainer>{children}</SvgContainer>
  </StyledAnchor>
)
