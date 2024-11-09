import { notifications } from "@/data/dummyData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-primary/10" : "bg-gray-100"
        } h-8 w-8 rounded-full flex justify-center items-center group hover:bg-primary/10 duration-500 cursor-pointer`}
      >
        <div className="relative">
          <IoNotificationsOutline
            className={`${
              isOpen ? "text-primary" : "text-gray-500"
            } text-xl group-hover:text-primary duration-500`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-[250px] rounded mt-1 bg-white border shadow-md  right-0">
          <div className="flex items-center justify-between px-5 border-b py-3">
            <h2 className="text-[16px] font-semibold">Notifications</h2>
            <div className="bg-primary rounded-full w-6 h-6 text-white text-[12px] flex items-center justify-center">
              {notifications.length}
            </div>
          </div>
          <div className="overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)] max-h-[300px]">
            {notifications.map(({ image, name, message, timestamp }, i) => (
              <div
                key={i}
                className={`py-3 px-3 flex gap-3 text-sm text-secondary hover:text-primary cursor-pointer hover:bg-[rgb(20,184,166,0.08)] ${
                  i !== notifications.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <Image
                    width={1200}
                    height={100}
                    src={image}
                    alt=""
                    className="w-[30px]"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-start w-full">
                    <h3>{name}</h3>
                    <p className="text-[12px]">{timestamp}</p>
                  </div>
                  <p className="text-[12px]">{message.slice(0, 20)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
