export async function fetchRecruiters() {
    const res = await fetch('/api/recruiters/');
    if (!res.ok) throw new Error('Failed to fetch recruiters');
    return res.json();
}