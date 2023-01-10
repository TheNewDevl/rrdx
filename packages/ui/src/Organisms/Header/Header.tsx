import style from "./Header.module.scss";
import { Logo } from "../../Atoms/Logo/Logo";
import { useState } from "react";
import { Link } from "../../Atoms/Link/Link";

interface HeaderProps {}

/**
 * Header Component
 * Displays the logo, navigation links and the username
 *  ## Usage
 *  ```jsx
 *  <Header />
 *  ```
 */
export const Header = ({}: HeaderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("Tony");

  return (
    <header className={style.Header}>
      <Link path="/" linkText={""} icon={""} children={<Logo />} />
      <nav>
        {isLogged ? (
          <>
            <Link path="/profile" icon="user-circle" linkText={userName && userName} />
            <Link path="/" icon="sign-out" linkText={"Sign Out"} onClick={() => setIsLogged(false)} />
          </>
        ) : (
          <Link path="/login" icon={"user-circle"} linkText={"Sign In"} onClick={() => setIsLogged(true)} />
        )}
      </nav>
    </header>
  );
};

/** Created by carlos on 06/01/2023 */
