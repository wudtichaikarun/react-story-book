import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Tooltip from '../../components/Tooltip'

import 'antd/dist/antd.css'
import '../../index.css'
// import Breadcrumb from '../../components/Breadcrumb'

type Props = {
  title?: string,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Header = styled.h1.attrs({
  isbig: props => (props.isbig ? '3em' : '2em'),
})`
  font-size: ${props => props.isbig};
`

const Page1 = (props: Props) => {
  const { ExampleStore, title } = props

  return (
    <div>
      <Container>
        <Header isbig>{ExampleStore.exampleData.text}</Header>
        <Header>{title} </Header>
        <Card
          title="This is a title."
          // noPadding
          style={{ width: '40rem', height: '20rem' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </Card>
        <Button>Click me!!!</Button>
      </Container>
      <Tooltip placement="top" tooltipText="hello">
        <span>someTextTooltip</span>
      </Tooltip>
    </div>
  )
}

Page1.defaultProps = {
  title: 'Page1',
}

export default compose(
  inject('ExampleStore'),
  observer
)(Page1)
