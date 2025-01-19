import React from 'react'

const Contact = () => {
  return (
    <div>
          <section id="contact" className="py-20 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Build Something?</h2>
        <p className="text-xl mb-8">Let's turn your ideas into reality</p>
        <a 
          href="mailto:Kaztech069@gmail.com" 
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-sm transition-colors"
        >
          <span className="font-mono">Contact Me</span>
        </a>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Contact