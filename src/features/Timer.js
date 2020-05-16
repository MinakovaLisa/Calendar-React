import React, { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";

import * as commonStyle from "../theme";

import moment from "moment";

const TimerWrapper = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;

  padding: 10px;
`;

const Time = styled.div`
  font-size: 40px;
  color: rgb(236, 236, 236);
`;

const Date = styled.div`
  color: ${(props) => props.theme.commonStyle.blue};
`;
function Timer(props) {
  return (
    <ThemeProvider theme={commonStyle}>
      <TimerWrapper>
        <Time>{props.time}</Time>
        <Date>{moment(props.today).format("LL")}</Date>
      </TimerWrapper>
    </ThemeProvider>
  );
}

export default Timer;
