import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LoginModal.css'
const LoginModal = (props) => {

    const [login, setLogin] = useState(false)

    return (
        <div>
            {
                login ?
                    <>
                        {/* Login Form */}
                        <Modal
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header className='head text-center position-relative'>
                                <p className='fw-semibold w-full text-center mx-auto my-0'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                                <p onClick={() => props.setModalShow(false)} className='position-absolute  top-0 start-100 translate-middle badge  rounded-circle  p-2 '>
                                    <svg className='shadow mb-5 ms-4 btn-hover' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white" />
                                    </svg>
                                </p>

                            </Modal.Header>
                            <div className='d-flex justify-content-between align-items-center px-5 pt-4'>
                                <h3 className='fw-bolder text-black'>Sign In</h3>
                                <p >Don’t have an account yet? <span className='text-primary btn-hover' onClick={()=>setLogin(!login)}>  Create new for free!</span></p>

                            </div>
                            <div className='px-5 row row-cols-6 gx-5'>
                                <div className='col-6 p-4'>

                                    <form action="" className='input-outline-none'>
                                      

                                        <input className='border p-2 w-100' placeholder='Email' type="text" name="" id="" />
                                        <input className='border p-2 w-100' placeholder='Password' type="text" name="" id="" />
                                        <button className='btn btn-primary rounded-pill w-100 my-4 '>Create Account</button>

                                        <button className='btn border w-100 d-flex align-items-center justify-content-center'>
                                            <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/f_logo_RGB-Blue_1024_qkit53.png" alt="" />
                                            Sign up with Facebook</button>
                                        <button className='btn border my-2 w-100 d-flex align-items-center justify-content-center'>
                                            <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/search_aqgq1x.png" alt="" />
                                            Sign up with Google</button>

                                        <p className='text-center fw-semibold my-4'>
                                        Forgot Password?
                                        </p>                                        
                                    </form>
                                </div>
                                <div className='col-6'>
                                    <img className='img-fluid' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675343860/images/Group_3_gwpwia.png" alt="" />


                                </div>
                            </div>
                        </Modal>
                    </>
                    :
                    <>
                        {/* Register Form */}
                        <Modal
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header className='head text-center position-relative'>
                                <p className='fw-semibold w-full text-center mx-auto my-0'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                                <p onClick={() => props.setModalShow(false)} className='position-absolute  top-0 start-100 translate-middle badge  rounded-circle  p-2 '>
                                    <svg className='shadow mb-5 ms-4 btn-hover' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white" />
                                    </svg>
                                </p>

                            </Modal.Header>
                            <div className='d-flex justify-content-between align-items-center px-5 pt-4'>
                                <h3 className='fw-bolder text-black'>Create Account</h3>
                                <p >Already have an account? <span className='text-primary btn-hover' onClick={()=>setLogin(!login)}> Sign In</span></p>

                            </div>
                            <div className='px-5 row row-cols-6 gx-5'>
                                <div className='col-6 p-4'>

                                    <form action="" className='input-outline-none'>
                                        <div className='d-flex input-outline-none w-100'>
                                            <input className='border p-2 w-100' placeholder='First Name' type="text" name="" id="" />
                                            <input className='border p-2 w-100' placeholder='Lasr Name' type="text" />
                                        </div>

                                        <input className='border p-2 w-100' placeholder='Email' type="text" name="" id="" />
                                        <input className='border p-2 w-100' placeholder='Password' type="text" name="" id="" />
                                        <input className='border p-2 w-100' placeholder='Confirm Password' type="text" name="" id="" />
                                        <button className='btn btn-primary rounded-pill w-100 my-4 '>Create Account</button>

                                        <button className='btn border w-100 d-flex align-items-center justify-content-center'>
                                            <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/f_logo_RGB-Blue_1024_qkit53.png" alt="" />
                                            Sign up with Facebook</button>
                                        <button className='btn border my-2 w-100 d-flex align-items-center justify-content-center'>
                                            <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/search_aqgq1x.png" alt="" />
                                            Sign up with Google</button>
                                    </form>
                                </div>
                                <div className='col-6'>
                                    <img className='img-fluid' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675343860/images/Group_3_gwpwia.png" alt="" />
                                    <p className='text-black-50 fs-6'>By signing up, you agree to our Terms & conditions, Privacy policy</p>


                                </div>
                            </div>
                        </Modal>
                    </>
            }





        </div>
    );
};

export default LoginModal;