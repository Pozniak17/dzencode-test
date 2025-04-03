import { useEffect, useState } from "react";
import { GiBlackHandShield } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";
import { Header, LogoWrapper, TimeWrapper, TimeText } from "./AppBar.styled";
import Form from "../Form/Form";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

export default function AppBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Header>
      <LogoWrapper>
        <GiBlackHandShield size="40" />
        <h3>INVENTORY</h3>
      </LogoWrapper>

      <Form />

      <TimeWrapper>
        <div>
          <p>{format(time, "EEEE", { locale: ru }).toUpperCase()}</p>
          <p>{format(time, "dd MMM. yyyy", { locale: ru })}</p>
        </div>

        <TimeText>
          <MdAccessTime color="green" />
          {format(time, "HH:mm")}
        </TimeText>
      </TimeWrapper>
    </Header>
  );
}
