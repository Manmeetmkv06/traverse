import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData=[
    {

        
        
        imgUrl: weatherImg,
        title: "Seamless Tour Booking:",
        desc: "Discover and book handpicked tours that match your interests and schedule. ",},
        
        {imgUrl: guideImg,
        title: "Curated Experiences:",
        desc: "Explore our collection of experiences curated by travel experts. ",

        },
        {
        imgUrl: customizationImg,
        title: "Personalized Itineraries:",
        desc: "Create detailed itineraries tailored to your travel style.",
        },
]


const ServiceList=()=>{
    return<>{

    
    servicesData.map((item,index)=>(
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>
))}
    </>;
};
export default ServiceList;