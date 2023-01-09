import style from "./Logo.module.scss";
import logo from "../../assets/argentBankLogo.png";

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
      <h1 className={style.sr_only}>Argent Bank</h1>
    </>
  );
};

/** Created by carlos on 06/01/2023 */
