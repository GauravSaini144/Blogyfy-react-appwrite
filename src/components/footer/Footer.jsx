import React from 'react'
import Logo from '../Logo'
function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8 px-4 mt-28">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
    
    <div>
      <h2 className="text-lg font-semibold mb-2"><Logo/></h2>
      <p>Your Words. Your World. Amplified</p>
    </div>


    <div>
      <h2 className="text-lg font-semibold mb-2">Connect</h2>
      <ul className="space-y-2">
        <li>
          <a href="https://github.com/GauravSaini144" target="_blank" className="hover:text-blue-400 transition-colors">
             GitHub
          </a>
        </li>
        <li>
          <a href="https://in.linkedin.com/in/gaurav-saini-09b441230" target="_blank" className="hover:text-blue-400 transition-colors">
             LinkedIn
          </a>
        </li>
      </ul>
    </div>

    
    <div>
      <h2 className="text-lg font-semibold mb-2">Created By</h2>
      <p> <strong>Gaurav Saini</strong> — Frontend enthusiast. Coffee-powered coder.</p>
    </div>
  </div>

 
</footer>

  )
}

export default Footer