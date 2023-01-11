import style from "./Header.module.scss";
import { Logo } from "../../Atoms/Logo/Logo";
import { ReactNode } from "react";
import { Link } from "../../Atoms/Link/Link";
import { Loader } from "../../Atoms/Loader/Loader";

interface HeaderProps {
  profileLinkNode: ReactNode;
  isLoggedIn: boolean;
  onLogoutClick: () => void;
  isLoading: boolean;
}

/**
 * Header Component
 * Displays the logo, navigation links and the username
 *  ## Usage
 *  ```jsx
 *  <Header profileLinkNode=‘username’ isLoading={} isLoggedIn=‘true’ onLogoutClick={() => {}} />
 *  ```
 */
export const Header = ({ profileLinkNode, isLoggedIn, onLogoutClick, isLoading }: HeaderProps) => {
  return (
    <header className={style.Header}>
      <Link path="/" icon={""} children={<Logo />} />
      <nav>
        {isLoading ? (
          <Loader color={"#000"} size={20} />
        ) : (
          <>
            {isLoggedIn && (
              <>
                <Link path="/profile" icon="user-circle" children={profileLinkNode} />
                <Link path="/" icon="sign-out" linkText={"Sign Out"} onClick={onLogoutClick} />
              </>
            )}
            {!isLoggedIn && <Link path="/login" icon={"user-circle"} linkText={"Sign In"} />}
          </>
        )}
      </nav>
    </header>
  );
};

/** Created by carlos on 06/01/2023 */
