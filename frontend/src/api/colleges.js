export async function fetchColleges() {
    const res = await fetch('/api/colleges/');
    if (!res.ok) throw new Error('Failed to fetch colleges');
    return res.json();
}
