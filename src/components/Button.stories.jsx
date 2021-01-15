import React from 'react'
import { Button } from './Button'
import { withKnobs, text, radios, select } from '@storybook/addon-knobs'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
}

export const Sample1 = () => <Button label={text('label', 'button')} onClick={() => { }} />

const labels = { apple: 'apple', banana: 'banana' }
const colors = { tomato: 'tomato', lime: 'limegreen' }
export const Sample2 = () =>
  <Button
    label={radios('label', labels, 'button')}
    bgColor={select('background-color', colors, 'tomato')}
    onClick={() => { }}
  />
