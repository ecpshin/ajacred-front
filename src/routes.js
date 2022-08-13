import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function MainRoutes() {
    return (
        <div className='container'>            <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='' element={<ProtectedRoutes redirectTo={<SignIn />} />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
        </div>
    );
}

function ProtectedRoutes({ redirectTo }) {
    const token = true;
    return (token) ? <Outlet /> : <Navigate to={redirectTo} />;
}