import React, { createContext, useState } from "react";

export const DataContext = createContext({});

const ContextValue = ({ children }) => {
  // const [subscriptionList, setSubscriptionList] = useState([
  //   {
  //     //3 values
  //     // add to sl 1 // add to sl 2 // add to sl 3
  //     id: 0,
  //     title: "",
  //     percent: 0,
  //     delivery: 0,
  //     //  noOfSubscriptionsToThisList:0
  //   },
  // ]);

  const [planTitle, setPlanTitle] = useState([]);
  const [percentageOff, setPercentageOff] = useState([]);
  const [deliveryFrequency, setDeliveryFrequency] = useState([]);

  return (
    <DataContext.Provider
      value={{
        planTitle,
        setPlanTitle,
        percentageOff,
        setPercentageOff,
        deliveryFrequency,
        setDeliveryFrequency,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextValue;
