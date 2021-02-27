import React from 'react'

import styled from 'styled-components'

export enum HeadingVariant {
  H1,
  H2,
  H3,
}

interface HeadingProps {
  variant?: HeadingVariant
  children: string
}

const H1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 3rem;
  padding: 0;
  margin-top: 1em;
  margin-bottom: 1em;
`
const H2 = styled.h2`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 2rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`
const H3 = styled.h3`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.5rem;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`

export const Heading = ({ variant, children }: HeadingProps) => {
  switch (variant) {
    case HeadingVariant.H1: {
      return <H1>{children}</H1>
    }
    case HeadingVariant.H2: {
      return <H2>{children}</H2>
    }
    case HeadingVariant.H3: {
      return <H3>{children}</H3>
    }
    default: {
      return <H1>{children}</H1>
    }
  }
}
