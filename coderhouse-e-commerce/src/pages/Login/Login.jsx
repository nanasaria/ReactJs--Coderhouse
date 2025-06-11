import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth/auth";
import loginPhoto from "../../assets/icon/logo.png";
import bgLogin from "../../assets/image/bg-login.jpg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login: " + error.message);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container login-register-page">
      <header>
        <img src={loginPhoto} alt="" />
      </header>

      <div className="form-login">
        <section className="section-left">
          <img src={bgLogin} alt="" />
        </section>

        <section className="section-right">
          <div className="box-input-login">
            <label className="label-login" htmlFor="email">
              E-mail
            </label>
            <input
              className="input-login"
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label-login" htmlFor="password">
              Senha
            </label>
            <input
              className="input-login"
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" onClick={handleLogin}>
              Entrar
            </button>

            <div className="register-login">
              <p>Não tem uma conta?</p>
              <button className="btn-register-login" onClick={goToRegister}>
                Registre-se
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
