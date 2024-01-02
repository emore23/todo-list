import styled from "styled-components";
import { THEME } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  width: 455px;
  gap: 24px;

  @media (min-width: 768px) {
    width: 736px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;

    p {
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      font-family: ${THEME.FONT_FAMILY.DEFAULT};
      font-size: ${THEME.FONT_SIZE.MD};
      color: ${THEME.COLORS.PRODUCT_BLUE};
    }

    span {
      display: flex;
      padding: 2px 8px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 100px;
      background: ${THEME.COLORS.BASE_GRAY_400};
    }
  }
`;

export const ListTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
