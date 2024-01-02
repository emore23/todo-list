import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.input`
  display: flex;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${THEME.COLORS.BASE_GRAY_500};

  color: ${THEME.COLORS.BASE_GRAY_100};
  font-family: ${THEME.FONT_FAMILY.DEFAULT};
  font-size: ${THEME.FONT_SIZE.LG};
  font-weight: 400;
  line-height: ${THEME.LINE_HEIGHT.DEFAULT};

  ::placeholder {
    color: ${THEME.COLORS.BASE_GRAY_300};
    font-family: ${THEME.FONT_FAMILY.DEFAULT};
    font-size: ${THEME.FONT_SIZE.LG};
    font-weight: 400;
    line-height: ${THEME.LINE_HEIGHT.DEFAULT};
  }

  &:focus-within {
    border: 1px solid ${THEME.COLORS.PRODUCT_PURPLE_DARK};
  }

  @media (min-width: 768px) {
    width: 604px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${THEME.COLORS.PRODUCT_PURPLE_DARK};
    transition: all ease-in-out 0.5s;
  }
`;
