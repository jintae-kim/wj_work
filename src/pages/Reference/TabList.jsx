import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TabList = () => {

  // //탭메뉴
  // const tabActive = () => {

  //   const tabItem = document.querySelectorAll('.gt-link');

  //   tabItem.forEach((tab, idx)=> {    
  //     tab.addEventListener('click', function(){        
  //         tabItem.forEach((item)=> {
  //             item.classList.remove('active');
  //         });

  //         tabItem[idx].classList.add('active');  
  //     });      
  //   });
  // }

  

  const [swiper, setSwiper] = useState();

  const getTabActiveIndex = localStorage.getItem('tabActiveIndex');

  const handleChangeSlide = (index) => {
    localStorage.setItem('tabActiveIndex', index);
  }

  useEffect(() => {
    if(swiper && !swiper.destroyed){
      swiper.slideTo(getTabActiveIndex);
    }
  }, [swiper]);


  const tab = [    
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "불량코드",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "불량코드",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "불량코드",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "불량코드",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "불량코드",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },
    {
      title: "불량코드",
      path: "*"
    },
    {
      title: "테스트1",
      path: "*"
    },      
    {
      title: "불량코드",
      path: "/reference/MDM_PRG_A0306010000"
    },
    {
      title: "불량코드 그룹",
      path: "/reference/MDM_PRG_A0308010000"
    },
  ];

  return (

    <div className="tab-list">

      <Swiper      
        slidesPerView={"auto"}        
        className="grid-tab-box"
        onSwiper={(swiper)=> setSwiper(swiper)}
      >
        {tab && tab.map((stack, index) => (
          <SwiperSlide className="grid-tab" key={index}>
            <NavLink to={stack.path} className="gt-link" onClick={()=> handleChangeSlide(index)}>
              {stack.title}
            </NavLink>            
          </SwiperSlide>
        ))}
      </Swiper>

    </div>

  )
}

export { TabList }