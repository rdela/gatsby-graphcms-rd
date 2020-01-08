import React from 'react'
import { render } from '@testing-library/react'

import BackToIndex from '../back-to-index'

describe(`Back to Index`, () => {
  it(`contains Back to Index text`, () => {
    const { getByText } = render(<BackToIndex />)

    const el = getByText(`Back to Index`)

    expect(el).toBeInTheDocument()
  })
})

