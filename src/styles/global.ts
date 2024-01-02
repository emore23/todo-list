import { createGlobalStyle } from "styled-components";
import { THEME } from "./theme";

export default createGlobalStyle`
  *, input {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  body {
    background: ${THEME.COLORS.BASE_GRAY_600};
    font-size: 14px;
    color: white;
    font-family: sans-serif, Inter;
  }
`;
