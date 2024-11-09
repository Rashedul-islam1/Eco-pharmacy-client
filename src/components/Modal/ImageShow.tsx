"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function ImageShow({ image }: any) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100"
        >
          <FiEye />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto min-h-screen flex justify-center items-center">
            <div className="flex  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative border border-white/60  rounded-xl shadow-xl transition-all">
                  <Image
                    src={image}
                    width={1230}
                    height={100}
                    alt="Expanded view"
                    className="max-w-full max-h-[80vh] overflow-hidden rounded-xl w-full h-full object-cover"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-2 w-8 h-8 right-2 text-primary hover:text-white  bg-[#333333] hover:bg-[#1e1e1e] duration-300 flex justify-center items-center rounded-full text-2xl"
                  >
                    <IoMdClose />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
