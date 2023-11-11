import React from 'react'
import CardPanel from './CardPanel'

describe('<CardPanel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardPanel />)
  })
})