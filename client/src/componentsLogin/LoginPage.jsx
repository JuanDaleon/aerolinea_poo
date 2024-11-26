import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";
import images from '../images/images';
import axios from 'axios';

const LoginForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value !== "") return;
        inp.classList.remove("active");
      });
    });

    function moveSlider() {
      let index = this.dataset.value;

      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove("show"));
      currentImage.classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      this.classList.add("active");
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(".image");
    const texts = document.querySelectorAll(".text-group h2");

    images.forEach((img, index) => {
      img.classList.toggle("show", index === currentImageIndex);
    });

    texts.forEach((text, index) => {
      text.classList.toggle("show", index === currentImageIndex);
    });
  }, [currentImageIndex]);

  const handleToggleClick = (event) => {
    const id_login = document.getElementById("login");
    id_login.classList.toggle("sign-up-mode");
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.221:8000/autenticacion/api/token/', {
        username,
        password,
      });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('username', username);
      localStorage.setItem('lastName', lastName);
      setSuccess('Login successful');
      setError('');
      navigate('/dashboard');
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
      setSuccess('');
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.221:8000/autenticacion/api/users/', {
        username,
        last_name: lastName,
        password,
        email,
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
                <h4>Vualatex</h4>
              </div>

              <div className="heading">
                <h2>Bienvenido</h2>
                <h6>¿Aún no está registrado? </h6>
                <a className="toggle" onClick={handleToggleClick} style={{cursor: 'pointer'}}>
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label>Nombre</label>
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
                  />
                  <label>Contraseña</label>
                </div>

                <input type="submit" value="Iniciar sesión" className="sign-btn" />

                <p className="text">
                  ¿Olvidó su contraseña o sus datos de inicio de sesión?
                  <a href="#"> Obtener ayuda</a> Iniciar sesión
                </p>
              </div>
            </form>

            <form onSubmit={handleRegisterSubmit} autoComplete="off" className="sign-up-form">
              <div className="logo">
                <h4>Indelpa S.A.S</h4>
              </div>

              <div className="heading">
                <h2>Empezar</h2>
                <h6>¿Ya tienes una cuenta? </h6>
                <a className="toggle" onClick={handleToggleClick}>
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label>Nombre</label>
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
                  />
                  <label>Apellido</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
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
                  />
                  <label>Contraseña</label>
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