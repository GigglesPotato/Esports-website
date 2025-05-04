export async function fetchGames() {
    const res = await fetch('/api/games/');
    if (!res.ok) throw new Error('Failed to fetch games');
    return res.json();
}
