'use client'
import { useState } from "react"
import NavBar from "../components/navbar";
import Image from "next/image"
import { Roboto_Slab } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
/* import Footer from "../components/footer"; */
import debounce from 'lodash.debounce';





const roboto = Roboto_Slab({ weight:'400', subsets:['latin'] })
const dmdis = DM_Serif_Display({ weight:'400', subsets:['latin'] })


//Carousel Item types defined here
type CarouselItemProps = {
    title: string;
    active: any;
    onClick: (title: string) => void;
  };

//Contents object key type is defined here as a union
type ContentKey = 'About The Artist' | 'What is a Thangka?' | 'Educations' | 'Accolades';

type ContentProp = { title: string, };

const Accolades = () => {
  const cards = [
    {
      image: '/images/padmashree.jpg',
      alt: 'Padmashree Award 2022',
      title: 'Padmashree Award 2022',
      description: 'Presented by the President of India.'
    },
    {
      image: '/images/NA12.jpg',
      alt: 'National Award 1981',
      title: 'National Award 1981',
      description: 'Presented by the President of India.'
    },
    {
      image: '/images/KN1.jpg',
      alt: 'Kala Nidhi Award 2006',
      title: 'Kala Nidhi Award 2006',
      description: 'Presented by the Gov of Harayana.'
    },
    {
      image: '/images/KR1.jpg',
      alt: 'Kala Ratna Award 2022',
      title: 'Kala Ratna Award 2022',
      description: 'Presented by the V-President of India.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (key : any) => {
    setSelectedIndex(key)
    document.addEventListener('keydown', handleKeyDown);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event : any) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  return (
    <>
      {/* Accolades content */}
      <div className={`w-fit h-fit grid grid-rows lg:grid-cols-2 gap-4 text-left tracking-wider px-[10%] pt-5 pb-[10%] lg:px-5 text-[black] ${dmdis.className}`}>
        {/* Render cards */}
        {cards.map((card, index) => (
          <div key={index} className="cursor-default h-fit bg-gradient-to-r from-[#ACA688] via-[#F4F3EF] to-[#ACA688] col-span-1 rounded-xl group hover:shadow-xl hover:to-[#F4F3EF]" onClick={() => openModal(index)}>
            <div className="h-fit">
              <Image src={card.image} alt={card.alt} width={300} height={300} className="p-0 w-auto rounded-t-xl" />
              <div className="left-0 mx-2 my-2">
                <h1 className="text-md sm:text-xl sm:group-hover:ml-7 duration-500 ease-in-out">{card.title}</h1>
                <p className="text-[10px] sm:text-[13px] sm:group-hover:ml-7 duration-500 ease-in-out pb-5">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm flex justify-center items-center" >
          <div className="" >
            <div className="flex flex-row gap-2 flex-wrap text-left modal-content" onClick={(e) => e.stopPropagation()} >
              <Image src={cards[selectedIndex]?.image} alt={`Full View of ${cards[selectedIndex]?.alt}`} width={700} height={700} className="h-auto auto opacity-0 transition-opacity duration-[2s] rounded-xl" onLoadingComplete={(image) => image.classList.remove("opacity-0")}/>
              <div className="text-white grid items-start">
                <div className="rounded-b-xl rounded-r-xl bg-black/50 p-2">
                  <h1>{cards[selectedIndex]?.title}</h1>
                  <p>{cards[selectedIndex]?.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute px-1 top-4 right-4 flex flex-row">
              <p className="rounded-md border-black bg-gray-200 text-black border-[1px] p-2">esc</p>
              <p className="p-2">or</p>
              <button onClick={closeModal} className=" text-black hover:text-red-300 rounded-full">X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



//Record defines the Contents as type Object with ContentKey as the key and the value as type React.ReactNode 
const Contents: Record<ContentKey, React.ReactNode> = {
    'About The Artist': (
        <article className="grid lg:grid-cols-2 items-center py-0 lg:py-20">
          <div className="w-full"><p className="m-2 w-fit mt-10 text-sm border-[#DF6C4F] border-b-2 border-r-0 lg:border-b-0 lg:border-r-4 px-5 backdrop-blur-sm">Khandu Wangchuk Bhutia (lama) grew up in a small rural village of Sakyong, West Sikkim, India. He was born to parents, Late Jigmee Wangchuk Lama and Late Chunni Dolkar Bhutia in the year 1959. His father was a revered artist, a spiritual master and a monk in the sacred Pemayangtse Monastery. During the mid to late 1960s, his father was tasked by the Chogyal of Sikkim, His royal highness Shri Palden Thendup Namgyal along with the requests from the Udor Chesum of the Pemayangtse Monastery, the monks and the public of Sikkim (mainly West Sikkim), to construct a wooden structure in the Pemayangtse Monastery depicting the realm of Heaven and Guru Padmasambhava&apos;s palace ( Sangdolpalri ). The wooden structure stills stands tall (17 ft) in Pemayangtse Monastery. It was during this time that Khandu Wangchuk Bhutia, developed an interest of the Buddhist arts. His father noticing the keen son, decided to send him to a well known Thangka Artist in Kalimpong called Shri Phuntsok Sangpo .His teacher was a Thangka Master of the old Tsangri style and was well received by high personalities during his time. Shri Phuntsok Sangpo specialised in the Terser traditions.
      </p></div>
        <div className=" w-full h-full grid justify-center items-center p-5"> <div className="relative w-fit h-fit">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-lime-400 blur-2xl rounded-[50%] animate-[pulse_2s_ease-in-out_infinite]"> </div>
        <Image src='/images/profile12.jpg' alt="Image of Khandu Wangchuk Bhutia " width={300} height={300}   className=" relative  rounded-[50%]  border-[10px] border-white "/></div></div>
        </article>
      ),
      'What is a Thangka?': (
        <div className="grid grid-cols-2 grid-rows-2">
          <p className="mt-10">Thangka art is an ancient form of scroll painting originated in Tibet. It consists of the painting and the brocade. Thangkas are usually made to visualise buddhist scriptures. This visualisation helps in various dharma practices and meditations. One crucial aspect of thangka is that it should be as accurate as mentioned in the scriptures, any inconsistency will hamper in a practitioner&apos;s growth in the dharma practice and meditations.
          </p>
          
          <p>A problem that plagues the modern society of buddhism is the availability of a correct visualisation of Thangka figures. There is an abundance of thangkas that is a copy of a copy which is commercialised to meet the demands. So to be a master artist in Thangka one must also have good knowledge of reading and deciphering buddhist scriptures wich takes more than 6 years to complete and couple more years to master and more years to develop specialisations and so on. </p>
        </div>
        
      ),
      'Educations': (
        <div className="text-center grid grid-cols-2">
          <p className="mt-10 col-span-1">Khandu Wangchuk is an ordained monk of Pemayangtse Monastery, where he studied scriptures at a young age. He was also schooled in formal education in Senior Secondary School, Pelling but only till grade 6. Khandu Wangchuk completely his studies of the Thangka Arts under Shri Phunstok Sangpo and was a master by the age of 21. He also briefly trained under another artist called Shri Zapa Acho, who was a master artist of Tsangri style but of a slightly different variation. Khandu Wangchuk Bhutia was also specialised in the Terser traditions at the early ages. His terser Thangkas are donned in various Dharma centers of H.H. the Kyabje Dudjom Rimpoche around the world. He is well known for his thangka called the Terser Chokshing (Terser Refuge tree) which is an important Thangka for Terser practitioner.
           He later on developed his own style (derivative of the Tsangri Style), and also started to expand into other specialisations like the Payul traditions and other various traditions. He has made countless thangkas over the years. He has also been advocating for the protecting the traditional way of thangka painting as he notices mistakes in the modern thangkas which is a result of over copying and not understanding scriptures. He started a training center in Namchi called the Khanchendzonga Handicraft center in 1980 where he taught young individuals from all aspects of life, the art of Thangka paintings.
          </p>
          
          <br/><br/><br/>
        </div>
      ),
      
      'Accolades': (
              <>
                <Accolades />
        </>
      ),
};

const CarouselItem : React.FC<CarouselItemProps> = ({ title, active, onClick }) => {
    return (
      <div
        className={`cursor-pointer py-2 px-5 ${roboto.className} ${active ? 'backdrop-blur-sm rounded-full text-[20px] text-[#DF6C4F] border-[#ACA688] lg:border-x-2 flex justify-center sm:justify-between'  : 'text-[15px] text-[#ACA688]/50 lg:border-r-2 border-[#ACA688]/20 hover:opacity-100 hover:text-green-500 duration-300 ease-in hover:pl-6'}`}
        onClick={() => onClick(title)}>
        <span>{title}</span>
        {active && <span className="text-[20px] hidden sm:inline">&rarr;</span>}
        {active && <span className="text-[20px] inline sm:hidden">&darr;</span>}
      </div>
    );
  };

  //{Contents[title as ContentKey]} asserts that title is of type ContentKey
const Content: React.FC<ContentProp> = ( {title} ) => {
      return (
        <div className={`h-full text-black ${roboto.className}`}>
        <h1 className={`text-3xl font-bold h-auto flex justify-center pt-3 underline underline-offset-8 decoration-[#DF6C4F]`}>{title}</h1>
        <div id="content" className={`pt-5 h-fit flex items-center justify-center`}>  
          <div className={`text-left h-full lg:text-center whitespace-pre-wrap`}>
          {Contents[title as ContentKey]}
        </div>
      </div>
      </div>
  );
};

const titles = ['About The Artist', 'What is a Thangka?', 'Educations', 'Accolades'];
const HomePage = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTitleClick = (title: string) => {
      const index = titles.indexOf(title);
      setActiveIndex(index);
  }
  const handleScroll = debounce((e: { deltaY: number; }) => {
      const delta = Math.sign(e.deltaY);
      console.log(delta)
      const newIndex = (activeIndex + delta + titles.length) % titles.length;
      setActiveIndex(newIndex);
    },100);
    const rotatedTitles = [
      ...titles.slice(activeIndex),
      ...titles.slice(0, activeIndex),
    ];

    return(
        
        <div className="h-screen w-screen overflow-hidden">
          <NavBar />
        <div className="h-auto sm:h-full flex flex-col sm:flex-row">
        <div className="w-full px-5 sm:pt-10 sm:w-1/4 h-full flex flex-col flex-wrap justify-center text-center sm:text-left transition-transform border-r-0 border-b-2 sm:border-b-0 sm:border-r-2 border-[#ACA688] overflow-hidden" onWheel={handleScroll} >
        {rotatedTitles.map((title) => (
          <CarouselItem
            key={title}
            title={title}
            active={title === titles[activeIndex]}
            onClick={handleTitleClick}
          />
        ))}
      
      </div>
      <div className=" w-full flex-grow md:rounded-tl-2xl overflow-y-auto max-h-[70svh] sm:max-h-[88svh] md:max-h-[90svh] lg:max-h-[100svh]" >
      <Content title={titles[activeIndex]} />
      </div>
    </div>
    {/* <Footer /> */}
        </div>
    ) 
}

export default HomePage;
