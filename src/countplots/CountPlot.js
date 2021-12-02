import React from "react";
import {
  CountPlotImg,
  CountPlotBySexImg
} from "../components/styles/CountPlot.styled";
import { Text, Divider } from "../styles/General.styled";

const CountPlot = () => {
  return (
    <>
      <CountPlotImg />
      <Text ta="center" m="-0.5rem 9rem 0 9rem">
        The above count plot display the count of dealth caused by various
        reasons. Malignant Neoplams, Diseases of Heart, Cerebrovasucular
        Disease, and Influenza tops the list.
      </Text>
      <Divider />
      <CountPlotBySexImg />
      <Text ta="center" m="-0.5rem 9rem 0 9rem">
        Surprisingly, amongst the top leading causes of death, the numbers for
        male and female are really similar, some of them even identical.
      </Text>
      <Divider />
      <Text ta="center" fs="1.75rem" m="-3rem 9rem 3rem 9rem">
        More to come...
      </Text>
    </>
  );
};

export default CountPlot;
