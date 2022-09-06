import * as React from "react";
import { useState, useEffect, useContext, setState } from "react";
import {
  BlockStack,
  Button,
  Card,
  Checkbox,
  InlineStack,
  Text,
  TextBlock,
  TextField,
  extend,
  render,
  useData,
  useContainer,
  useSessionToken,
  useLocale,
} from "@shopify/admin-ui-extensions-react";

import { DataContext } from "./contextValue";

export default function CreateSwym({ data }) {
  // const { setSubscriptionList } = useContext(DataContext);

  // const [subscribedTo, setSubscribedTo] = useState();

  // const addToSubscribedList = (id) => {
  //   setSubscribedTo(id);
  // };
  // const createSubscription = () => {};

  const {
    planTitle,
    setPlanTitle,
    percentageOff,
    setPercentageOff,
    deliveryFrequency,
    setDeliveryFrequency,
  } = useContext(DataContext);

  const onHandleClick = () => {
    console.log(planTitle);
    console.log(deliveryFrequency);
    console.log(percentageOff);

    let data = {
      id: Math.floor(Math.random() * 100 + 1),
      title: planTitle,
      delivery: deliveryFrequency,
      percent: percentageOff,
    };

    // var newArray = [];

    // newArray.push(subscriptionList);

    // newArray.push(data);

    // setSubscriptionList(data);

    // console.log(subscriptionList, data.id);
  };

  const onHandleTitleChange = (event) => {
    // console.log(event);
    setPlanTitle(event);
  };

  const onHandleDeliveryChange = (event) => {
    // console.log(event);
    setDeliveryFrequency(event);
  };

  const onHandlePercentChange = (event) => {
    // console.log(event);
    setPercentageOff(event);
  };

  return (
    <>
      <BlockStack spacing="none">
        <TextBlock size="extraLarge">Hello! Create subscription plan</TextBlock>
      </BlockStack>

      <Card
        title={`Create subscription plan for Product id ${data.productId}`}
        sectioned
      >
        <TextField
          label="Plan title"
          value={planTitle}
          onChange={onHandleTitleChange}
        />
      </Card>

      <Card title="Delivery and discount" sectioned>
        <InlineStack>
          <TextField
            type="number"
            label="Delivery frequency (in weeks)"
            value={deliveryFrequency}
            onChange={onHandleDeliveryChange}
          />
          <TextField
            type="number"
            label="Percentage off (%)"
            value={percentageOff}
            onChange={onHandlePercentChange}
          />
        </InlineStack>
      </Card>

      <InlineStack inlineAlignment="trailing">
        <Button title="Cancel" />
        <Button title="Create Plan" kind="primary" onPress={onHandleClick} />
      </InlineStack>
    </>
  );
}
