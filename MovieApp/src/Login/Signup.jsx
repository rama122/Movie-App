import React, { useState } from 'react'
import '../Login/Sign.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Signup = () => {
    const [name,setname]=useState()
    const [phone,setphone]=useState()
    const [email,setemail]=useState()
    const [pass,setpass]=useState()
    const [Conpass,setConpass]=useState()

    const navigatesignup=useNavigate()

    const Submit=(e)=>{
        e.preventDefault()

        if(!pass || !name || !phone || !email || !Conpass){
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
        }else{
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
                        title: "successfuly sign up",
                        timer: 2500,
                        showConfirmButton: false
                      });
                    navigatesignup('/sign in')  
                }
                
              } )
        }

    }
    const Signin=()=>{
        navigatesignup('/sign in')
    }
    return (
        <div className='d-flex justify-content-center box'>
            <form className='d-flex flex-column justify-content-center ' onSubmit={Submit}>
                <div className='d-flex flex-column align-items-center'>
                    <h6 ><b>Create your account</b></h6>
                    <p className='text-muted'>Welcome! please fill the details to get start</p>
                </div>

                <label htmlFor="firstname">Name</label>
                <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} id="firstname" placeholder='Enter the name' /><br />
                <label htmlFor="phone">Phone Number</label>
                <input type='text'  value={phone} onChange={(e)=>setphone(e.target.value)} id="phone" placeholder='Enter the Phone number' /><br />
                <label htmlFor="gmail">Email</label>
                <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} id="gmail" placeholder='Enter your email' /><br />
                <label htmlFor="password">Password</label>
                <input type='password' value={pass} onChange={(e)=>setpass(e.target.value)} id="password" placeholder='Enter the password' /><br />
                <label htmlFor="Conformpassword">Conform Password</label>
                <input type='password' value={Conpass} onChange={(e)=>setConpass(e.target.value)} id="Conformpassword" placeholder='Enter the Conform password' /><br />
                <button type='submit' className='p-2 border-2'>Sign Up</button>
                <div className='footer d-flex justify-content-center pt-4'>
                    <p>You have an account? <span onClick={Signin}>Sign in</span> </p>
                </div>
            </form>

        </div>
    )
}

export default Signup
