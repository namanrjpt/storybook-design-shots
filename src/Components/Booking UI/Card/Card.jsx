import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { Avatar, Dropdown } from "antd";
import { LuChevronDown } from "react-icons/lu";
import { MdSend } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdError } from "react-icons/md";
import gsap from "gsap";

const Card = ({ data }) => {
  const {
    timeRange,
    location,
    infoText,
    peopleCount,
    day,
    date,
    isCancelled,
    isError,
    id,
    isChangeMade,
  } = data;

  const [isEditActive, setIsEditActive] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null); // Track hovered item key

  useEffect(() => {
    const arrow = document.getElementById("arrow" + id);
    if (isEditActive) {
      gsap.to(arrow, { rotation: 180, duration: 0.3, ease: "power1" });
    } else {
      gsap.to(arrow, { rotation: 0, duration: 0.3, ease: "power1" });
    }
  }, [isEditActive]);

  const items = [
    {
      key: "1",
      label: (
        <div
          className="flex items-center gap-2 text-base text-black/60 hover:text-black"
          onMouseEnter={() => setHoveredKey("1")}
          onMouseLeave={() => setHoveredKey(null)}
        >
          <GoClockFill className="mr-2" />
          Reschedule booking
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex items-center gap-2 text-base text-black/60 hover:text-black"
          onMouseEnter={() => setHoveredKey("2")}
          onMouseLeave={() => setHoveredKey(null)}
        >
          <MdSend className="mr-2" />
          Request reschedule
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="flex items-center gap-2 text-base text-black/60 hover:text-black"
          onMouseEnter={() => setHoveredKey("3")}
          onMouseLeave={() => setHoveredKey(null)}
        >
          <IoLocationSharp className="mr-2" />
          Edit location
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="flex items-center gap-2 text-base text-black/60 hover:text-black"
          onMouseEnter={() => setHoveredKey("4")}
          onMouseLeave={() => setHoveredKey(null)}
        >
          <MdPersonAddAlt1 className="mr-2" />
          Invite people
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "5",
      label: (
        <div
          className="flex items-center gap-2 py-1 text-base text-black/60 hover:text-black"
          onMouseEnter={() => setHoveredKey("5")}
          onMouseLeave={() => setHoveredKey(null)}
        >
          <MdCancel className="mr-2" />
          Cancel Event
        </div>
      ),
    },
  ];

  const currentDay = new Date().toLocaleString("default", { weekday: "short" });
  const currentDateNumber = new Date().toLocaleString("default", {
    day: "2-digit",
  });

  return (
    <div className={styles.main}>
      {isCancelled && <div className={styles.cancelled}></div>}
      <div className={styles.date}>
        <p className={`${currentDay == day && "text-red-500"} `}>{day}</p>
        <p
          className={`${
            currentDateNumber == date && "text-red-500"
          } text-3xl font-semibold`}
        >
          {date}
        </p>
      </div>
      <span></span>
      <div className={styles.meetingInfo}>
        <div className="flex items-center gap-4 w-full">
          <GoClockFill className="text-black/50" size={17} />
          <p className="line-clamp-1 whitespace-nowrap">{timeRange}</p>
          {isError && <MdError className="text-orange-600" />}
        </div>
        <div className="flex items-center gap-3 w-full">
          <IoLocationSharp className="text-black/50" size={17} />
          <p className="line-clamp-1 whitespace-nowrap">{location}</p>
        </div>
      </div>
      <div className={styles.info}>
        <p className="text-black/50 font-normal">{infoText}</p>
        <Avatar.Group>
          {Array.from({ length: peopleCount }).map((_, index) => (
            <Avatar size="small" key={index} src="https://i.pravatar.cc/300" />
          ))}
        </Avatar.Group>
      </div>
      {isChangeMade && (
        <div className="bg-red-100 p-1 px-3 absolute right-[11rem] z-10 rounded-lg flex items-center justify-center gap-2">
          <p className="text-red-600 text-sm">15:30 - 16:30 requested</p>
        </div>
      )}
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        overlayStyle={{
          width: "250px",
        }}
      >
        <button
          className={styles.editButton}
          onClick={() => {
            setIsEditActive(!isEditActive);
          }}
        >
          <p>Edit</p>
          <LuChevronDown id={"arrow" + id} />
        </button>
      </Dropdown>
    </div>
  );
};

export default Card;
