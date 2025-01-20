import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { Avatar } from "antd";
import { LuChevronDown } from "react-icons/lu";
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
  } = data;

  const [isEditActive, setIsEditActive] = useState(false);

  useEffect(() => {
    const arrow = document.getElementById("arrow" + id);
    if (isEditActive) {
      gsap.to(arrow, { rotation: 180 });
    } else {
      gsap.to(arrow, { rotation: 0 });
    }
  }, [isEditActive]);

  return (
    <div className={styles.main}>
      <div className={styles.date}>
        <p>{day}</p>
        <p>{date}</p>
      </div>
      <span></span>
      <div className={styles.meetingInfo}>
        <div className="flex items-center gap-3 w-full">
          <GoClockFill className="text-black/50 font-normal" />
          <p>{timeRange}</p>
        </div>
        <div className="flex items-center gap-3 w-full">
          <IoLocationSharp className="text-black/50 font-normal" />
          <p className="line-clamp-1">{location}</p>
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
      <button
        className={styles.editButton}
        onClick={() => {
          setIsEditActive(!isEditActive);
        }}
      >
        <p>Edit</p>
        <LuChevronDown id={"arrow" + id} />
      </button>
    </div>
  );
};

export default Card;
