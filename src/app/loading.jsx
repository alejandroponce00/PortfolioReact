"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
function LoadingPage() {
  return (
    <h3 className='text-info text-center'><FontAwesomeIcon icon={faSpinner} spinPulse />cargando...</h3>
  )
}

export default LoadingPage