import './styles.css';
import { Link } from 'react-router-dom';

export default function SignIn() {

    return (
        <div className='container-signin'>
            <div className='panel-left bg-signin'></div>
            <div className='panel-right'>
                <form className="form_login" onSubmit={(e) => e.preventDefault()}>
                    <h1 className='panel_title'>LOGIN</h1>
                    <div className="input_group">
                        <input type='text' name='user_login' className="user_name" />
                    </div>
                    <div className="input_group">
                        <input type='password' name='user_senha' className="user_password" />
                    </div>
                    <button type='submit' className="btn btn_success">
                        Acessar
                    </button>
                    <span className='form_link'>Não tem cadastro? &nbsp;
                        <Link to='/signup'>Clique aqui.</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}