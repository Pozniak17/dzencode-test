import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      Not Found, go home!!!
      <Link to="/" />
    </div>
  );
}
