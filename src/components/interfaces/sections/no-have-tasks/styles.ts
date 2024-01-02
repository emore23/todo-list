import styled from "styled-components";
import { THEME } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  border-top: 1px solid ${THEME.COLORS.BASE_GRAY_400};
  width: 100%;
  padding: 64px 24px;

  img {
    width: 56px;
    height: 56px;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      text-align: center;
      color: ${THEME.COLORS.BASE_GRAY_300};
      font-family: ${THEME.FONT_FAMILY.DEFAULT};
      font-size: ${THEME.FONT_SIZE.LG};
      font-style: normal;
      font-weight: 700;
      line-height: ${THEME.LINE_HEIGHT.DEFAULT};
    }

    span {
      text-align: center;
      color: ${THEME.COLORS.BASE_GRAY_300};
      font-family: ${THEME.FONT_FAMILY.DEFAULT};
      font-size: ${THEME.FONT_SIZE.LG};
      font-style: normal;
      font-weight: 400;
      line-height: ${THEME.LINE_HEIGHT.DEFAULT};
    }
  }
`;
