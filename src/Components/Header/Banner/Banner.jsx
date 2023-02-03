import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import LoginModal from '../../UserAuthentication/LoginModal/LoginModal';
import './Banner.css'
const Banner = () => {

    const { user, setJoinGroup, joinGroup } = useContext(AuthContext)
    const [modalShow, setmodalshow] = React.useState(false);


    return (
        <section className='banner '>
            <div className='d-sm-flex p-4 d-md-flex d-lg-none d-block header d-flex align-items-center justify-content-between p-0'>
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white" />
                    </svg>
                </div>
                <div>
                    {
                        joinGroup ?
                            <>
                                <button onClick={() => setJoinGroup(!joinGroup)} className='btn btn-outline-light'>
                                    Leave Group
                                </button>
                            </>
                            :
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <button onClick={() => setJoinGroup(!joinGroup)} className='btn btn-outline-light'>
                                                Join Group
                                            </button>
                                        </>
                                        :
                                        <>
                                            <button onClick={() => setmodalshow(true)} className='btn btn-outline-light'>
                                                Join Group
                                            </button>
                                        </>
                                }
                            </>

                    }


                </div>
            </div>
            <div className="title ">
                <h1 className='fw-semibold '>Computer Engineering</h1>
                <p>
                    142,765 Computer Engineers follow this
                </p>
            </div>

            <LoginModal
                show={modalShow}
                setmodalshow={setmodalshow}
                onHide={() => setmodalshow(false)}
            ></LoginModal>
        </section>
    );
};

export default Banner;