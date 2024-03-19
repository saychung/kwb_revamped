"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Roboto_Slab } from "next/font/google";
import Image from 'next/image';
const roboto = Roboto_Slab({ weight:'400', subsets:['latin'] })
interface LocationProps {
  location: string
}

const NavBar = ({location}:LocationProps ) => {
  const currRoute = usePathname();

  const navLinks = [
    { href: '/Shop', title: 'Shop' },
    { href: '/Works', title: 'Works'},
  ];
  return (
    <nav className='bg-[url(/nnnoise.svg)]  lg:mb-0 border-[#ACA688] border-b-2'>
      
      <ul className='flex flex-row gap-3 justify-center pt-4  '>
          <li><Link href={'/Home'} className='h-fit mb-6'>
            <Image src="/logoico.ico" alt="Logo Icon" width={300} height={300} className={`${ 
                location === 'Home' ?  "border-[1px] " : "border-0 hover:border-[1px]"
              } inline-block w-[40px] h-[40px] border-offset-4 border-black m-[1px] rounded-xl opacity-0 transition-opacity duration-100 ease-in-out backdrop-blur-md`} onLoad={(e)=>e.currentTarget.classList.remove('opacity-0')}/>
              </Link>
              </li>
          {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`${ 
                location === link.title ?  "text-orange-500 text-bold lg:rounded-t-md" : "text-black hover:text-green-500 rounded-md hover:animate-pulse duration-50 ease-in-out"
              } inline-block p-2 ${roboto.className}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;