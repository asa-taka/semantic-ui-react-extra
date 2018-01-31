import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ButtonToolbar from '../src/ButtonToolbar'
import { Container, Header, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

// For Common Sample
const Sample = props => (
  <ButtonToolbar {...props}>
    <Button content="Single Button" />
    <Button.Group>
      <Button content="negative" negative />
      <Button content="default" />
      <Button content="positive" positive />
    </Button.Group>
    <Button.Group>
      <Button content="primary" primary />
      <Button content="secondary" secondary />
    </Button.Group>
    <Button icon="user" />
    <Button icon="group" content="Joined Groups" />
    <Button.Group primary>
      <Button icon="mail" />
      <Button icon="alarm" />
      <Button icon="announcement" />
    </Button.Group>
  </ButtonToolbar>
)

storiesOf('ButtonToolbar', module).add('default', () => (
  <Container>
    <Header
      content="ButtonToolbar"
      subheader="Container for `Buttons` and `Button.Groups` to share same props for each children"
    />
    <Header content="Default" />
    <Sample />
    <Header content="<ButtonToolbar compact/>" />
    <Sample compact />
    <Header content="<ButtonToolbar size='mini' />" />
    <Sample size="mini" />
    <Header content="<ButtonToolbar basic />" />
    <Sample basic />
    <Header content="<ButtonToolbar basic compact />" />
    <Sample basic compact />
    <Header content="<ButtonToolbar basic size='mini' />" />
    <Sample basic size="mini" />
  </Container>
))
