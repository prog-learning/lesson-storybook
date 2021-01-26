import React from 'react'

export const Button = ({ label, onClick, bgColor, height }) => {
  const buttonStyles = {
    color: '#fff',
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: bgColor ? bgColor : 'gray',
    height: height + 'px',
  }
  return (
    <button
      style={buttonStyles}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export const MarkButton = ({ label, onClick, height, option = { mark: '●', bgColor: 'gray' } }) => {

  const buttonStyles = {
    color: '#fff',
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: option.bgColor ? option.bgColor : 'gray',
    height: height + 'px',
    boxShadow: '0 3px 1px #333'
  }
  return (
    <button
      style={buttonStyles}
      onClick={onClick}
    >
      {option.mark} {label}
    </button>
  )
}
