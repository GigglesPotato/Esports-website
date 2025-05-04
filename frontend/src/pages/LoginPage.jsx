import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginOrCreate } from '../api/users';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const nav = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        try {
            const user = await loginOrCreate(username);
            localStorage.setItem('user', JSON.stringify(user));
            nav('/colleges');
        } catch {
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
            />
            <button type="submit">Log in / Sign up</button>
        </form>
    );
}
