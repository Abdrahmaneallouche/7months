import React, { useRef } from 'react';
import { memories } from './data';
import { gsap } from 'gsap';

function Sonia() {
  const parentRefs = useRef([]);
  const imageRefs = useRef([]);
  const infoRefs = useRef([]);

  const animate = (index) => {
    const tl = gsap.timeline();

    tl.to(parentRefs.current[index], {
      width: '100%',
      height:'330px'
    })
    .to(
      imageRefs.current[index],
      {
        width: '40%',
        left:0,
        translateX:'20px',
        
      } )
      .to(
        infoRefs.current[index],
        {
          width: '55%',
          right:0,
          translateX:'0%',
          opacity:1,
        },
        '<'// The '<' symbol means that the second animation starts at the same time as the previous one.
    )
    
  };
  const leave=(index)=>{
    const tl = gsap.timeline();

    tl.to(parentRefs.current[index], {
      width: '300px',
      height:'320px'
    })
    .to(
      imageRefs.current[index],
      {
        width:'96%',
        left:'50%',
        translateX:'-50%',
        
      } )
     // The '<' symbol means that the second animation starts at the same time as the previous one.
     .to(
      infoRefs.current[index],
      {
        width: '55%',
        right:'50%',
        translateX:'50%',
        opacity:0,
      },)
      '<'
    
  }

  return (
    <div className="mx-auto max-w-6xl p-10">
      <h1 className='text-rose-400 capitalize text-center font-black text-3xl my-4'>Hey babe this is one memories and we have a lot to make </h1>
      <div className="grid grid-cols-1 gap-6">
        {memories && memories.length > 0
          ? memories.map((memo, key) => (
              <div
                onMouseLeave={() =>leave(key)}
                onMouseEnter={() => animate(key)}
                key={key}
                ref={(el) => (parentRefs.current[key] = el)}
                className="parent p-3 border-4 bg-rose-200 gap-5 h-[320px] w-[300px] mx-auto border-white col-span-1 rounded-2xl overflow-hidden flex relative"
              >
                <div
                  ref={(el) => (imageRefs.current[key] = el)}
                  className="image border-4 p-3 w-[95%] rounded-xl bg-rose-300 border-white h-[300px] absolute top-1/2 z-20 -translate-y-1/2 left-1/2 -translate-x-1/2"
                >
                  <img
                    src={memo.img}
                    alt={memo.title}
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div
                  ref={(el) => (infoRefs.current[key] = el)}
                  className="info flex-1 absolute top-0 right-1/2 translate-x-1/2 opacity-0"
                >
                  <h1 className="text-3xl font-black text-rose-400 capitalize my-4">
                    memory: {memo.title}
                  </h1>
                  <p className="text-xl font-black text-rose-600">
                    {memo.description}
                  </p>
                </div>
              </div>
            ))
          : null}

      </div>
      <h1 className='text-rose-500 text-xl font-black mt-6 text-center capitalize'>
       ive always believe that the grass is always greener where u water it ,
       in this day i want to tell u that i love u so much and the love i have for u is priceless ur my princesses and soon enough my queen
       iam committed and loyal to u your are the only girl in my mind and in my eyes and in my heart, i love u with my heart my mind and my soul 
       in case my heart stop beating  or my mind stop working , your everything i want ,your so perfect and enough for me ,
       stress is mine peace is yours , sadness is mine happiness is yours, but your mine 
       Today we have reached seven months  and i want to tell you that my love for you is getting bigger i love u so much 
       one day we will get married and ill tell u all this words face to face in chaa laah nebghik bel bzf souchi
      </h1>
    </div>
  );
}

export default Sonia;
