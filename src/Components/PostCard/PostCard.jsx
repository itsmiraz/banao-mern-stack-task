import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const PostCard = ({ post }) => {
    console.log(post)
    return (
        <div className='border mb-4 border border-top-0 rounded-bottom'>
            <img src={post.img} alt="" className='pb-2 img-fluid' />
            <div className='p-2 '>
                <h6 className='fw-semibold'>{post.type}</h6>
                <div className='d-flex justify-content-between align-items-center position-relative'>
                    <h4 className='fw-semibold'>{post.title}</h4>


                    <Dropdown>
                        <Dropdown.Toggle className='opacity-0 ' variant="" id="dropdown-basic">

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className='position-absolute  end-0 mx-2'>
                        <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                        </svg>
                    </span>

                </div>
                <div className='d-flex align-items-center my-2'>
                    {
                        post.publisher_date &&

                        <>
                            <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black" />
                            </svg>

                            <span className='fw-semibold px-2 me-4'>
                                {post.publisher_date}
                            </span>
                        </>


                    }
                    {
                        post.location &&
                        <>

                            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z" fill="black" />
                                <path d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z" fill="black" />
                            </svg>
                            <span className='fw-semibold px-2'>
                                {
                                    post.location
                                }
                            </span>
                        </>
                    }
                </div>
                {
                    post.btn &&
                    <>
                        <button className={`btn ${post.btn_color === "danger" ? "btn-outline-danger":"btn-outline-success"}  w-100 fw-semibold border`}>{post.btn}</button>
                    </>
                }
                <p className='text-black-50'>{post.details}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center '>
                        <img src={post.userDetails.img_url} className='px-2'    alt="" />
                    <h6 className='fw-semibold'>{post.userDetails.name}</h6>
                  </div>
                    <div>


                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z" fill="#525252" />
                        </svg>
                        <span className='text-black-50 fw-semibold px-2'>1.4k views</span>

                        <span className='px-4 bg-black-50'>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D" />
                            </svg>

                        </span>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostCard;