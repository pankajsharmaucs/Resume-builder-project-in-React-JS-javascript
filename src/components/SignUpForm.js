import React from 'react'
import "../assets/Home.css";

const signupImg=process.env.PUBLIC_URL + "images/sign-up.png";

function SignUpForm() {


  return (
    <>
        <div className='row justify-content-center py-lg-5 p-2 '>
                    <div className='col-lg-3 col-md-5 col-sm-8 col-11 text-center mt-3 animate__animated animate__slideIn'>
                            <div className='signUpFormBox shadow'>
                                
                                <div className='col-12 '>
                                    <img src={signupImg}  alt="signUp image" />
                                </div>

                                <div className='form-group my-3'>
                                    <input type="text" className='form-control py-3' placeholder='Email Address'  />
                                </div>

                                <div className='form-group my-3'>
                                    <input className='btn bg-main fw-bold py-3 text-white' value={"SEND OTP"} />
                                </div>

                                <div className='col-12 '>
                                    <img src={signupImg}  alt="signUp image" />
                                </div>

                                <div className='form-group my-3'>
                                    <input type="text" className='form-control py-3' placeholder='Email Address'  />
                                </div>

                                <div className='form-group my-3'>
                                    <input className='btn bg-main fw-bold py-3 text-white' value={"SEND OTP"} />
                                </div>


                            </div>
                    </div>
        </div>
    </>
  )
}

export default SignUpForm
