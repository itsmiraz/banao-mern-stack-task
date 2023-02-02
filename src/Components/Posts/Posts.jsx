import React from 'react';
import posts from '../../assets/postData.json'
import PostCard from '../PostCard/PostCard';
import './Post.css'
const Posts = () => {

    return (
        <section className='posts'>
            <div className='row row-cols-6'>
                <div className='col-8'>
                    {
                        posts.map((post, i) => <PostCard key={i} post={post} />)
                    }
                </div>
                <div className='col-4  location'>

                    <div className=' d-flex align-items-center border-bottom justify-content-between mb-4'>
                        <svg width="16" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM2.25 5.75C2.25 3.68 3.93 2 6 2C8.07 2 9.75 3.68 9.75 5.75C9.75 7.91 7.59 11.1425 6 13.16C4.44 11.1575 2.25 7.8875 2.25 5.75Z" fill="black" />
                            <path d="M6 7.625C7.03553 7.625 7.875 6.78553 7.875 5.75C7.875 4.71447 7.03553 3.875 6 3.875C4.96447 3.875 4.125 4.71447 4.125 5.75C4.125 6.78553 4.96447 7.625 6 7.625Z" fill="black" />
                        </svg>
                        <div>
                            <input type="text" className='border-0' placeholder='Enter your Location' />
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black" />
                        </svg>
                    </div>
                    <div className=''>
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z" fill="black" />
                        </svg>

                        <span className='px-2 text-black-50'>Your location will help us serve better and extend a personalised experience.</span>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Posts;