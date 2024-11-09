
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import styles from './login.module.css';

function LoginPage() {
  return (
    
    <div className={styles["login-container"]}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  ); 
}

export default LoginPage;