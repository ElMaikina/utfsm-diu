import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Transition from '../utils/Transition';
import '../stylesheets/user.css';
import { UserContext } from '../contexts/UserContext'; // Importa el contexto

const User = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { activeUser, setActiveUser } = useContext(UserContext); // Accede al usuario y la función de actualización
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const navigate = useNavigate();

  // Manejo de clic fuera del menú desplegable
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownOpen]);

  // Manejo de cierre con tecla Escape
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  // Función para manejar el cierre de sesión
  const handleSignOut = () => {
    setActiveUser(""); // Limpia el usuario activo
    setDropdownOpen(false); // Cierra el menú desplegable
    navigate('/'); // Redirige a la página de inicio de sesión
  };

  return (
    <div className="user">
      <button
        ref={trigger}
        className="user__button"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="user__name">{activeUser || "Usuario"}</span>
        <svg className="user__icon" viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </button>

      <Transition
        className="user__dropdown"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="user__dropdown-header">
            <div className="user__dropdown-name">{activeUser || "Usuario"}</div>
            <div className="user__dropdown-role">Docente</div>
          </div>
          <ul>
            <li>
              <button
                className="user__dropdown-item"
                onClick={handleSignOut} // Llama a handleSignOut para cerrar sesión
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default User;
