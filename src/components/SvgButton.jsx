import React from 'react'
// import GitHubIcon from '../assets/github-1.svg' // 非推奨
import { ReactComponent as GitHubIcon } from '../assets/github-1.svg'

export const SvgButton = () => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <GitHubIcon />
    </div>
  )
}
