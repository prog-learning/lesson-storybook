import React from 'react'
import { Button, MarkButton } from './Button'
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

export const Sample3 = (args) => <Button {...args} />
Sample3.args = {
  label: text('label', 'button'),
  onClick: () => { },
}
Sample3.argTypes = {
  // label: { conrol: { type: 'array', separator: ['aaa', 'bbb'] } },
  // bgColor: { control: 'color' },
  bgColor: { control: { type: 'radio', options: ['tomato', 'lime'] }, },

  // bgColor: { control: { type: 'object', options: colors } },
  disable: { control: 'boolean' },
  // height: { control: { type: 'number', min: 10, max: 200 } },
  height: { control: { type: 'range', min: 10, max: 200, step: 10 } },

};

const marks = {
  default: { mark: '●', bgColor: 'gray' },
  blue: { mark: '♠', bgColor: 'blue' },
  red: { mark: '♥', bgColor: 'red' },
}
export const Sample4 = (args) => <MarkButton {...args} />
Sample4.args = {
  label: text('label', 'button'),
  onClick: () => { },
}
Sample4.argTypes = {
  // label: { conrol: { type: 'array', separator: ['aaa', 'bbb'] } }, // わからん
  option: {
    type: { mark: 'string', bgColor: 'string' },
    description: 'マークとカラーの組み合わせ',
    control: { type: 'radio', options: marks }, // Radioが上手く動かない
    defaultValue: marks.blue
  },
};
