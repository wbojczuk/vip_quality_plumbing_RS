"use client"
import Service from "./Service"
import serviceData from "./serviceData"
import DetailsPane from "../DetailsPane/DetailsPane";
import { useEffect, useRef, useState } from "react";
import "./services.css"
import gsap from "gsap";
import Shader from "../../misc/Shader/Shader";


export default function Services() {

  const [currentServiceName, setCurrentServiceName] = useState("");
  const [currentServiceDesc, setCurrentServiceDesc] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(false);
  const [elemAmt, setElemAmt] = useState(6)

  const wrapperRef: any = useRef();

  const serviceElems = serviceData.map((data, i)=>{
   if(i < elemAmt){
    return (<Service
      key={i}
      {...data}
      setCurrentImg={setCurrentImg}
      setCurrentServiceName={setCurrentServiceName}
      setCurrentServiceDesc={setCurrentServiceDesc}
      setIsDetailsPaneOpen={setIsDetailsPaneOpen}
      />)
   }
});

  function animateElems(elems: Element[]){
    gsap.to(elems, {
      opacity: 1,
      x: 0,
      duration: 0.2,
      ease: "power4.inOut",
      stagger: 0.1
    })
  }
  

  // Add animations
  useEffect(()=>{

    const animObserver = new IntersectionObserver((elems)=>{
      const elemsToAnimate: Element[] = [];
      elems.forEach((elem)=>{
        if(elem.isIntersecting){
          elemsToAnimate.push(elem.target);
          animObserver.unobserve(elem.target)
        }
      })
      if(elemsToAnimate.length > 0){
        animateElems(elemsToAnimate)
      }
    }, {threshold: 0.15});

    ([...wrapperRef.current.children]).forEach((elem)=>{
      animObserver.observe(elem)
    })
  }, [serviceElems])



  return (
   <>
   <div id="serviceContainer">
   <h3 className="highlight">Services</h3>
    <h2>Plumbing Services</h2>
    <h4 id="services">Expert Plumbing Services for Homes and Businesses — Done Right the First Time</h4>
    <div id="servicesWrapper" ref={wrapperRef}>
        {serviceElems}
    </div>
    <DetailsPane
    img={currentImg}
    name={currentServiceName}
    desc={currentServiceDesc}
    setIsDetailsPaneOpen={setIsDetailsPaneOpen}
    isDetailsPaneOpen={isDetailsPaneOpen}
    />
    
   </div>
   </>
  )
}
