"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ weight:'400', subsets:['latin'] })
interface LocationProps {
  location: string
}

const NavBar = ({location}:LocationProps ) => {
  const currRoute = usePathname();

  const navLinks = [
    { href: '/Home', title: 'Home' },
    { href: '/Shop', title: 'Shop' },
    { href: '/Works', title: 'Works'},
  ];
  return (
    <nav className='bg-[url(/nnnoise.svg)]  lg:mb-0 border-[#ACA688] border-b-2'>
      <ul className='flex flex-row gap-3 justify-center pt-4  '>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`${
                currRoute === '/' && link.href === '/Home'? "text-[#DF6C4F] underline underline-offset-8 text-bold lg:rounded-t-md" : 
                location === link.title ?  "text-orange-500 underline underline-offset-8 text-bold lg:rounded-t-md" : "text-black hover:text-green-500 rounded-md hover:animate-pulse duration-50 ease-in-out"
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