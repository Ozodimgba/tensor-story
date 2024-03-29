import Image from "next/image";
import { DM_Sans } from "next/font/google";
import animationData from "../../public/scene.json";
import footer from "../../public/footer.json"
import { useInView } from 'react-intersection-observer';
import { useLottie } from "lottie-react";
import Lottie from 'lottie-react';

const dm = DM_Sans({ subsets: ["latin"] });

export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });

  const { View } = useLottie({
     animationData: footer,
     loop: 3
    });

    const Tweet = () => (
      <div className="flex flex-1" dangerouslySetInnerHTML={{ __html: `
        <!-- Paste the Twitter embed code here -->
        <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">HEY DEGENS!<br>Here made the simplest tutorial of how to use the new feature of <a href="https://twitter.com/tensor_hq?ref_src=twsrc%5Etfw">@tensor_hq</a> PRICE LOCK. <a href="https://t.co/11dx3wVMum">pic.twitter.com/11dx3wVMum</a></p>&mdash; MyEmiAdv (@MyEmiAdv) <a href="https://twitter.com/MyEmiAdv/status/1756138366217629706?ref_src=twsrc%5Etfw">February 10, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      ` }} />
    );

  return (
    <main
     ref={ref}
      className={`flex min-h-screen text-white flex-col ${dm.className}`}
    >
      <section className="bg-black flex justify-center">
      <Lottie className="h-[500px] w-[500px]" animationData={animationData} />
      </section>
      <section className="h-[100vh] bg-black w-full flex flex-col items-center justify-center">
        <div className="px-6">
        <h2 className="font-medium text-center leading-[4.5rem] px-[20%] text-[3.8rem]">So you want to be able to go long on your NFTs ?</h2>
        </div>
        <div className="px-[23%] text-center text-lg pt-6">
          <p>Tensor&apos;s price lock allows users to lock down the current price of an NFT for 7 days. Depending on the type of lock they can purchased they can make a margin off the difference between the future price and current price.</p>
        </div>
      </section>
      
      <section className="bg-white relative -z-[3]">
  <div className="h-[100%] w-[100%] bg-black grid grid-cols-7 relative z[-3]">

    <div className="h-[100%] flex items-center justify-center w-[100%] relative">
      <div id="points-section" className="py-[%] bg-green-00 flex flex-col items-center justify-between h-[100%] z-[10] w-[30%]">
        
        <div className="w-[5rem] bg-black flex flex-col justify-center items-center">
        <div className="h-[9rem] w-full bg-black"></div>

        <div 
        id="dot"
        className="rounded-full bg-black flex justify-center items-center border-black border-[7px]">
        <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-white flex justify-center items-center border-white border-[2px]">
        </div>
        </div>

        </div>

        <div className="rounded-full bg-black flex justify-center items-center border-black border-[7px]">
        <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-white flex justify-center items-center border-white border-[2px]">
        </div>
        </div>

        <div className="rounded-full bg-black flex justify-center items-center border-black border-[7px]">
        <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-white flex justify-center items-center border-white border-[2px]">
        </div>
        </div>

        {/* <div className="rounded-full bg-black flex justify-center items-center border-black border-[7px]">
        <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-white flex justify-center items-center border-white border-[2px]">
        </div>
        </div> */}

        <div className="rounded-full bg-black flex justify-center items-center border-black border-[7px]">
        <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-white flex justify-center items-center border-white border-[2px]">
        </div>
        </div>

        <div className="w-[5rem] bg-black flex flex-col justify-center items-center">
        <div className="rounded-full bg-black flex justify-center items-center border-black border-[7px]">
        <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-white flex justify-center items-center border-white border-[2px]">
        </div>
        </div>
        <div className="h-[9rem] w-full bg-black"></div>
        </div>
      </div>
      <div id="progress" className="bg-[#FFFFFF30] fixed top-0 h-[100%] w-[4px]">
        <div id="progress-line" className="bg-gradient-to-b from-blue-500 to-green-500 h-[50vh] rounded-full"></div>
      </div>
    </div>


    <div 
    style={{ position: 'sticky', top: '50vh' }}
    className="h-[100%] w-[100%] col-span-3 z-40">
      <div id='timeline' className="flex flex-col py-[25%] px-10">
       <img src="tensor.png" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Introducing Tensor&apos;s Price Lock</h3>
       <p className="text-xl">Lock the current price of an NFT asset and net the difference between the lock and the price</p>
       <div className="flex gap-4">
       <img src="page-1.png" alt="" className="rounded-md mt-6" />
       <img src="page-2.png" alt="" className="rounded-md mt-6" />
       </div>
       {/* <button className="bg-black my-4 text-white font-bold px-8 py-3 border-white border-[1.5px] w-[50%] rounded-full hover:bg-white hover:text-black">
       Go to twitter thread
      </button> */}
      </div>

      <div className="flex flex-col py-[25%] px-10">
       <img src="tensorian.png" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Types of Price Locks</h3>
       <p className="text-lg">There are two types of Price locks which are Buy lock and Sell lock and we&apos;ll be diving into both of them next...</p>
       <button className="bg-black my-4 text-white font-bold px-8 py-3 border-white border-[1.5px] w-[50%] rounded-lg hover:bg-white">
       Go to twitter thread
      </button>
       <div className="mt-6 flex justify-between gap-4 w-[75vw]">
        <div className="w-[50%] h-[60%]">
        <Tweet />
        </div>
        <div>

        </div>
        <div className="w-[50%] h-[100%]">
        <img src="page-5.png" alt="" className="rounded-md" />
        </div>
        
       </div>
      </div>

      <div className="flex flex-col py-[25%] px-10">
       <img src="tensorian.png" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Buy locks</h3>
       <p >In a &apos;Buy lock&apos; you lock the current price of an NFT with the hope of the NFT price going up so that when you exercise your lock...your lock price will be lower than the current price then you can make a profit on the difference.</p>
       <button className="bg-white my-4 text-black font-bold px-8 py-3 border-white border-[1.5px] w-[50%] rounded-lg hover:bg-white">
       Purchase a buy lock
      </button>
       <div className="mt-6 flex justify-between gap-4 w-[75vw]">
        <div className="w-[50%] h-[60%]">
        <Tweet />
        </div>
        <div>

        </div>
        <div className="w-[50%] h-[100%]">
        <img src="page-6.png" alt="" className="rounded-md" />
        </div>
        
       </div>
      </div>

      <div className="flex flex-col py-[25%] px-10">
       <img src="tensorian2.png" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Sell locks</h3>
       <p>In a &apos;Sell Lock&apos; you lock the current price of an NFT with the hope of the NFT price going down so that when you exercise your lock...your lock price will be higher than the current price then you can make a profit on the difference.</p>
       <button className="bg-white my-4 text-black font-bold px-8 py-3 border-white border-[1.5px] w-[50%] rounded-lg hover:bg-white">
       Purchase a sell lock
      </button>
       <div className="mt-6 flex justify-between gap-4 w-[75vw]">
        <div className="w-[50%] h-[60%]">
        <Tweet />
        </div>
        <div>

        </div>
        <div className="w-[50%] h-[100%]">
        <img src="page-7.png" alt="" className="rounded-md" />
        </div>
        
       </div>
      </div>

      <div className="flex flex-col py-[25%] px-10">
       <img src="tensorian3.png" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Funding locks</h3>
       <p>Funding locks is akin to market making. When you fund a lock you provide the NFT required for the lock. People can then come and buy your lock and when they do you get yield, now if price goes the way the buyer predicted, you get SOL at the price you agreed to lock your NFT for as long as the buyer exercises within 7days and if it doesnt go the way they planned, you get your NFT back and dont forget your yield</p>
       <button className="bg-white my-4 text-black font-bold px-8 py-3 border-white border-[1.5px] w-[50%] rounded-lg hover:bg-white">
       Fund a lock
      </button>
       {/* <div className="mt-6 flex justify-between gap-4 w-[75vw]">
        <div className="w-[50%] h-[60%]">
        <Tweet />
        </div>
        <div>

        </div>
        <div className="w-[50%] h-[100%]">
        <img src="page-7.png" alt="" className="rounded-md" />
        </div>
        
       </div> */}
      </div>

      {/* <div className="flex flex-col py-[25%] px-10">
       <h3 className="font-semibold text-2xl py-4">Start bidding, buying and selling</h3>
       <p>Once you have the plugin installed, this website will recognize it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</p>
      </div> */}
    </div>
  </div>
</section>
<section>
 <>{View}</>
</section>
    </main>
  );
}
