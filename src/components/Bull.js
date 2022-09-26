import React from 'react'

function Bull() {
  return (
    <div className='contents'>
    <p className='SAM'><b>Students Access Module</b></p>
        <div className='container'>
            <p className='UA'><b>User Authentication</b></p><br></br><hr className='line'></hr><br></br>
            Username:
            <input type="text" placeholder='Username'></input><br></br>
            Password:
            <input type="text" placeholder='Password'></input><br></br>
            Birthdate:
            <input type="text" placeholder='Birth Date'></input>
            <div className='btn'>
                <button>Clear Entries</button>
                <button className='login'>Login</button>
            </div>
            <p>Forgot your password? <a href="./"><u>Click here</u></a></p>
        </div>
    </div>
  )
}

export default Bull