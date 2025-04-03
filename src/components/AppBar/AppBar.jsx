import { GrMandriva } from "react-icons/gr";
import { Header, LogoWrapper } from "./AppBar.styled";

export default function AppBar() {
  return (
    <Header>
      <LogoWrapper>
        <GrMandriva />
        <h3>INVENTORY</h3>
      </LogoWrapper>
    </Header>
  );
}
