import st from "./Section.module.css";
import { Log } from "../Log/Log";
import { Sign } from "../Sign/Sign";
import { useState } from "react";

export const Section = () => {
  const [appearance, setAppearance] = useState(false);
  const [close, setClose] = useState(true);

  function appear() {
    setAppearance(!appearance);
  }
  // function windowSign(){

  // }
  function disappear() {
    setClose(!close);
    setAppearance(!appearance)
  }
  return (
    <div className={st.section}>
      <div className={st.logIn}>
        <h1>Login</h1>
        <Log />
        <p>
          Don't have an account? <span onClick={appear}>Sign up</span>
        </p>
      </div>

      {appearance && (
        <div className={st.sign}>
          <button onClick={disappear} className={st.btn}>X</button>
          <Sign />
        </div>
      )}
    </div>
  );
};
