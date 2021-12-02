import styled from "styled-components";
import countPlotImg from "../../plots/death_counts.png";
import countPlotBySexImg from "../../plots/death_counts_by_sex.png";
export const CountPlotImg = styled.div`
  background: url(${countPlotImg}) no-repeat center center/cover;
  width: 45rem;
  height: 35rem;
  margin: 1rem 0;
`;

export const CountPlotBySexImg = styled.div`
  background: url(${countPlotBySexImg}) no-repeat center center/cover;
  width: 45rem;
  height: 35rem;
  margin: 1rem 0;
`;
