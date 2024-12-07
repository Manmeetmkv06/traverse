import React from "react";
import '../styles/home.css';
import { Container,Row,Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
//import heroImg from 'C:\Users\MANMEET KAUR\Desktop\tour-management\frontend\src\assets\images\hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import WorldImg from '../assets/images/world.png';
import globe from '../assets/images/globe.png';
import globe1 from '../assets/images/globe1.png';
import plane from '../assets/images/plane2.png';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home=()=>{
    return(
        <>
        {/*Hero section */}
        <section className="body__sec">
            <Container>
                <Row>
                    <Col lg='6'>
                    <div className="hero__content">
                        {/* <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know Before You Go'}/>
                            <img src={WorldImg} alt=""></img>
                        </div> */}
                        <br></br><br></br><br></br>

                        <h1>Welcome to Your Ultimate Travel Companion :<span className="highlight">Tra~Verse</span></h1>
                        <br></br><br></br>
                        
                    <br></br><br></br><br></br>
                        <p>At Tra~Verse, we believe that every journey should be as unique as you are. Whether you’re dreaming of sun-soaked beaches, 
                            vibrant cityscapes, or tranquil mountains,
                            TraVerse is here to turn your travel dreams into reality. With us, booking tours and crafting your perfect itinerary has never been easier.</p>
                            
                            
                    </div>
                    </Col>
                    <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={heroImg} alt=""></img></div>
                    </Col>
                    <Col lg='2'>
                    <div className="hero__img-box mt-4">
                        <video src={heroVideo} alt="" controls></video></div>
                    </Col>
                    <Col lg='2'>
                    <div className="hero__img-box mt-5">
                        <img src={heroImg02} alt=""></img></div>
                    
                    </Col>
                    <br></br><br></br>
                    <br></br><br></br>
                    {/* <SearchBar/> */}
                </Row>
            </Container>
            <div class="clouds">
            <img src={plane} alt="cloud" class="cloud cloud3"/>
            </div>
            <br></br>
            <div class="globe globe-right">
                <img src={globe1} alt="Globe" />
            </div>

        </section>
        {/*The hero section starts here */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                    <h5 className="services__subtitle">What we Serve?</h5>
                    <h2 className="services__title">We provide our best services</h2>
                    </Col>
                    <ServiceList/>
                    
                </Row>
            </Container>
        </section>
        <br></br>
        <section className="body__sec">
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explore'}/>
                        <h2 className="featured-tour-title">Our Featured Tours</h2>
                    
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        {/* Testimonial Section */}
        <section className="body__sec">
            <Container>
                <Row>
                    <Col lg='12'>
                    <Subtitle subtitle={'Customers Love'}/>
                        <h2 className="testimonial__title">What our Customers say about us?</h2>
                    
                    </Col>
                    <Col lg='12'>
                    <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter/>
        </>
    );
};
export default Home;