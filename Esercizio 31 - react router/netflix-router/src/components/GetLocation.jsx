import React from 'react'
import { useLocation } from 'react-router-dom'

export default function GetLocation() {

    const location = useLocation();

  return (
    <h3>PAge: {location.pathname}</h3>
  )
}
