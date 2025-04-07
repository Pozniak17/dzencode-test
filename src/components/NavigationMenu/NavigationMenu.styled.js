import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.div`
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  padding: 60px 40px;

  margin-top: 97px;
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  list-style: none;
  text-align: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:active {
    text-decoration: underline 1px solid green;
  }

  &.active {
    border-bottom: 3px solid green;
  }
`;
