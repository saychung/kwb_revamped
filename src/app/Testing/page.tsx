'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Modal from './Modal'

interface BoolProps {
    flag: boolean
}

export default function MyModal() {

  const [flag, setFlag] = useState(false)
  

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setFlag(true)}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          Open dialog
        </button>
      </div>
        {flag && <Modal isOpen={flag} setIsOpen={setFlag} text={'Whats Up!!'}/>}
      
    </>
  )
}
