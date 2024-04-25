import React from 'react'
import './slider.css'


export default function Slider2() {
    return (
        <div>
            <h1 className="ourcourses">OUR COURSES</h1>
            
            <div className="cards__container">

            
                <div className="cards ">

                    <div className="card ">

                        <img className="card__img" src={process.env.PUBLIC_URL + '/images/logo/ourstory.jpg'} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Web Development
                                </div>
                                <div className="detail">
                                Explore  web development in our dynamic 4-week internship. From HTML and CSS to JavaScript and beyond, gain the skills to create interactive and visually stunning websites ready for the modern web.
                                </div>
                                <div className="buttons">
                                    <a href="/register"><button className='btn'>Apply</button></a>
                                </div>
                            </div>

                    </div>

                    <div className="card ">

                        <img className="card__img" src={process.env.PUBLIC_URL + '/images/logo/machine-learning.jpg'} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Machine Learning
                                </div>
                                <div className="detail">
                                Discover the principles of machine learning in our cutting-edge 4-week internship. Dive into algorithms, model training, and deployment techniques, and pave the way for innovation in AI-driven applications.
                                </div>
                                <div className="buttons">
                                    <a href="/register"><button className='btn'>Apply</button></a>
                                </div>
                            </div>

                    </div>

                    <div className="card ">

                        <img className="card__img" src={process.env.PUBLIC_URL + '/images/logo/data-science.jpg'} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Data Science
                                </div>
                                <div className="detail">
                                Dive into the realm of data science during our 4-week program, mastering machine learning algorithms and predictive modeling to tackle intricate challenges and drive innovation through informed solutions.
                                </div>
                                <div className="buttons">
                                    <a href="/register"><button className='btn'>Apply</button></a>
                                </div>
                            </div>

                    </div>
                    <div className=' explore'>
                        <a href="/team"><button>Explore More<i className="fa fa-arrow-right" aria-hidden="true"></i></button></a>
                    </div>
                    {/* <div className="card ">

                        <img className="card__img" src={process.env.PUBLIC_URL + '/images/logo/android.jpg'} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Android Development
                                </div>
                                <div className="detail">
                                Elevate your skills in Android development through our intensive 4-week internship, blending theory with practical application to create cutting-edge mobile applications.
                                </div>
                                <div className="buttons">
                                    <a href="/register"><button className='btn'>Apply</button></a>
                                </div>
                            </div>

                    </div>
                    <div className="card ">

                        <img className="card__img" src={process.env.PUBLIC_URL + '/images/logo/data-analysis.jpg'} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Data Analysis
                                </div>
                                <div className="detail">
                                Data analysis involves extracting insights from raw data to make informed decisions. It includes cleaning, transforming, and interpreting data to uncover patterns, trends, and valuable information for business strategies.</div>
                                <div className="buttons">
                                    <a href="/register"><button className='btn'>Apply</button></a>
                                </div>
                            </div>

                    </div> */}

                </div>

            </div>
        </div>
    )
}
