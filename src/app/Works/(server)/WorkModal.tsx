import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { Dispatch, SetStateAction } from 'react';
import { Works } from '../../../../types/Works';
import Image from 'next/image';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  item: Works;
};
export default function Modal({ isOpen, setIsOpen, item } : ModalProps){
    function closeModal() {
        setIsOpen(false)
     }

    return(
    <div className='opacity-0 transition-opacity duration-1000 ease-in-out' onLoad={(e)=>{e.currentTarget.classList.remove('opacity-0')}}> 
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal} >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black/50 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white">
                    {item.name}
                  </Dialog.Title>
                  <div className="mt-2 justify-center">
                    <Image src={item.image} alt={`Image of ${item.name}`} width={item.dimensions.width/2} height={item.dimensions.height/2} className={`${item.dimensions.width >= item.dimensions.height? "w-full h-auto":"h-full w-auto"} p-2 rounded-md`} />
                    <p className="text-sm text-white">
                     {item.description.toString()}
                     {item.location.toString()}.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>)
}