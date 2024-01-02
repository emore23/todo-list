import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.div`
  button.appeareance-delete-default {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background: ${THEME.COLORS.NONE};
    color: ${THEME.COLORS.BASE_GRAY_300};

    &.appeareance-delete-default:hover {
      cursor: pointer;
      color: ${THEME.COLORS.ALERT};
      border-radius: 4px;
      background: ${THEME.COLORS.BASE_GRAY_400};
      transition: all ease-in-out 0.5s;
    }
  }

  button.appeareance-create-default {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px;
    background: ${THEME.COLORS.PRODUCT_BLUE_DARK};
    border-radius: 8px;
    gap: 8px;
    color: ${THEME.COLORS.BASE_GRAY_100};
    cursor: pointer;

    p {
      font-family: ${THEME.FONT_FAMILY.DEFAULT};
      font-weight: 700;
      font-size: ${THEME.FONT_SIZE.MD};
      line-height: ${THEME.LINE_HEIGHT.DEFAULT};
      color: ${THEME.COLORS.BASE_GRAY_100};
    }

    &.appeareance-create-default:hover {
      background: ${THEME.COLORS.PRODUCT_BLUE};
      transition: all ease-in-out 0.5s;
    }
  }
`;
