import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get("incidents").then(response => {
      setIncidents(response.data);
      setTotal(response.headers["x-total-count"]);
    });
  }, []);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />

        <Link className="button" to="/logon">
          Preciso de voluntário
        </Link>
      </header>
      <h1>{total} Oportunidades de Voluntariado Cadastradas</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CAUSA:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <p className="">Seja o sorriso para alguém!</p>
            <p className="">Seja o voluntário desta causa.</p>

            <strong className="">Entre em contato:</strong>

            <button className="button-contact">Whatsapp</button>
            <button className="button-contact">Email</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
