import { Link } from 'react-router-dom';

export default function Navbar() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/colleges">Colleges</Link>
            <Link to="/recruiters">Recruiters</Link>
            {user
                ? <span>Hi, {user.username}</span>
                : <Link to="/login">Login</Link>}
        </nav>
    );
}
