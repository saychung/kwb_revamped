import Image from "next/image";


const IconsSpread = () => {
  const icons = [
    {
      image: '/vercel.svg',
      alt: 'vercel',
      width: 20,
      height: 20
    },
    {
      image: '/tailwind.svg',
      alt: 'tailwind',
      width: 20,
      height: 20
    },
    {
      image: '/nextjs.svg',
      alt: 'nextjs',
      width: 20,
      height: 20
    },
    {
      image: '/sanitylogo.svg',
      alt: 'sanity',
      width: 20,
      height: 20
    },
    {
      image: '/typescript.svg',
      alt: 'typescript',
      width: 20,
      height: 20
    }

  ];

  return (
    <>
      <div className={`w-full max-h-fit pr-10 gap-4 flex justify-end items-center text-black`}>
        <div className="text-[9px]">{`Made using >`}</div>
        {icons.map((icon, index) => (
          <div key={index} className="">
              <Image src={icon.image} alt={icon.alt} width={icon.width} height={icon.height} className="h-auto w-[20px] object-contain" />
          </div>
        ))}
      </div>
    </>
  );
};


const Footer = () => {
    
    return ( 
      <footer className=" bg-[url(/nnnoise.svg)] h-fit w-full border-t-2 flex items-center border-[#ACA688]/50 text-sm z-10">
            <div className="hidden sm:inline-block h-fit w-full text-right">Developed by Saychung</div><IconsSpread />
      </footer>
    );
  };
  
  export default Footer;