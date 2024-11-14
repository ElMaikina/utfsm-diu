import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/signin.css';
import Logo from '../assets/logo.png';
import { UserContext } from '../contexts/UserContext';

function Signin() {
  const { setActiveUser } = useContext(UserContext); // Accede a setActiveUser del contexto
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Por favor, complete los datos antes de iniciar sesión.");
      return;
    }
    setActiveUser(username); // Establece el usuario activo
    navigate('/home'); // Redirige a /home
  };

  // Función para mostrar alerta de "Olvidaste tu contraseña?"
  const handleForgotPassword = () => {
    alert("Sitio en construcción");
  };

  return (
    <main className="signin">
      {/* Sección superior solo con el logo y fondo azul */}
      <div className="signin__header">
        <Link className="signin__logo" to="/">
          <img src={Logo} alt="Logo" className="signin__logo-image" />
        </Link>
      </div>

      {/* Sección inferior con fondo amarillo que contiene el título y el formulario */}
      <div className="signin__body">
        <h1 className="signin__title">Bienvenido a PAU ✨</h1>
        <form className="signin__form" onSubmit={handleLogin}>
          <div className="signin__form-group">
            <label className="signin__label" htmlFor="email">Nombre de usuario</label>
            <input
              id="email"
              className="signin__input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="signin__form-group">
            <label className="signin__label" htmlFor="password">Contraseña</label>
            <input
              id="password"
              className="signin__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
              required
            />
          </div>
          <div className="signin__form-group">
            <button
              type="button"
              className="signin__link"
              onClick={handleForgotPassword}
            >
              Olvidaste tu contraseña?
            </button>
          </div>
          <button
            type="submit"
            className="signin__button"
            disabled={!username || !password} // Desactiva el botón si los campos están vacíos
            onClick={() => {
              if (!username || !password) {
                alert("Por favor, complete los datos antes de iniciar sesión.");
              }
            }}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}

export default Signin;
