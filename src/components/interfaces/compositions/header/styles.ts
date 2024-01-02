import styled from "styled-components";
import { THEME } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  position: relative;
  background: ${THEME.COLORS.BASE_GRAY_700};

  img {
    width: 126px;
    height: 48px;
    flex-shrink: 0;
  }
`;
