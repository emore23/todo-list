import styled from "styled-components";
import { THEME } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${THEME.COLORS.BASE_GRAY_400};
  background: ${THEME.COLORS.BASE_GRAY_500};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    p {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      max-width: 600px;
      font-family: ${THEME.FONT_FAMILY.DEFAULT};
      font-size: ${THEME.FONT_SIZE.MD};
      line-height: ${THEME.LINE_HEIGHT.DEFAULT};
      font-style: normal;
      font-weight: 400;
    }

    .appearence-decoration-line {
      color: ${THEME.COLORS.BASE_GRAY_300};
      text-decoration-line: line-through;
    }

    .appearence-default {
      color: ${THEME.COLORS.BASE_GRAY_100};
    }
  }
`;
