import React from 'react'
import { withKnobs, text, radios, select } from '@storybook/addon-knobs'
import { ImageBox } from './ImageBox'
import { SvgButton } from './SvgButton'

export default {
  title: 'Components/Assets',
  decorators: [withKnobs],
}

export const SvgButtonComponents = () => <SvgButton />
export const ImageBoxComponents = () => <ImageBox />
