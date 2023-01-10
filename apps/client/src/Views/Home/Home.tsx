import style from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authLogout, fetchOrUpdateAuth } from "../../store/features/auth";
import { fetchOrUpdateUser, selectUser, userLogout } from "../../store/features/user";
import { useEffect } from "react";
import * as domain from "domain";
import { FeatureCard, FlexContainer, Title, Hero } from "@rrdx-mono/ui";
import { features, hero } from "../../mockup/homeMockup";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  /*  const user = useAppSelector(selectUser);
    const credentials = {
      email: "tony@stark.com",
      password: "password123",
    };
    const upCredentials = {
      firstName: "ony",
      lastName: "tark",
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
      console.log(user);
    }, [user]);*/

  return (
    <main style={{ flex: 1 }}>
      <Hero subTittles={hero.subtitles} titleText={hero.title} paragraphs={hero.text} backgroundImg={hero.heroBg} />
      <FlexContainer element={"section"}>
        <Title srOnly children={"Features"} />
        {features.map((ft, i) => (
          <FeatureCard imgSrc={ft.imgSrc} imgAlt={ft.imgAlt} titleText={ft.tittleText} desc={ft.desc} />
        ))}
      </FlexContainer>
      {/* <div className={style.Home}>
        Home view
        <button onClick={() => dispatch(fetchOrUpdateAuth(credentials))}>Login</button>
        <button onClick={() => dispatch(fetchOrUpdateUser())}>get user</button>
        <button onClick={() => dispatch(fetchOrUpdateUser(upCredentials))}>update user</button>
        <button
          onClick={() => {
            dispatch(authLogout());
            dispatch(userLogout());
          }}
        >
          logout
        </button>
      </div>*/}
    </main>
  );
};

/** Created by carlos on 08/01/2023 */
