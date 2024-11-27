import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleToggleClick = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/login/', {
        usuario: user,
        password,
      });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('usuario', user);
      localStorage.setItem('user_id', response.data.user_id);
      setSuccess('Login successful');
      setError('');
    onLoginSuccess(user);
      navigate('/');
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
      setSuccess('');
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/register/', {
        usuario: user,
        email,
        nombre: username,
        apellido: lastName,
        password,
      });
      setSuccess('Usuario registrado con éxito');
      setError('');
    } catch (error) {
      setError('Error al registrar el usuario');
      setSuccess('');
    }
  };

  return (
    <section id="login" className={`login-mode ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleLoginSubmit} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <h4 className="sub-title style1" style={{fontSize: '22px'}}>Vuelatex</h4>
              </div>

              <div className="heading">
                <h2>Bienvenido</h2>
                <h6>¿Aún no está registrado? </h6>
                <a className="toggle" onClick={handleToggleClick} style={{cursor: 'pointer', fontSize: '14px'}}>
                  Registrarse
                </a>

                {error && <p className="danger">{error}</p>}
                {success && <p className="success">{success}</p>}
              </div>
              
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Usuario"
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                  />
                </div>

                <input type="submit" value="Iniciar sesión" className="sign-btn" />
              </div>
            </form>

            <form onSubmit={handleRegisterSubmit} autoComplete="off" className="sign-up-form">
              <div className="logo">
                <h4>Vualatex</h4>
              </div>

              <div className="heading">
                <h2>Empezar</h2>
                <h6>¿Ya tienes una cuenta? </h6>
                <a className="toggle" onClick={handleToggleClick} style={{fontSize: '14px'}}>
                  Iniciar sesión
                </a>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Usuario"
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nombre"
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Apellido"
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                  />
                </div>

                <input type="submit" value="Registrarse" className="sign-btn" />

                <p className="text">
                  Al registrarme, acepto los
                  <a href="#"> Términos de servicios</a> y la
                  <a href="#"> Política de Privacidad</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;