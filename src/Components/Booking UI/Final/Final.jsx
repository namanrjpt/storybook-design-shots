import React, { useState, useEffect } from "react";
import { Segmented } from "antd";
import Card from "../Card/Card";

const Final = () => {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      timeRange: "10:00 AM - 11:00 AM",
      location: "Online",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Tue",
      date: "21",
      isCancelled: false,
      isError: false,
      meetingType: "Upcoming",
      month: "July",
      isChangeMade: false,
    },
    {
      id: 2,
      timeRange: "11:00 AM - 12:00 PM",
      location: "Office",
      infoText: "Design review",
      peopleCount: 3,
      day: "Wed",
      date: "28",
      isCancelled: true,
      isError: true,
      meetingType: "Upcoming",
      month: "July",
      isChangeMade: true,
    },
    {
      id: 3,
      timeRange: "12:00 PM - 01:00 PM",
      location: "Online",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Upcoming",
      month: "July",
      isChangeMade: false,
    },
    {
      id: 4,
      timeRange: "01:00 PM - 02:00 PM",
      location: "Office",
      infoText: "Design review",
      peopleCount: 3,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Upcoming",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 5,
      timeRange: "02:00 PM - 03:00 PM",
      location: "Online",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Pending",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 6,
      timeRange: "03:00 PM - 04:00 PM",
      location: "Office",
      infoText: "Design review",
      peopleCount: 3,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Pending",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 7,
      timeRange: "04:00 PM - 05:00 PM",
      location: "Online",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Pending",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 8,
      timeRange: "05:00 PM - 06:00 PM",
      location: "Office",
      infoText: "Design review",
      peopleCount: 3,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Pending",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 9,
      timeRange: "06:00 PM - 07:00 PM",
      location: "Online",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Recurring",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 10,
      timeRange: "07:00 PM - 08:00 PM",
      location: "Office",
      infoText: "Design review",
      peopleCount: 3,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Recurring",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 11,
      timeRange: "08:00 PM - 09:00 PM",
      location: "Online",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Recurring",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 12,
      timeRange: "09:00 PM - 10:00 PM",
      location: "Office",
      infoText: "Design review",
      peopleCount: 3,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Recurring",
      month: "June",
      isChangeMade: false,
    },
    {
      id: 13,
      timeRange: "10:00 PM - 11:00 PM",
      location: "Online       ",
      infoText: "Meeting with the team",
      peopleCount: 5,
      day: "Wed",
      date: "28",
      isCancelled: false,
      isError: false,
      meetingType: "Past",
      month: "June",
      isChangeMade: false,
    },
  ]);

  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  const [selected, setSelected] = useState("Upcoming");

  const changeSelected = (value) => {
    setSelected(value);
  };

  const groupedByMonth = cardData
    .filter((item) => item.meetingType === selected)
    .reduce((acc, item) => {
      if (!acc[item.month]) acc[item.month] = [];
      acc[item.month].push(item);
      return acc;
    }, {});

  const hasData = Object.keys(groupedByMonth).length > 0;

  return (
    <div className="bg-white h-screen w-full flex flex-col px-8 py-2">
      <div className="w-full py-5">
        <h2 className="text-black text-3xl font-bold">Bookings</h2>
        <p className="text-black/70 text-md font-light mt-2">
          See your scheduled events from your calendar events links.
        </p>
      </div>
      <div className="w-full flex flex-col items-start mt-4">
        <Segmented
          size="large"
          options={["Upcoming", "Pending", "Recurring", "Past", "Cancelled"]}
          onChange={(value) => {
            changeSelected(value);
          }}
        />
      </div>
      <div className="cardWrapper h-full w-full flex flex-col items-start gap-4 pt-10 overflow-y-auto">
        {hasData ? (
          Object.keys(groupedByMonth).map((month) => (
            <div
              key={month}
              className="month-section w-full flex flex-col items-start gap-2"
            >
              <h3 className="text-xl font-semibold text-black mb-4">{month}</h3>
              {groupedByMonth[month].map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </div>
          ))
        ) : (
          <div className="w-full h-full flex flex-col text-gray-500 px-2">
            <h3 className="text-xl font-medium">No events found</h3>
            <p className="font-light">
              Try selecting a different filter or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Final;
