import "./Widget.css";
import React from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';
import TaskIcon from '@mui/icons-material/Task';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Widget = ({ type, amount }) => {
  let data;

  switch (type) {
    case "pending":
      data = {
        title: "Pending",
        isMoney: false,
        link: "See all users",
        icon: (
          <ListAltIcon
            className="icon"
            style={{
              color: "green",
            }}
          />
        ),
      };
      break;
    case "ongoing":
      data = {
        title: "Ongoing",
        isMoney: false,
        link: "See all users",
        icon: (
          <HistoryIcon
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "delivery":
      data = {
        title: "Delivery",
        isMoney: false,
        link: "View all orders",
        icon: (
          <LocalShippingIcon
            className="icon"
            style={{
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "completed":
      data = {
        title: "Completed",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <TaskIcon
            className="icon"
          />
        ),
      };
      break;
    case "profit":
      data = {
        title: "Income",
        isMoney: true,
        link: "See details",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div>
        {data.icon}
      </div>
      <div>
        <p class="value">{data.title}</p>
        <p class="name">{amount}</p>
      </div>
    </div>
    // <div className="widget">
    //   <div className="left">
    //     <span className="title">{data.title}</span>
    //     <span className="counter">
    //       {data.isMoney && "$"} {amount}
    //     </span>
    //     <span className="link">{data.link}</span>
    //   </div>
    //   <div className="right">
    //     {data.icon}
    //   </div>
    // </div>
  );
};

export default Widget;
