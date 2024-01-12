

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return(
  <div className="w-1/1 px-20 py-10">
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
      <h3 className="mb-10 mt-20 text-3xl font-bold text-neutral-800 dark:text-neutral-200">Testimonials</h3>
      <p className="mb-6 pb-2 md:mb-12 text-white md:pb-0">One, remember to look up at the stars and not down at your feet. 
      Two, never give up work. Work gives you meaning and purpose and life is empty without it.</p>

    </div>
    <div className=" mt-20 grid-rows-1 gap-6 text-center md:grid-cols-3 lg:gap-6">
      <div className="mb-12 md:mb-0 ">
        <Slider {...settings}>
      {data.map((d) =>(
        <><div className="mb-6 flex justify-center ">
          <img src={d.img} alt="" className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
        </div>
        <div>
          <h5 className="mb-4 text-white text-xl font-semibold">{d.name}</h5>
          <h6 className="mb-4 font-ui-sans-serif font-semibold text-white text-primary dark:text-primary-500">{d.primary}</h6>
          <p className="mb-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block h-7 w-7 pr-2"
            viewBox="0 0 24 24">
            <path
              d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
          </svg>
          {d.review}
          </p> 
                
          </div></>              
      ))}

</Slider>       
      </div>
    </div>
  </div>
  );
  
}

const data = [
    {
      name: 'ALIA BHATT',
      img:'/Students/alia.png',
      primary:'Actress',
      review:'Genius woh nahi hota jiske paas har sawaal ka jawab ho ... genius woh hota hai jiske paas har jawaab tak pahunchne ka patience ho.'
    },
    
    {
      name: 'RANBIR',
      img:'/Students/ranbir.png',
      primary:'Actor',
      review:'Main udna chahta hoon, daudna chahta hoon, girna bhi chahta hoon ... bus rukna nahi chahta.'
  
    },
    {
      name: 'PANDEY',
      img:'/Students/pan.png',
      primary:'Reporter',
      review:'I’m a work in progress…never felt I am jobless.'
    },
    {
      name: 'MANOJ',
      img:'/Students/manoj.png',
      primary:'IPS officer',
      review:'Chambal ka hoon samjha IPS ban gaya na to pehla letter jo sign karunga…teri suspension ka hoga ye baat yaad rakhna.'
    },
    {
      name: 'SHRADDHA',
      img:'/Students/shra.png',
      primary:'IRS officer',
      review:'The world will join your melody if you dance to your own rhythm because life is a melody.'
    }
  
  ]
export default App;

    