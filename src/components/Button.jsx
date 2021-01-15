import React from 'react'

export const Button = ({ label, onClick, bgColor }) => {
  const buttonStyles = {
    color: '#fff',
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: bgColor ? bgColor : 'gray',
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
