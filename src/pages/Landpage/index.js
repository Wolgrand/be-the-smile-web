import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img className="image-logo" src={logoImg} alt="Be The Hero" />
        <h1>Bem vindo,</h1>
        <p>
          Somos uma plataforma que conecta organizações necessitadas e pessoas
          com o coração aberto para ser um sorriso para estas.
        </p>

        <div className="user">
          <Link to="/logon">
            <button className="button-user">Preciso de voluntário</button>
          </Link>
          <Link to="/allincidents">
            <button className="button-user" type="submit">
              Sou voluntário
            </button>
          </Link>
        </div>
      </section>

      <img className="image-heroes" src={heroesImg} alt="Heroes" />
    </div>
  );
}
