import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Link to ="/">Home</Link>
      <Link to ="/Administrateur">Administrateur</Link>
      <Link to ="/Catalogue">Catalogue</Link>
      <Link to ="/Fournisseur">Fournisseur</Link>
      <Link to ="/Client">Client</Link>
    
    </div>
  )
}

