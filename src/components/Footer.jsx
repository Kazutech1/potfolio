import React from 'react'

const Footer = () => {
  return (
    <div>
     <footer className="py-8 bg-black border-t border-red-900/30">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-500 font-mono">
        © {new Date().getFullYear()} Kaz Tech // All rights reserved
      </p>
    </div>
  </footer>
  </div>
  )
}

export default Footer