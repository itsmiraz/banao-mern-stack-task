import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';
import './LoginModal.css'
const LoginModal = (props) => {

    const [login, setLogin] = useState(false)

    const [error, setError] = useState(null)
    const { signIn, auth, googleSginIn, signUp, setuserProfile } = useContext(AuthContext)
    const [usermail, setUsermail] = useState('')





    // -----------  Register Functions ------------------------


    const handleRegister = e => {

        e.preventDefault()
        const form = e.target;

        const firstname = form.firsName.value;
        const lastName = form.lastName.value

        const name = firstname.concat(" ", lastName)
        const email = form.email.value;
        // 
        // 
        // 
        const password = form.password.value;
        const confirmPass = form.confirm.value;


        if (password.length < 6 && confirmPass < 6) {
            setError('Please should be at least 6 characters.');
            return;
        }
        if (password !== confirmPass) {
            setError('Pass didnot match')
            return;
        }

        console.log(name, email, password);

        setError('');
        signUp(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                handleUserProfile(name)
                props.setmodalshow(false)

                console.log("🚀 ~ file: RegisterPage.js ~ line 21 ~ handleSubmit ~ user", user)
            })
            .catch(error => {
                console.log('error', error);
                setError(error.message)
            })




    }


    const handleUserProfile = (name,) => {
        const profile = {
            displayName: name,
        }
        console.log(profile);
        setuserProfile(profile)
            .then((result) => { console.log(result.user); })
            .catch(error => console.log(error))
    }




    // --------- Login Functions --------------------
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                props.setmodalshow(false)
                setError('')
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Password')
                }
                else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError('User Not Found.Please Register')
                }
                else {
                    setError(error.message)
                }
                console.log('error', error);
            })
    }


    const handleEmailInput = e => {
        e.preventDefault()
        const email = e.target.value

        setUsermail(email)
    }
    const resetPasswrd = () => {

        sendPasswordResetEmail(auth, usermail)
            .then(() => {
                toast.success('Please Check Your Email box to reset your Email Password')
            })
            .catch(error => {
                console.log('error', error);
                setError(error.message)
            })
    }


    // Continue with google
    const handleGoogleSignIN = () => {
        googleSginIn()
            .then(result => {

                const user = result.user;
                props.setmodalshow(false)
                console.log(user);

            })
            .catch(error => {
                console.log('error', error);
            })
    }


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
                            <Modal.Header className='head text-center position-relative d-lg-block d-none'>
                                <p className='fw-semibold w-full text-center mx-auto my-0'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                                <p onClick={() => props.setmodalshow(false)} className='position-absolute  top-0 start-100 translate-middle badge  rounded-circle  p-2 '>
                                    <svg className='shadow mb-5 ms-4 btn-hover' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white" />
                                    </svg>
                                </p>

                            </Modal.Header>
                            <div className='d-flex justify-content-between align-items-center px-5 pt-4'>
                                <h3 className='fw-bolder text-black'>Sign In</h3>
                                <p className='d-none d-lg-block'>Don’t have an account yet? <span className='text-primary btn-hover' onClick={() => setLogin(!login)}>  Create new for free!</span></p>
                                <p onClick={() => props.setmodalshow(false)} className='d-lg-none d-block badge   rounded-circle  p-2 '>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529" />
                                    </svg>

                                </p>
                            </div>
                            <div className='px-lg-5 px-4 row row-cols-6 gx-5'>
                                <div className='col-lg-6 col-12  p-4'>

                                    <form action="" onSubmit={handleLogin} className='input-outline-none'>


                                        <input className='border p-2 w-100' placeholder='Email' onChange={handleEmailInput} type="text"  name="email" id="" />
                                        <input className='border p-2 w-100' placeholder='Password' type="text" name="password" id="" />
                                        <p className='text-danger'>{ error}</p>
                                        <div className='d-flex justify-content-between justify-content-lg-center align-items-center'>
                                            <button type='submit' className='btn btn-primary rounded-pill w-100 d-lg-block d-none mb-4 '>Sign In</button>
                                            <button  type='submit' className='btn btn-primary rounded-pill w-50 d-block d-lg-none mb-4 '>Sign In</button>
                                            <p onClick={() => setLogin(!login)} className='text-decoration-underline d-lg-none d-block'>
                                            or, Create Account
                                            </p>
                                      </div>

                                        <button className='btn border w-100 d-flex align-items-center justify-content-center'>
                                            <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/f_logo_RGB-Blue_1024_qkit53.png" alt="" />
                                            Sign up with Facebook</button>
                                        <button onClick={handleGoogleSignIN} className='btn border my-2 w-100 d-flex align-items-center justify-content-center'>
                                            <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/search_aqgq1x.png" alt="" />
                                            Sign up with Google</button>

                                        <p onClick={resetPasswrd} className='text-center fw-semibold my-4'>
                                            Forgot Password?
                                        </p>
                                    </form>
                                </div>
                                <div className='col-lg-6 col-0 d-lg-block d-none'>
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
                            <Modal.Header className='head text-center position-relative d-lg-block d-none'>
                                <p className='fw-semibold w-full text-center mx-auto my-0'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                                <p onClick={() => props.setmodalshow(false)} className='position-absolute  top-0 start-100 translate-middle badge  rounded-circle  p-2 '>
                                    <svg className='shadow mb-5 ms-4 btn-hover' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white" />
                                    </svg>
                                </p>

                            </Modal.Header>
                            <div className='d-flex justify-content-between align-items-center px-lg-5 px-4 pt-4'>
                                <h3 className='fw-bolder text-black'>Create Account</h3>
                                <p className='d-lg-block d-none'>Already have an account? <span className='text-primary btn-hover' onClick={() => setLogin(!login)}> Sign In</span></p>
                                <p onClick={() => props.setmodalshow(false)} className='d-lg-none d-block badge   rounded-circle  p-2 '>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529" />
                                    </svg>

                                </p>
                            </div>
                            <div className='px-lg-5 px-4 row row-cols-6 gx-5'>
                                <div className='col-lg-6 col-12  p-4'>

                                    <form action="" onSubmit={handleRegister} className='input-outline-none'>
                                        <div className='d-flex input-outline-none w-100'>
                                            <input required className='border p-2 w-100' placeholder='First Name' type="text" name="firsName" id="" />
                                            <input required className='border p-2 w-100' placeholder='Lasr Name' name="lastName" type="text" />
                                        </div>

                                        <input required className='border p-2 w-100' placeholder='Email' type="text" name="email" id="" />
                                        <input required className='border p-2 w-100' placeholder='Password' type="password" name="password" id="" />
                                        <input required className='border p-2 w-100' placeholder='Confirm Password' type="password" name="confirm" id="" />
                                        <p className='text-danger'>{error}</p>

                                        <div className='d-flex justify-content-between justify-content-lg-center align-items-center'>
                                            <button type='submit' className='btn btn-primary rounded-pill w-100 d-none d-lg-block mb-4 '>Create Account</button>
                                            <button type='submit' className='btn btn-primary rounded-pill w-50 d-lg-none d-block mb-4 '>Create Account</button>
                                            <p  onClick={() => setLogin(!login)} className='text-decoration-underline d-lg-none d-block'>
                                            or, Sign In
                                            </p>
                                      </div>

                                    </form>
                                    {/* Facebook */}
                                    <button className='btn border w-100 d-flex align-items-center justify-content-center'>
                                        <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/f_logo_RGB-Blue_1024_qkit53.png" alt="" />
                                        Sign up with Facebook
                                    </button>

                                    {/* Google */}
                                    <button onClick={handleGoogleSignIN} className='btn border my-2 w-100 d-flex align-items-center justify-content-center'>
                                        <img className='px-2' src="https://res.cloudinary.com/dicnezd6a/image/upload/v1675348830/images/search_aqgq1x.png" alt="" />
                                        Sign up with Google
                                    </button>
                                    <p className='d-lg-none d-block text-center text-dark'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                                <div className='col-lg-6 col-0 d-lg-block d-none'>
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