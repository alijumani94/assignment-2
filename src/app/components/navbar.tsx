import {Montserrat} from "next/font/google"
 const montserrat= Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
})

const Navbar= ()=>{
    return(
          // {/*  Main container of navigation bar (header) */}
          <div className="flex items-center w-[1322px] h-[91px] ml-[59px]">
            
            {/* //Brand name bar */}
            <div className="flex items-center w-[187px] h-[58px] ml-[136px]">
              <h3 className="h-[32px] w-[152px] text-white font-bold text-[24px] font-montserrat leading-[32px] tracking-[0.1px]">
                Brand Name
              </h3>
            </div>

            {/* //Right side of navigation bar except brandname */}
            <div className="flex items-center w-[815px] h-[58px] tm-[17px]">   
              <ul id="navigationLinks" className="w-[275px] h-[24px] flex list-none gap-[21px] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px] justify-center">
              <li><a href="#home">Home</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
              </ul>
              
              {/* //container for login and join us button. */}
              <div className="flex items-center w-[189px] h-[52px] gap-[45px] ml-[426px] text-white">
                <button className={`${montserrat.className} w-[41px] h-[22px] font-montserrat text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] text-right`}>
                Login
                </button>
                {/* join us button */}
                <button className="w-[110px] h-[52] rounded-[5px] pt-[15px] pr-[25px] pb-[15px] pl-[25px] gap-[15px] bg-[#23A6F0] text-white">
                  Join us
                </button>
              </div>


            </div>

          </div>
        
    );
};
export default Navbar;
