import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${THEME.COLORS.PRODUCT_BLUE};

  &:hover {
    cursor: pointer;
    border: 2px solid ${THEME.COLORS.PRODUCT_BLUE_DARK};
    background-color: ${THEME.COLORS.OVERLAY};
  }

  &.appearence-checked {
    width: 24px;
    color: ${THEME.COLORS.BASE_GRAY_100};
    background: ${THEME.COLORS.PRODUCT_PURPLE_DARK};
    border: 2px solid ${THEME.COLORS.PRODUCT_PURPLE_DARK};

    &.appearence-checked:hover {
      cursor: pointer;
      border: 2px solid ${THEME.COLORS.PRODUCT_PURPLE};
      background-color: ${THEME.COLORS.PRODUCT_PURPLE};
    }
  }
`;
