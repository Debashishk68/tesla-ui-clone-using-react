import Button from "./Button";
const Section = ({ bg, model, description, className, description2 ,sup,sup2,savinginfo,paraClass,leftButton,rightButton,value,cybertrukk}) => {
  return (
    <>
      <div
        className={`w-full h-screen  ${className} bg-cover bg-no-repeat  text-gray-900 gap-3`}
      >
        
        <div className="relative top-20 flex flex-col items-center font-roboto">
          {cybertrukk?<img src={cybertrukk} alt="" className="w-[500px] absolute top-[-190px]"/>:null}
          
          <h1 className="font-[500] text-[40px] cursor-default">{model}</h1>
          <div className="flex flex-col items-center cursor-default">
            <p className="text-2xl lg:text-xs font-[500] cursor-default">{description}<sup>{sup}</sup></p>
            <a href="" className="text-2xl lg:text-xs font-[500] text-gray-800 cursor-pointer underline">
              {description2}
              <sup>{sup2}</sup>
            </a>
            <p className={`${paraClass} cursor-default`}>{savinginfo}</p>
          </div>
        </div>

        <div className="h-screen flex sm:flex-col gap-5 justify-center items-center mt-20">
          <Button value={"Order Now"} className={leftButton} />
          <Button value={value} className={rightButton} />
        </div>
      </div>
    </>
  );
};

export default Section;
