'use client'
import { useEffect, useState } from "react"
import NavBar from "../components/navbar";
import Image from "next/image"
import { Roboto_Slab } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import Footer from "../components/footer";
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
type ContentKey = 'About The Artist' | 'What is a Thangka?' | 'Educations and Contributions' | 'Accolades';

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

  let del=0
  return (
    <>
      {/* Accolades content */}
      <div className={`w-fit h-fit grid grid-rows lg:grid-cols-2 gap-3 text-left tracking-wider px-[10%] pt-3 pb-[8%] lg:px-5 text-[black] ${dmdis.className}`}>
        {/* Render cards */}
        {cards.map((card, index) => (
          <div key={index} className="cursor-default h-fit backdrop-blur-xl border-slate-400 border-[1px] col-span-1 rounded-xl group hover:shadow-xl" onClick={() => openModal(index)}> 
            <div className="h-fit">
              <Image src={card.image} alt={card.alt} placeholder="blur" blurDataURL="loading ..." width={300} height={300} className="w-auto rounded-t-xl m-1" />
              <div className="left-0 mx-2 mb-2 border-t-[1px] border-black group-hover:bg-white/40">
                <h1 className="text-md sm:text-xl sm:group-hover:ml-7 duration-500 ease-in-out">{card.title}</h1>
                <p className="text-[10px] sm:text-[13px] sm:group-hover:ml-7 duration-500 ease-in-out pb-5">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div 
        className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm flex justify-center items-center " 
        onClick={(e) => e.stopPropagation()} >
            <div id="modalCard"  className="h-fit w-fit flex text-left relative bg-white/70 rounded-xl opacity-0 transition-opacity duration-[2s]" onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} >
              <Image src={cards[selectedIndex]?.image} alt={`Full View of ${cards[selectedIndex]?.alt}`} width={700} height={700} className="h-auto p-5 rounded-xl" />
                <div className="absolute bottom-3 w-full bg-black/50 text-white pl-5">
                  <h1>{cards[selectedIndex]?.title}</h1>
                  <p>{cards[selectedIndex]?.description}</p>
              </div>
              <button onClick={closeModal} className="absolute top-1 right-2 text-black hover:text-white">x</button>
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
          <div className="w-full"><p className="m-2 w-fit mt-10 text-sm border-[#DF6C4F] border-b-2 border-r-0 lg:border-b-0 lg:border-r-4 px-5 backdrop-blur-sm">Khandu Wangchuk Bhutia (lama) grew up in a small rural village of Sakyong, West Sikkim, India. He was born to parents, Late Jigmee Wangchuk Lama and Late Chunni Dolkar Bhutia in the year 1959. His father was a revered artist, a spiritual master and a monk in the sacred Pemayangtse Monastery. During the mid to late 1960s, his father was tasked by the Chogyal of Sikkim, His royal highness Shri Palden Thendup Namgyal along with the requests from the Udor Chesum of the Pemayangtse Monastery, the monks and the public of Sikkim (mainly West Sikkim), to construct a wooden structure in the Pemayangtse Monastery depicting the realm of Heaven and Guru Padmasambhava&apos;s palace ( Sangdolpalri ). The wooden structure stills stands tall (17 ft) in Pemayangtse Monastery. It was during this time that Khandu Wangchuk Bhutia, developed an interest of the Buddhist arts. His father noticing the keen son, decided to send him to a well known Thangka Artist in Kalimpong called Shri Phuntsok Sangpo .His teacher was a Thangka Master of the old Tsangri style and was well received by high personalities during his time. Shri Phuntsok Sangpo specialised in the Terser traditions. He was recently a recepient of the prestigious Padmashree Award in 2022.
      </p></div>
        <div className=" w-full h-full grid justify-center items-center p-5"> <div className="relative w-fit h-fit">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-orange-300 blur-2xl rounded-[50%] animate-[pulse_2s_ease-in-out_infinite]"> </div>
        <Image src='/images/profile12.jpg' alt="Image of Khandu Wangchuk Bhutia " placeholder="blur" blurDataURL="/images/profile12blur.jpg" width={280} height={280}   className=" h-full w-full relative  rounded-[50%]  border-[10px] border-white "/></div></div>
        </article>
      ),
      'What is a Thangka?': (
        
          <article  className="grid lg:grid-cols-2 items-center py-0 lg:py-20">
          <div className="w-full"><p className="m-2 w-fit mt-10 text-sm border-[#DF6C4F] border-b-2 border-r-0 lg:border-b-0 lg:border-r-4 px-5 backdrop-blur-sm">Thangka is an ancient buddhist art form originated in the Western tibetan region. Its origin was influenced by the art forms of Nepal and China where distinct styles of Thangka paintings were developed relative to the influence of the neighbouring regions. There were the <i>U-dri</i> styles as well as the <i>Tsang-dri</i> styles and the <i>Ka-dri</i> that were prevalent during the rise of the tibetan buddhism. The differences in these styles were the influence of the Chinese and Nepalese and the different forms of measurements regarding proportions. But with the passage of times, there were slight variations in the styles within themselves, which were due to the choices of the Thangka Masters. The preparation of Colors, border demarcations and pitch of color, etc. varied according to teachers. Thangkas are usually made to visualise buddhist scriptures. This visualisations helped in various dharma practices and meditations. One crucial aspect of thangka is that it should be as accurate as mentioned in the scriptures, any inconsistency will hamper in a practitioner&apos;s growth in the dharma practice and meditations.
          (<i>reference- The clear mirror depicting the pearl rosaries of Thangka Painting of the Tsang pa traditions of Tibet- Phuntsok Sangpo</i>)
        </p></div>
        <div className=" w-full h-full grid justify-center items-center p-5"> <div className="relative w-fit h-fit">
        <Image src='/images/TerserChokshingLow.jpg' placeholder="blur" blurDataURL="/images/TerserChokshingLowblur.jpg" alt="Terser Chokshing" width={380} height={520} className=" relative  border-[10px] border-white "/><div className="w-full bg-black/20 text-white absolute bottom-5 backdrop-blur-sm px-[10px]">Terser Chokshing, Khandu Wangchuk Bhutia</div></div></div>
        </article>
        
      ),
      'Educations and Contributions': (
        <article className={`grid lg:grid-cols-2 py-0 lg:py-20`}>
          <div className="w-full h-fit border-[#DF6C4F] border-b-2 border-r-0 lg:border-b-0 lg:border-r-4"><p className="m-2 w-fit mt-10 text-sm px-5 backdrop-blur-sm">Khandu Wangchuk Bhutia was an ordained monk of Pemayangtse Monastery,Pelling. He did his formal schooling at Pelling Senior Secondary School upto the 6th grade. It was during his time school days that he would visit his father (an artist and a dharma master) at his work. His father was tasked by the King of Sikkim as well as the local public to construct a wooden structure called the Sangdopalri (a 16 ft wooden structure that represented the heavenly abode of Guru Padmasambhava) at Pemayangtse. Khandu Wangchuk was fascinated by the creative process of constructing that he spent most of his days at the construction site. His father on learning about his interests in the creative arts, sent Khandu Wangchuk Bhutia to Kalimpong to learn and master the art of Thangka Painting under the tutelage of Shir Phuntsok Sangpo, a well reknowned master of Thangka Painting in the pure <i>Tsang-Dri</i> traditions. Thereafter he also took courses from another Thangka Master called Shri Zapa Acho in Zoom, Darjeeling. At the age of 22 having dedicated around 11 years to learning the art, Khandu Wangchuk Bhutia went on to become a master in his own right and started an institute where he taught students from all walks of life.
        </p>
        <p className="m-2 w-fit mt-10 text-sm px-5 backdrop-blur-sm">He has taught around 350 - 400 students till date. He has worked in various monasteries in Sikkim, Nepal and Ladakh. His institute was located in Namchi where he taught students free of cost which also included free fooding and lodging. Despite being financially unstable, he worked tirelessly to spread the influence of Thangka Painting to the young masses. He also spread the influence of Thangka Paintings, by participating in exhibitions in and outside of India. Currently at the age of 75 years young, he teaches select few students and works mostly on commissions from dharma masters and devout buddhists.</p></div>
        <div className=" w-full h-full flex items-center justify-center p-5"> <div className="h-fit w-fit flex flex-wrap justify-center gap-2"> <div className="relative w-fit h-auto bg-white">
        <Image src='/images/Sangopalri_low.jpg' alt="Sangdopalri" width={250} height={250} className=" relative  border-[10px] border-white "/><div className="w-full absolute bg-black/20 text-white bottom-5 backdrop-blur-sm px-[10px]">Sandopalri, Pelling</div></div><div className="relative w-fit h-auto">
        <Image src='/images/phuntsoksangpo.jpg' alt="Image of Khandu Wangchuk Bhutia " width={250} height={250} className=" relative  border-[10px] border-white "/><div className="w-full absolute bg-black/20 bottom-5 backdrop-blur-sm px-[10px] text-white">Shri Phuntsok Sangpo</div></div></div></div>
        </article>
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
        <div
        className={`h-full text-black ${roboto.className}`}>
        <h1 className={`text-3xl font-bold h-auto flex justify-center pt-3 underline underline-offset-8 decoration-[#DF6C4F] text-wrap text-center`}>{title}</h1>
        <div id="content" className={`pt-5 h-fit flex items-center justify-center`}>  
          <div className={`text-left h-fit lg:text-center whitespace-pre-wrap`}>
          {Contents[title as ContentKey]}
        </div>
      </div>
      </div>
  );
};

const titles = ['About The Artist', 'What is a Thangka?', 'Educations and Contributions', 'Accolades'];
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTitleClick = (title: string) => {
      const index = titles.indexOf(title);
      setActiveIndex(index);
  }
  const handleScroll = debounce((e: { deltaY: number; }) => {
      const delta = Math.sign(e.deltaY);
      const newIndex = (activeIndex + delta + titles.length) % titles.length;
      setActiveIndex(newIndex);
    },100);
    const rotatedTitles = [
      ...titles.slice(activeIndex),
      ...titles.slice(0, activeIndex),
    ];

  

    return(
        
        <div className="h-screen w-screen overflow-hidden relative">
          <NavBar location={'Home'} />
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
      <div  className=" w-full flex-grow md:rounded-tl-2xl overflow-y-auto max-h-[57svh] galaxy-folded:max-h-[64svh] sm:max-h-[86.7svh] md:max-h-[90svh] lg:max-h-[100svh]" >
      <Content title={titles[activeIndex]} />
      </div>
    </div>
      <footer className="fixed w-full h-fit bottom-0"><Footer /></footer>
        </div>
    ) 
}

export default HomePage;
