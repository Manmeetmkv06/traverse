import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
const Testimonials=()=>{
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[{
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slideToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slideToScroll:1,
            },
        },
    ]

    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>"A Game-Changer for Travel Planning!"
                    “Tra~Verse completely transformed how I plan my trips. I love how I can book tours and build my itinerary all in one place. 
                    The seamless experience made my vacation stress-free and fun!”
                    </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">Manav Singh</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"Personalized and Easy to Use!"
            “Creating an itinerary on Tra~Verse was so easy and intuitive. I planned a week-long 
            trip to Europe, and it was amazing to see everything come together. It felt like I had my own personal travel assistant!”</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">Manmeet Kaur</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"A Must-Have for Every Traveler!"
            “I’ve used other travel apps before, but nothing compares to Tra~Verse.
             The curated tours were incredible, and the itinerary feature kept me organized. I will never travel without it again!”</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">Rahul Sharma</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"The Perfect Travel Companion!"
            “I’m not the most organized person, but Tra~Verse helped me plan my dream vacation effortlessly. 
            From booking the best tours to planning out each day, it’s all there. Highly recommend it!”</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">Mishika Bansal</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
    </Slider>
};
export default Testimonials;