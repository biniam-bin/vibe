import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { BsImageFill } from "react-icons/bs"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import { AiFillGift, AiFillLike } from "react-icons/ai"
import { FaCommentDots } from "react-icons/fa"
import Modal from '../components/Modal'

export const ProfileCard = () => {
    return (
        <div className="profile-card h-[400px] w-72 fixed rounded-lg bg-[#2d333b] flex flex-col">
            <div className="profile-top bg-[url('https://picsum.photos/500/400')] h-28 rounded-t-lg flex justify-center items-end">
                <img className="h-16 w-16 rounded-full mt-8 fixed" src="https://picsum.photos/400/400" alt="" />
            </div>
            <div className="profile-body h-full pt-8 flex flex-col">
                <div className="profile-body-info b-green-700  h-44 pt-5 mb-5">
                    <h3 className="name font-bold text-white">Biniam Daniel</h3>
                    <p className="username font-light text-gray-500 -mt-1 text-xs">@biniam</p>
                    <p className="username font-light text-gray-500 text-xs">0xcd...c2a0</p>
                    <p className="username font-light text-gray-200  text-sm w-44 mx-auto">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="profile-body-data h-full flex flex-col">
                    <div className="profile-figures flex h-20 border-y justify-evenly border-gray-600">
                        <div className="following flex flex-col items-center  justify-center">
                            <h3 className="following-value text-lg font-bold text-gray-200">2.5k</h3>
                            <p className="text-sm text-gray-400">following</p>
                        </div>
                        <p className="h-4/5 my-auto  border-r border-gray-600"></p>

                        <div className="followers flex flex-col items-center  justify-center">
                            <h3 className="followers-value text-lg font-bold text-gray-200">14.2k</h3>
                            <p className="text-sm text-gray-400">followers</p>
                        </div>
                    </div>
                    <div className="link-section my-auto  w-full flex  justify-center iems-center">
                        <Link className="link text-blue-600 cursor-pointer" to="/profile">My Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const NewPost = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="new-post bg-[#2d333b] mb-2 h-28 rounded-md flex px-4 py-2 text-gray-200">
            <div className="new-profile-pic-section">
                <img className="h-12 w-14 rounded-full" src="https://picsum.photos/400/400" alt="" />
            </div>
            <div className="new-body-section ml-2  w-full flex flex-col justify-between rounded-md">
                <div onClick={() => setShowModal(true)} className="input-section cursor-pointer bg-[#1c2128] w-full h-10 rounded-md flex items-center px-3 text-gray-400 font-sans">What's in your mind? </div>
                <div className="buttons-section flex justify-end text-sm font-extrabold text-gray-300">
                    <div onClick={() => setShowModal(true)} className="boutton mx-2 flex bg-blu-400 w-auto px-5 py-2 rounded-full justify-center items- border border-gray-500 cursor-pointer">
                        <BsImageFill className="text-green-500 mr-2  shadow-lg shadow-green-800" size={18} />
                        <span className="btn-text ">Photo</span>
                    </div>
                    <div onClick={() => setShowModal(true)} className="boutton mx-2 flex bg-blu-400 w-auto px-5 py-2 rounded-full justify-center items- border border-gray-500 cursor-pointer">
                        <BsFillPlayCircleFill className="text-blue-600 mr-2 shadow-lg shadow-blue-800" size={18} />
                        <span className="btn-text">Video</span>
                    </div>
                </div>
            </div>
            {/* modal */}
            {showModal &&
                <Modal >
                    <div className="new-post-modal bg-[#2d333b] flex-col rounded-2xl mx-auto w-full h-[450px] mt-12 md:w-2/5 flex overflow-y-clip">
                        <div className="modal-top bg-[#1c2128] w-full h-10 rounded-t-l-2xl flex items-center justify-end">
                            <div onClick={() => setShowModal(false)} className="close-btn w-4 h-4 rounded-full cursor-pointer mr-3 bg-red-500 flex items-center justify-center text-black"><CgClose className="text-red-500 hover:text-white" size={10} /></div>
                        </div>
                        <div className="modal-body overflow-y-scroll h-full  flex-col py-2">
                            <textarea placeholder="Tell us what's in your mind (eg: hello world #greet #hello)" className="bg-[#1c2128] font-mono text-sm  p-2 px-3  mx-auto focus:outline-none rounded-md w-full md:w-5/6" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="modal-bottom h-14 bg-[#1c2128] flex items-center px-2 justify-end">
                            <BsImageFill className="text-green-500 mr-5 cursor-pointer shadow-lg shadow-green-800" size={25} />
                            <BsFillPlayCircleFill className="text-blue-600 mr-5 cursor-pointer shadow-lg shadow-blue-800" size={25} />
                            <div className="publish-button bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 py-1 rounded-full">Publish</div>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
}

export const Post = () => {
    const [tipModal, showTipModal] = useState(false)
    const [commentModal, showCommentModal] = useState(false)
    return (
        <>
            <div className="post  my-3 bg-[#2d333b] grid grid-cols-12 rounded-md p-2">
                <div className="card-left mr-2 flex justify-center">
                    <img src="https://picsum.photos/300" alt="" className="profile h-12 w-12 rounded-full" />
                </div>
                <div className="card-right col-span-11 flex flex-col">
                    <div className="profile-section w-full h-12 flex flex-col">
                        <div className="user-data h-7 flex items-center">
                            <span className="name font-bold  text-gray-300 mr-2">Biniam Daniel</span>
                            <span className="font-extralight text-gray-600 text-xs cursor-pointer">@biniam</span>
                        </div>
                        <div className="user-address flex text-xs text-gray-600 b-blue-500">
                            0xbaDD53d987fDE1f1AFb30013988c31e4548c52C0
                        </div>
                    </div>
                    <div className="post-main-section  flex flex-col pr-14 text-left text-gray-200 text-sm font-sans">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde nulla cumque pariatur facilis iure consequatur esse, odio non at impedit nemo voluptas doloremque fugit iste harum vero corporis numquam doloribus, corrupti sunt aut adipisci! Voluptas excepturi repellendus possimus ipsum facilis incidunt deserunt maxime repudiandae a et animi adipisci ex, molestiae unde optio perspiciatis quibusdam. Minus deserunt rerum eius ea a, sapiente nulla accusamus itaque ex ullam fuga!</p>

                        <div className="media rounded-md mt-2">
                            <img src="https:picsum.photos/800" alt="" className="post rounded-md h-[300px]  w-[500px] object-cover" />
                        </div>


                    </div>
                    <div className="post-bottom-section py-3 mt-2 flex  md:w-4/5">
                        <div onClick={() => showTipModal(!tipModal)} className="bottom-btn flex mr-2 items-center justify-center bg-[#1c2128] w-full cursor-pointer rounded-md py-[7px]  text-gray-100">
                            <span className="text-[#fa3939]"><AiFillGift size={20} /></span>
                            <span className="text-sm ml-1">Tip</span>
                        </div>
                        <div className="bottom-btn flex mx-2 items-center justify-center bg-[#1c2128] w-full cursor-pointer rounded-md py-[7px]  text-gray-100">
                            <span><AiFillLike size={20} /></span>
                            <span className="text-sm ml-1">Like</span>
                        </div>
                        <div onClick={() => showCommentModal(!commentModal)} className="bottom-btn flex mx-2 items-center justify-center bg-[#1c2128] w-full cursor-pointer rounded-md py-[7px]  text-gray-100">
                            <span><FaCommentDots size={20} /></span>
                            <span className="text-sm ml-1">Comment</span>
                        </div>
                    </div>
                </div>
            </div>
            {tipModal ?
                <Modal>
                    <div className="new-post-modal bg-[#2d333b] flex-col rounded-2xl mx-auto w-full h-[450px] mt-12 md:w-2/5 flex overflow-y-clip">
                        <div className="modal-top bg-[#1c2128] w-full h-10 rounded-t-l-2xl flex items-center justify-end">
                            <div onClick={() => showTipModal(false)} className="close-btn w-4 h-4 rounded-full cursor-pointer mr-3 bg-red-500 flex items-center justify-center text-black"><CgClose className="text-red-500 hover:text-white" size={10} /></div>
                        </div>
                        <div className="modal-body overflow-y-scroll h-full  flex-col py-2 ">
                            <h3 className="title text-gray-300 text-lg font-bold">Tip (12.3ETH)</h3>
                            <div className="input-container mt-20 bg-[#1c2128] flex items-center w-4/5 mx-auto h-12 rounded-full px-7">
                                <input type="number" step="0.1" placeholder="0.1(ETH)" className="h-10 my-auto w-full bg-transparent focus:outline-none text-xl md:text-2xl" />
                            </div>
                            {/* <textarea placeholder="Tell us what's in your mind (eg: hello world #greet #hello)" className="bg-[#1c2128] font-mono text-sm  p-2 px-3  mx-auto focus:outline-none rounded-md w-full md:w-5/6" name="" id="" cols="30" rows="10"></textarea> */}
                        </div>
                        <div className="modal-bottom h-14 bg-[#1c2128] flex items-center px-2 justify-end">
                            {/* <BsImageFill className="text-green-500 mr-5 cursor-pointer shadow-lg shadow-green-800" size={25} /> */}
                            {/* <BsFillPlayCircleFill className="text-blue-600 mr-5 cursor-pointer shadow-lg shadow-blue-800" size={25} /> */}
                            <div className="publish-button bg-blue-500 hover:bg-blue-600 cursor-pointer px-8 py-1 rounded-full">Tip</div>
                        </div>
                    </div>
                </Modal> : !tipModal && commentModal ?
                    <Modal>
                        <div className="new-post-modal bg-[#2d333b] flex-col rounded-2xl mx-auto w-full h-[450px] mt-12 md:w-2/5 flex overflow-y-clip">
                            <div className="modal-top bg-[#1c2128] w-full h-10 rounded-t-l-2xl flex items-center justify-end">
                                <div onClick={() => showCommentModal(false)} className="close-btn w-4 h-4 rounded-full cursor-pointer mr-3 bg-red-500 flex items-center justify-center text-black"><CgClose className="text-red-500 hover:text-white" size={10} /></div>
                            </div>
                            <div className="modal-body overflow-y-scroll h-full bg-ed-500  flex-col py-2">
                                {/* <textarea placeholder="Tell us what's in your mind (eg: hello world #greet #hello)" className="bg-[#1c2128] font-mono text-sm  p-2 px-3  mx-auto focus:outline-none rounded-md w-full md:w-5/6" name="" id="" cols="30" rows="10"></textarea> */}

                                <div className="new-comment bg-[#1c2128] py-2 px-2 flex items-start">
                                    <img src="https://picsum.photos/300" className="h-12 w-12 rounded-full" alt="" />
                                    <div className="comment-input-container ml-2 w-full">
                                        <div className="input-container bg-[#2d333b] flex items-center w-full mx-auto h-10 rounded-md px-7">
                                            <input type="text" placeholder="Your comment" className="h-10 my-auto w-full bg-transparent focus:outline-none text-md text-gray-400 md:text-lg" />
                                        </div>
                                        <div className="publish-button flex items-center justify-center text-gray-100 bg-blue-500 w-40 h-10 mt-2 ml-auto hover:bg-blue-600 cursor-pointer px-4 py-1 rounded-full">Comment</div>

                                    </div>
                                </div>
                                {/* other comment */}
                                <div className="other-comment bg-[#1c2128] rounded-md my-1 flex flex-col items-start  p-2 px-5">
                                    <span>
                                        <span className="font-extralight text-gray-600 text-xs cursor-pointer mr-2 hover:text-blue-700">@biniam</span>
                                        <span className="font-extralight text-gray-600 text-xs ">0xbaDD53d987fDE1f1AFb30013988c31e4548c52C0</span>
                                    </span>
                                    <div className="text-left text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil, necessitatibus eos veniam eaque ad exercitationem dolore suscipit provident illum voluptatibus, aliquid dicta quibusdam corrupti. Cupiditate tempora hic odit magni!</div>
                                </div>
                                <div className="other-comment bg-[#1c2128] rounded-md my-1 flex flex-col items-start  p-2 px-5">
                                    <span>
                                        <span className="font-extralight text-gray-600 text-xs cursor-pointer mr-2 hover:text-blue-700">@biniam</span>
                                        <span className="font-extralight text-gray-600 text-xs ">0xbaDD53d987fDE1f1AFb30013988c31e4548c52C0</span>
                                    </span>
                                    <div className="text-left text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil, necessitatibus eos veniam eaque ad exercitationem dolore suscipit provident illum voluptatibus, aliquid dicta quibusdam corrupti. Cupiditate tempora hic odit magni!</div>
                                </div>
                                <div className="other-comment bg-[#1c2128] rounded-md my-1 flex flex-col items-start  p-2 px-5">
                                    <span>
                                        <span className="font-extralight text-gray-600 text-xs cursor-pointer mr-2 hover:text-blue-700">@biniam</span>
                                        <span className="font-extralight text-gray-600 text-xs ">0xbaDD53d987fDE1f1AFb30013988c31e4548c52C0</span>
                                    </span>
                                    <div className="text-left text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil, necessitatibus eos veniam eaque ad exercitationem dolore suscipit provident illum voluptatibus, aliquid dicta quibusdam corrupti. Cupiditate tempora hic odit magni!</div>
                                </div>
                                <div className="other-comment bg-[#1c2128] rounded-md my-1 flex flex-col items-start  p-2 px-5">
                                    <span>
                                        <span className="font-extralight text-gray-600 text-xs cursor-pointer mr-2 hover:text-blue-700">@biniam</span>
                                        <span className="font-extralight text-gray-600 text-xs ">0xbaDD53d987fDE1f1AFb30013988c31e4548c52C0</span>
                                    </span>
                                    <div className="text-left text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil, necessitatibus eos veniam eaque ad exercitationem dolore suscipit provident illum voluptatibus, aliquid dicta quibusdam corrupti. Cupiditate tempora hic odit magni!</div>
                                </div>
                                {/* other comment */}
                            </div>
                           
                        </div>
                    </Modal> : ""
            }
        </>

    )
}

export const Trending = () => {
    return (
        <div className="tranding h-[450px]  bg-blue-700 w-80 rounded-md fixed">trending</div>
    )
}
const Home = () => {
    return (

        <div className="home bg-[#1c2128] h-full mt-2 flex lg:grid grid-cols-12 gap-3 md:px-3">
            <div className="home-left b-blue-400 h-full col-span-3  hidden lg:flex justify-end ">

                <ProfileCard />
            </div>
            <div className="home-middle bg-lue-900 h-full w-full rounded-md col-span-6 ">
                <NewPost />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="home-right  rounded-md col-span-3 hidden lg:flex">
                <Trending />
            </div>
        </div>
    )
}

export default Home