/**
 * teams.js
 * Description: API helper to fetch all team records from the backend.
 * Written by: Noah Leeper
 * Created on: 05/01/2025
 * Last Updated on: 05/04/2025
 */
export async function fetchTeams() {
    const res = await fetch('/api/teams/');
    if (!res.ok) throw new Error('Failed to fetch teams');
    return res.json();
}