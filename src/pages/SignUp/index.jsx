import './styles.css';
import { Link } from 'react-router-dom';

export default function SignUp() {

    return (
        <div className="container_signup">
            <form className='form_signup box_shadow' onSubmit={(e) => e.preventDefault()}>
                <h1 className="panel_title">SignUp</h1>
                <div className='input_group'>
                    <input type='text' name="user_nome" placeholder="Nome" />
                </div>
                <div className='input_group'>
                    <input type='email' name='user_email' placeholder='E-mail' />
                </div>
                <div className='input_group'>
                    <input type='password' name='user_senha' placeholder='Senha' />
                </div>
                <div className='input_group'>
                    <input type='password' name='confirma_senha' placeholder='Confirme a senha' />
                </div>
                <div className='button_group'>
                    <button className='btn btn_success'>Salvar</button>
                    <button className='btn btn_cancel'>Cancelar</button>
                </div>
                <span className='form_link'>Já tem cadastro.&nbsp; <Link to='/signin'>Clique aqui.</Link></span>
                <input type='hidden' name='user_nivel' value={'ROLE_USER'} />
            </form>
        </div>
    )
}