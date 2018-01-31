import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Uncontainer from '../src/Uncontainer'
import { Container, Header, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const uncontainerStyle = {
  background: '#f9f9f9',
  paddingTop: '1em',
  paddingBottom: '1em',
  border: '1px solid #eee'
} 

storiesOf('Uncontainer', module).add('default', () => (
  <Container>
    <Header
      content="Uncontainer"
      subheader="Background expander from inside of Containers"
    />
    <p>
      Raindrops on roses and whiskers on kittens, bright copper kettles and warm
      woolen mittens, brown paper packages tied up with strings, these are a few
      of my favorite things.
    </p>
    <Uncontainer style={uncontainerStyle}>
      <p>
        Cream colored ponies and crisp apple strudels, door bells and sleigh
        bells and schnitzel with noodles. Wild geese that fly with the moon on
        their wings. these are a few of my favorite things. Girls in white
        dresses with blue satin sashes, snowflakes that stay on my nose and
        eyelashes, silver white winters that melt into springs, these are a few
        of my favorite things.
      </p>
    </Uncontainer>
    <p>
      When the dog bites, when the bee stings, when I'm feeling sad, I simply
      remember my favorite things, and then I don't feel so bad. Raindrops on
      roses and whiskers on kittens, bright copper kettles and warm woolen
      mittens, brown paper packages tied up with strings, these are a few of my
      favorite things.
    </p>
  </Container>
))
