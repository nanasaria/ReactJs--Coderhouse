import { useState } from "react";
import { register } from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";
import loginPhoto from "../../assets/icon/logo.png";
import bgRegister from "../../assets/image/bg-register.jpg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao cadastrar: " + error.message);
    }
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="container login-register-page">
      <header>
        <img src={loginPhoto} alt="" />
      </header>

      <div className="form-login">
        <section className="section-left">
          <img src={bgRegister} alt="" />
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
            <button className="btn-login" onClick={handleRegister}>
              Registrar
            </button>

            <div className="register-login">
              <p>Já possui uma conta?</p>
              <button className="btn-register-login" onClick={goToLogin}>
                Entre na conta
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
