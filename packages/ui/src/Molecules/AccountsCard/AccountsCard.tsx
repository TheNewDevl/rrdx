import style from "./AccountsCard.module.scss";
import { Button } from "../../Atoms/Button/Button";

interface AccountsCardProps {
  account: {
    title: string;
    amount: number;
    desc: string;
  };
  CTA: {
    CTAAction: () => void;
    CTAText: string;
  };
}

/**
 * Renders a card with an account information
 * @important Also renders a button to perform an action so remember to pass a function to the CTAAction prop
 *
 * ## Usage
 * ```jsx
 * <AccountsCard
 *  account={{title: "Current Account", amount: 1000,desc: "Your current account balance"}}
 *  CTA={{ CTAAction: () => {}, CTAText: "View account"}}
 *  />
 * ```
 */
export const AccountsCard = ({ account, CTA }: AccountsCardProps) => {
  return (
    <section className={style.AccountsCard}>
      <div className={style.content}>
        <h3 className={style.title}>{account.title}</h3>
        <p className={style.amount}>{account.amount}</p>
        <p className={style.desc}>{account.desc}</p>
      </div>
      <div className={style.cta}>
        <Button onClick={CTA.CTAAction} text={CTA.CTAText} cta />
      </div>
    </section>
  );
};

/** Created by carlos on 10/01/2023 */
