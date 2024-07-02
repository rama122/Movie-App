import React, { useState } from 'react'
import '../Login/Sign.css'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


const Sign = () => {
    const [name,setname]=useState()
    const [pass,setpass]=useState()
    const navigatesign=useNavigate()

    const Submit=(e)=>{
        e.preventDefault()
        if(!pass || !name ){
            Swal.fire({
                timer:1500,
                showConfirmButton: false,
                willOpen:()=>{
                    Swal.showLoading()

                },
                willClose:()=>{
                    Swal.fire({
                        position: "top-center",
                        timer: 2500,
                        icon: "error",
                        title: "error",
                        text: "All field must field"

                    })
                }
                
              } )
        }
        else{
            Swal.fire({
                timer:1500,
                showConfirmButton: false,
                willOpen:()=>{
                    Swal.showLoading()

                },
                willClose:()=>{
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "successfuly sign in",
                        timer: 2500,
                        showConfirmButton: false
                      });
                    navigatesign('/')  
                }
                
              } )
            
        }
    }
    const SignUp=()=>{
        navigatesign('/sign up')
    }

    return (
        <div className='d-flex justify-content-center box'>
            <form className='d-flex flex-column justify-content-center ' onSubmit={Submit}>
                <div className='d-flex flex-column align-items-center'>
                    <h6 ><b>Sign in to MovieApp</b></h6>
                    <p className='text-muted'>Welcome back ! please sign in to continue</p>
                </div>

                <label htmlFor="name">Username</label>
                <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} id="name" placeholder='Enter the name' /><br />
                {/* <label htmlFor="gmail">Email</label>
                <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} id="gmail" placeholder='Enter the email' /><br /> */}
                <label htmlFor="password">Password</label>
                <input type='password' value={pass} onChange={(e)=>setpass(e.target.value)} id="password" placeholder='Enter the password' /><br />
                <button type='submit' className='p-2 border-2'>Sign in</button>
                <div className='footer d-flex justify-content-center pt-4'>
                    <p>Don't have an account? <span onClick={SignUp}>Sign up</span> </p>
                </div>
            </form>

        </div>
    )
}

export default Sign
