import { GiBlackHandShield } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";
import { Header, LogoWrapper, TimeWrapper, TimeText } from "./AppBar.styled";
import Form from "../Form/Form";

export default function AppBar() {
  return (
    <Header>
      <LogoWrapper>
        <GiBlackHandShield size="40" />
        <h3>INVENTORY</h3>
      </LogoWrapper>

      <Form />

      <TimeWrapper>
        <div>
          <p>Вторник</p>
          <p>06 Апр. 2017</p>
        </div>

        <TimeText>
          <MdAccessTime color="green" />
          17:20
        </TimeText>
      </TimeWrapper>
    </Header>
  );
}
