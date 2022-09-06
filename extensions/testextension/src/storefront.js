import * as React from "react";
import { useState, useEffect } from "react";
export default function StoreFront() {
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [subscribedTo, setSubscribedTo] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  // const data = [
  //     {
  //         id:1,
  //         title:"Plan 1",
  //         delivery: "3 days",
  //         percent:"10%"
  //     },
  //     {
  //         id:2,
  //         title:"Plan 2",
  //         delivery: "5 days",
  //         percent:"5%"
  //     },
  //     {
  //         id:3,
  //         title:"Plan 3",
  //         delivery: "2-6 days",
  //         percent:"15%"
  //     },
  // ]

  let bgColor;
  const handleClick = (id) => {
    console.log(id);
    const found = data.find((element) => element.id === id);
    setHasSubscribed(true);
    setSubscribedTo(found.id);
  };
  return (
    <div className="container">
      {data &&
        data.length > 0 &&
        data.map((value) => (
          <div className="wrapper" key={value.id}>
            <p className="header">{value.title}</p>
            <p className="content">Percent off:{value.percent}</p>
            <p className="content">Delivery Time: {value.delivery}</p>
            <a href="#_">
              <div className="button-center">
                <div
                  className="leesmeer"
                  style={{
                    background: hasSubscribed
                      ? subscribedTo === value.id
                        ? "#23c186"
                        : "#e91e63"
                      : "#2196f3",
                  }}
                >
                  <b
                    onClick={() => handleClick(value.id)}
                    style={{ color: "black" }}
                  >
                    {!hasSubscribed
                      ? "Subscribe"
                      : value.id === subscribedTo
                      ? `Subscribed to the plan `
                      : "Cannot subscribe"}
                  </b>
                </div>
              </div>
            </a>
          </div>
        ))}
      {!data && <div>No data</div>}
    </div>
  );
}
