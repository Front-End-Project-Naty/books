import logo from '../../imagens/logo.png';
import './style.css';

function Logo() {
    return (
        <div className='logo'>
          <img className='logo-img' src={logo} alt='logo' />
          <p>Os melhores livros em um só lugar</p>
        </div>
    );
}

export default Logo;