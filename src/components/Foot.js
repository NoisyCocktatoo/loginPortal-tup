import React from 'react'

function Foot() {
  return (
    <div className='Footer'>
        <div className='powered'>
             Powered by <img src='.\aims_logo.png' className='aims'></img> from <img src='.\pinnacle_logo.png' className='pinnacle'></img>
        </div>
        <div classname="formore">For questions and comments, email us at</div>
        <div className='web'><a href='./' className='footlong'><u>web.ers@tup.edu.ph</u></a></div>
    </div>
    //<img src='.\aims_logo.png' className='aims'></img> from <img src='.\pinnacle_logo.png' className='pinnacle'></img>
  )
}

export default Foot