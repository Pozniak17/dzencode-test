import { Sidebar, Image, List, Link } from "./NavigationMenu.styled";

export default function NavigationMenu() {
  return (
    <Sidebar>
      <Image src="/images/Sidebar/TrumpPortrait.jpg" alt="" />
      <nav>
        <List>
          <li>
            <Link to="/">ПРИХОД</Link>
          </li>
          <li>
            <Link to="/groups">ГРУППЫ</Link>
          </li>
          <li>
            <Link to="/products">ПРОДУКТЫ</Link>
          </li>
          <li>
            <Link to="/users">ПОЛЬЗОВАТЕЛИ</Link>
          </li>
          <li>
            <Link to="/settings">НАСТРОЙКИ</Link>
          </li>
        </List>
      </nav>
    </Sidebar>
  );
}
