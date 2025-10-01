import { Link } from "react-router-dom";
import Form from "./Form";
import User from "./User";
import Links from "./Links";
import { useProfile } from "../../service/auth";
import { useEffect } from "react";

const Header = () => {
  const { user, error, isLoading } = useProfile();
  useEffect(() => {
    console.log("Header user updated:", user);
  }, [user]);
  return (
    <header className="p-5 shadow">
      <div className="max flex justify-between gap-4 md:gap-8">
        <Link to="/">
          <img src="/logo.png" alt="fiverr logo" className="w-[100px]" />
        </Link>

        <Form />

        <div className="flex items-center gap-2 relative group">
          {!error && user ? <User user={user} /> : <Links />}
        </div>
      </div>
    </header>
  );
};

export default Header;
