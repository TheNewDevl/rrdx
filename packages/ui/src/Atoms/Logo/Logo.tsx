import style from "./Logo.module.scss";
import logo from "../../assets/argentBankLogo.png";
import { Title } from "../Title/Title";

/**
 * Render the img logo and the text logo for screen readers
 * ## Usage
 * ```jsx
 * <Logo />
 * ```
 */
export const Logo = () => {
  return (
    <>
      <div className={style.Logo}>
        <img src={logo} alt="Argent Bank Logo" />
      </div>
      <Title level={"1"} srOnly children={"Argent Bank"} />
    </>
  );
};

/** Created by carlos on 06/01/2023 */
