import Header from "./Header";
import Section from "./Section";
import cybertrukk from "../assets/tesla-cybertruck-seeklogo.svg"
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    
      <Header />
      <Section
        className={`bg-model-3 bg-center`}
        model={"Model 3"}
        description={"$7,500 Federal Tax Credit Available"}
        description2={"From $33,990 After Est. Savings"}
        sup={1}
        sup2={2}
        value={"Demo Drive"}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}
      />
       <Section
        className={`bg-model-y bg-center`}
        model={"Model Y"}
        description={"From $31,490"}
        savinginfo={"After Est. Savings"}
        paraClass={"text-[14px] text-gray-800"}
        value={"Demo Drive"}
        sup={3}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}

      />
       <Section
        className={`bg-model-x bg-center`}
        model={"Model X"}
        description={"From $63,990"}
        savinginfo={"After Est. Savings"}
        paraClass={"text-[14px] text-gray-800"}
        value={"Demo Drive"}
        sup={4}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}
      />
       <Section
        className={`bg-model-s bg-center text-white`}
        model={"Model S"}
        description={"From $66,490"}
        savinginfo={"After Est. Savings"}
        paraClass={"text-[14px] text-white"}
        value={"Demo Drive"}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}
        sup={5}
      />
      {/* className={'mt-5'} */}
      <Section
        className={`bg-cybertrkk bg-center text-white`}
        cybertrukk={cybertrukk}
        value={"LEARN MORE"}
        paraClass={"text-[14px] text-white"}
        leftButton={'text-zinc-400 bg-zinc-950 py-[7px] border-t-[4px] border-gray-600 rounded-none mt-72 hover:bg-zinc-800'}
        rightButton={'text-zinc-400 bg-zinc-950 py-[7px] border-[1px] border-gray-600 rounded-none mt-72 sm:mt-0 hover:bg-zinc-800' }
        
      />
      <Section
        className={`bg-solarpanels bg-center text-white`}
        model={"Solar Panels"}
        savinginfo={"Schedule a Virtual Consultation"}
        paraClass={"text-[14px] text-white underline font-semibold"}
        value={"Demo Drive"}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}
      />
       <Section
        className={`bg-solarroof bg-center text-zinc-900`}
        model={"Solar Roof"}
        savinginfo={"Produce Clean Energy From Your Roof"}
        paraClass={"text-[14px] text-zinc-900 font-semibold"}
        value={"Demo Drive"}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}
      />
        <Section
        className={`bg-powerwall bg-center text-zinc-900`}
        model={"Power Wall"}
        value={"Demo Drive"}
        leftButton={'bg-white text-gray-500 py-[7px]'}
        rightButton={'text-white bg-zinc-900 py-[7px] hover:bg-zinc-800'}
      />
      <Section
        className={`bg-accessories bg-center text-zinc-900`}
        model={"Accessories"}
        value={"Shop Now"}
        leftButton={'bg-white text-gray-500 py-[7px] hidden'}
        rightButton={'bg-white text-gray-500 py-[7px] '}
      />
    < Footer/>
    </>
  
  );
};

export default Home;
