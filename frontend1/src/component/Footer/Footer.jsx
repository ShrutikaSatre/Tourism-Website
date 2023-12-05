import React,{useEffect,useState} from "react";
import './footer.css';
import video1 from '../../assets/video2.mp4';
import {FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';
import {BsTelephoneFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md"
import Aos from "aos";
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})

  }, [])
  return(
       <section className="footer">
        <div className="videoDiv">
          <video src={video1} loop autoPlay muted type="video/mp4"/>
        </div>
        <div ata-aos="fade-up" className="secContent container">
          <div className="contactDiv flex">
            <div  data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with  Us</h2>
              <small><BsTelephoneFill className="icon"/>Phone Number:</small>
                <div className="no">+91 8346794637</div>
              <small><MdLocationOn  className="icon"/>Our main office:</small>
              <div className="add">Sindhi society,Chembur Mumbai-0400071</div>
            </div>
            <form>
              <div data-aos="fade-up">
                  <input
                   type="text"
                   name="name"
                   placeholder="Name"
                   value=""
                  />
                  <input
                   type="email"
                   name="email"
                   placeholder="Email"
                   value=""
                  />
                </div>
                <textarea
                 name="message"
                 placeholder="Message"
                 value=""
                />
                <button type="submit">Submit Feedback</button>
             </form>
            
           {/* <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder="Enter email address"/>
              <button data-aos="fade-up" className="btn flex" type="submit">
               SEND <FiSend className="icon"/>
              </button>
            </div>*/}
          </div>
          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href='#' className="logo flex">
                  <MdOutlineTravelExplore className='icon'/>Travel.
                </a>
              </div>
              <div data-aos="fade-up" className="footerParagraph">
               We have been moving excellent encounters for a considerable 
               length of time through our cutting-edge planned occasion
                bundles and other fundamental travel administrations.
                 We rouse our clients to carry on with a rich life, 
                 brimming with extraordinary travel encounters.
              </div>
              <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className='icon'/>
                <a href="https://instagram.com/travel_with_us_e?igshid=ZDdkNTZiNTM=">
                <AiFillInstagram className='icon'/>
                </a>
                <AiFillFacebook className='icon'/>
                <a href="https://www.youtube.com/@pallavikanukale5865">
                <FaYoutube className='icon'/>
                </a>
              </div>
            </div>
            
        
            <div className="footerLinks grid">
               <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                  <span className="groupTitle">
                   Our Services
                  </span>
                 <li className="footerList flex">
                   <FiChevronRight className='icon'/>
                  <a href="main" >Tour Packages</a>
                 </li>
                 <li className="footerList flex">
                   <FiChevronRight className='icon'/>
                   <a href="hotel">Hotels</a>
                 </li>
                 <li className="footerList flex">
                   <FiChevronRight className='icon'/>
                   <a href="contact">Contact Us</a>
                 </li>
                </div>
             {/* <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Kerala
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                   Mahabaleshwar
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Ooty
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Manali
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Udaipur
                </li>
             </div>
             <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
               <span className="groupTitle">
                 PATNERS
               </span>
               <li className="footerList flex">
                 <FiChevronRight className='icon'/>
                 Bookings
               </li>
               <li className="footerList flex">
                 <FiChevronRight className='icon'/>
                 Rentcars
               </li>
               <li className="footerList flex">
                 <FiChevronRight className='icon'/>
                 Hostelworld
               </li>
               <li className="footerList flex">
                 <FiChevronRight className='icon'/>
                 Trivago
               </li>
               <li className="footerList flex">
                 <FiChevronRight className='icon'/>
                 TripAdvisor
               </li>
              </div>*/}
           </div>
            <div className="footerDiv flex">
              <small >BEST TRAVEL WEBSITE THEME</small>
              <small >COPYRIGHTS RESERVED - Travel@2023pvt</small>
            </div>
         
         
          </div>
        </div>
      
    </section>
    )
}
export default Footer;