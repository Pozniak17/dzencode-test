import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px;
  border-bottom: 1px solid var(--Badges, #f2f4f7);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: green;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const TimeText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;
