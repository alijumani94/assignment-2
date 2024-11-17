import {Montserrat} from "next/font/google";
import Navbar from './components/navbar';

const montserrat= Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
})

export default function page(){
  return(
        // the whole container which contains all containers
    <div className="w-[1440px] h-[1132px] bg-[rgb(37,43,66)]">
      <header>
        <Navbar/>
      </header>

        {/* //Main body div, that contains the whole content except navbar */}
        <div className="flex flex-col items-center w-[1046px] ml-[197px] py-20 gap-20">

          {/* //body container */}
          <div className="flex flex-col items-center text-center w-[699px] h-[496px] py-10 gap-10">

            <h5 className={`${montserrat.className} font-bold text-base leading-6 tracking-[0.1px] text-[#23A6F0]`}>
              Welcome
              </h5>

              <h1 className= {`${montserrat.className} w-[552px] h-[160px] mx-auto text-center text-white font-bold text-[58px] leading-[80px] tracking-[0.2px]`}>
              Selling on the internet like a pro   
              </h1>

              <h4 className={`${montserrat.className} w-[536px] h-[60px] mx-auto font-normal text-[20px] text-white leading-[30px] tracking-[0.2px]`}>
              We know how large objects will act, but things on a 
              small scale just do not act that way.
              </h4>

              {/*span container for two small buttons in body after text */}
              <span className='flex w-[365px] h-[52px] mx-auto gap-[10px]'>

                <button className={`${montserrat.className} w-[220px] h-[52px] py-[15px] px-10 font-bold rounded-[5px] text-[14px] leading-[22px] tracking-[0.2px] bg-[#23A6F0] text-white`}>
                  Get Quote Now
                </button>

                <button className={`${montserrat.className} w-[193px] h-[52px] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] border-[1px] border-[#23A6F0] text-white`}>
                Learn More
                </button>

              </span>

              {/* div container for last three white boxes */}
              <div className='flex justify-center w-[1046px] h-[292px] my-28 gap-[30px] '>
                
                {/* div1 */}
                <div className='flex flex-col w-[328px] h-[292px] py-[35px] px-10 gap-5 bg-white shadow-custom'>
                  <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#FFDCD1] ">

                  </div>
                  <h5 className={`${montserrat.className} w-40 h-6 font-bold text-left text-base leading-6 tracking-[0.1px] text-[#252B42]`}>
                    training Courses
                  </h5>

                  <div className="w-[50px] h-[2px] bg-[#E74040]"></div>

                  <p className={`${montserrat.className} w-[222px] h-[60px] text-left font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]`}>
                The gradual accumulation of 
                information about atomic and 
                small-scale behaviour...
                </p>
                </div>

                {/* div2 */}
                <div className='flex flex-col w-[329px] h-[292px] py-[35px] px-10 gap-5 bg-white shadow-custom'>
                <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#B9EAA8] ">
                  </div>

                <h5 className={`${montserrat.className} w-48 h-6 font-bold text-left text-base leading-6 tracking-[0.1px] text-[#252B42]`}>
                2,769 online courses
                  </h5>

                  <div className="w-[50px] h-[2px] bg-[#E74040]"></div>

                  <p className={`${montserrat.className} w-[222px] h-[60px] text-left font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]`}>
                The gradual accumulation of 
                information about atomic and 
                small-scale behaviour...
                </p>
                
               </div>

               {/* div3 */}
               <div className='flex flex-col w-[329px] h-[292px] py-[35px] px-10 gap-5 bg-[#23A6F0] shadow-custom'>
               <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-white ">
                </div>

               <h5 className={`${montserrat.className} w-40 h-6 font-bold text-left text-base leading-6 tracking-[0.1px] text-white`}>
                    training Courses
                  </h5>

                  <div className="w-[50px] h-[2px] bg-white"></div>

                  <p className={`${montserrat.className} w-[222px] h-[60px] text-left font-normal text-sm leading-5 tracking-[0.2px] text-white`}>
                The gradual accumulation of 
                information about atomic and 
                small-scale behaviour...
                </p>
               
              </div>
              </div>

          </div>
        </div>
        </div>
      )
}