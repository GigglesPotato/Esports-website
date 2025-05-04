const BASE = '/api/users';

export async function loginOrCreate(username) {
    const res = await fetch(`${BASE}/login_or_create/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
}
