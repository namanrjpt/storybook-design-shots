import React, { useState, useEffect, useRef } from "react";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import "./style.css";

const Final = () => {
  const [title, setTitle] = useState("");
  const [titleLength, setTitleLength] = useState(60);
  const [selected, setSelected] = useState("Reminder");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date ? date.format("dddd, DD MMM YYYY") : null);
  };

  const [time1, setTime1] = useState("19:00");
  const [time2, setTime2] = useState("19:00");

  useEffect(() => {
    setTitleLength(60 - title.length);
  }, [title]);

  const submit = () => {
    const dataObject = {
      title,
      selectedEvent: selected,
      color: selectedColor,
      date: selectedDate,
      timeOne: time1,
      timeTwo: time2,
    };

    console.log(dataObject);
  };

  const options = ["19:00", "20:00", "21:00", "22:00", "23:00"];

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black">
      <div className="w-[25%]">
        <div className="min-h-[50vh] min-w-[25%] pb-8 bg-[#3B3B3F] rounded-tl-3xl rounded-tr-3xl flex flex-col">
          <div className="flex items-start w-full py-6 px-7 gap-[.35rem] h-[10%]">
            <div className="w-[.8rem] aspect-square bg-[#ff4f4f] rounded-full"></div>
            <div className="w-[.8rem] aspect-square bg-[#ffdb10] rounded-full"></div>
            <div className="w-[.8rem] aspect-square bg-[#36b636] rounded-full"></div>
          </div>
          <div className="h-[90%] w-full px-7">
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-white text-2xl">Create an Event</h1>
              <HiOutlineRectangleStack className="text-white/30 text-3xl" />
            </div>
            <div className="flex items-center justify-between mt-9 relative">
              <input
                type="text"
                className="text-white bg-transparent outline-none border-b-2 border-white/10 w-full placeholder:text-2xl text-2xl pb-2 py-1 focus:border-[#615eff]/90 transition-all duration-300"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  if (e.target.value.length > 60) {
                    return;
                  }
                  setTitle(e.target.value);
                }}
              />
              <div className="absolute right-0 bottom-[.75rem] bg-white/20 text-white text-sm px-2 py-1 rounded-md">
                {titleLength}
              </div>
            </div>
            <div className="flex rounded-full mt-6 w-fit bg-[#303032] p-1">
              <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  selected === "Event"
                    ? "bg-[#4C4950] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setSelected("Event")}
              >
                Event
              </button>
              <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  selected === "Reminder"
                    ? "bg-[#4C4950] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setSelected("Reminder")}
              >
                Reminder
              </button>
            </div>
            <div className="w-full flex items-center gap-5 mt-5">
              <p className="text-[#9795a0]">Color</p>
              <div className="flex items-center w-full gap-2">
                <div
                  className={`w-[1.6rem] flex items-center justify-center aspect-square rounded-full bg-[red] transition-all ${
                    selectedColor == "red" && "border-2 !border-[white]"
                  }`}
                  onClick={(e) => {
                    setSelectedColor("red");
                  }}
                >
                  {selectedColor == "red" && (
                    <FaCheck className="text-sm transition-all" />
                  )}
                </div>
                <div
                  className={`w-[1.6rem] flex items-center justify-center aspect-square rounded-full bg-[orange] transition-all ${
                    selectedColor == "orange" && "border-2 !border-[white]"
                  }`}
                  onClick={(e) => {
                    setSelectedColor("orange");
                  }}
                >
                  {selectedColor == "orange" && (
                    <FaCheck className="text-sm transition-all" />
                  )}
                </div>
                <div
                  className={`w-[1.6rem] flex items-center justify-center aspect-square rounded-full bg-[yellow] transition-all ${
                    selectedColor == "yellow" && "border-2 !border-[white]"
                  }`}
                  onClick={(e) => {
                    setSelectedColor("yellow");
                  }}
                >
                  {selectedColor == "yellow" && (
                    <FaCheck className="text-sm transition-all" />
                  )}
                </div>
                <div
                  className={`w-[1.6rem] flex items-center justify-center aspect-square border-2 border-transparent rounded-full bg-[#2d9bf0] transition-all ${
                    selectedColor == "cyan" && "border-2 !border-[white]"
                  }`}
                  onClick={(e) => {
                    setSelectedColor("cyan");
                  }}
                >
                  {selectedColor == "cyan" && (
                    <FaCheck className="text-sm transition-all" />
                  )}
                </div>
                <div
                  className={`w-[1.6rem] flex items-center justify-center aspect-square border-2 border-transparent rounded-full bg-[#2d9bf0] transition-all ${
                    selectedColor == "skyblue" && "border-2 !border-[white]"
                  }`}
                  onClick={(e) => {
                    setSelectedColor("skyblue");
                  }}
                >
                  {selectedColor == "skyblue" && (
                    <FaCheck className="text-sm transition-all" />
                  )}
                </div>
                <div
                  className={`w-[1.6rem] flex items-center justify-center aspect-square border-2 border-transparent rounded-full bg-[#6260ED] transition-all ${
                    selectedColor == "purple" && "border-2 !border-[white]"
                  }`}
                  onClick={(e) => {
                    setSelectedColor("purple");
                  }}
                >
                  {selectedColor == "purple" && (
                    <FaCheck className="text-sm transition-all" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6">
              <p className="text-[#9795a0]">Date</p>
              <DatePicker
                onChange={handleDateChange}
                format="dddd, DD MMM YYYY"
                placeholder="Select Date"
                allowClear={false}
                className="custom-datepicker w-full h-10 px-3 py-5 rounded-lg bg-[#303032] text-gray-300 border border-gray-700  focus:outline-none hover:bg-[#3B3B3F] transition-all duration-300 hover:border-[#615eff] active:bg-[#3B3B3F] active:border-[#615eff] mt-3"
              />
              <div className="flex w-full items-center gap-2">
                <select
                  name="select1"
                  id=""
                  value={time1}
                  className="bg-[#303032] text-white border border-gray-700  focus:outline-none hover:bg-[#3B3B3F] transition-all duration-300 hover:border-[#615eff] active:bg-[#3B3B3F] active:border-[#615eff] mt-3 w-1/2 h-10 rounded-lg px-2"
                  onChange={(e) => setTime1(e.target.value)}
                >
                  {options.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <select
                  name="select1"
                  id=""
                  value={time2}
                  className="bg-[#303032] text-white border border-gray-700  focus:outline-none hover:bg-[#3B3B3F] transition-all duration-300 hover:border-[#615eff] active:bg-[#3B3B3F] active:border-[#615eff] mt-3 w-1/2 h-10 rounded-lg px-2"
                  onChange={(e) => setTime2(e.target.value)}
                >
                  {options.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-7 bg-[#303032] min-w-[25%] rounded-bl-3xl rounded-br-3xl flex flex-col items-center justify-center">
          <div className="w-full flex justify-between px-7">
            <div className="flex items-center justify-center gap-2">
              <p className="text-[#807d88] m-0 p-0">Advanced</p>
              <FaChevronDown className="text-[#807d88] " />
            </div>
            <div className="flex items-center justify-center w-1/2 gap-3">
              <button className="p-3 px-5 bg-[#39393B] text-white rounded-md shadow-md text-sm active:shadow-none active:scale-95">
                Cancel
              </button>
              <button
                className="p-3 px-5 bg-[#6260ED] text-white rounded-md shadow-md text-sm active:bg-[#615eff] active:shadow-none active:scale-95"
                onClick={submit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
