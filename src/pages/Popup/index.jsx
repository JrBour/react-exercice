import { useState } from 'react'
import RegisterPopup from '../../components/RegisterPopup'

const Popup = ()  => {
  const [displayPopup, setDisplayPopup] = useState(false)
  
  const close = () => setDisplayPopup(false)
  
  return (
    <div className="h-screen flex justify-center items-center">
      {displayPopup && <RegisterPopup onClose={close} />}
      <button className="border border-black rounded p-3 cursor" onClick={() => setDisplayPopup(true)}>Open popup</button>
    </div>
  )
};

export default Popup;
