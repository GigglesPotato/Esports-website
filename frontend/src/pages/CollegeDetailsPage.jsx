/**
 * CollegeDetailsPage.jsx
 * Description: Page component showing details for a single college
 * Written by: Noah Leeper
 * Created on: 05/01/2025
 * Last Updated on: 05/04/2025
 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchColleges } from '../api/colleges';
import { fetchRecruiters } from '../api/recruiters';
import { fetchTeams } from '../api/teams';

import RecruiterCard from '../components/RecruiterCard';

export default function CollegeDetailsPage() {
    const { id } = useParams();
    const [college, setCollege] = useState(null);
    const [recruiters, setRecruiters] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchColleges().then(list => {
            setCollege(list.find(c => c.id === Number(id)));
        });

        fetchRecruiters().then(list => {
            setRecruiters(list.filter(r => r.college === Number(id)));
        });

        fetchTeams().then(list => {
            setTeams(list.filter(t => t.college === Number(id)));
        });
    }, [id]);

    if (!college) return <p>Loading…</p>;

    return (
        <div className="container">
            <h2>{college.name}</h2>
            <p><strong>Location:</strong> {college.location}</p>
            <p><strong>Programs:</strong> {college.programs || 'N/A'}</p>

            {/* TEAMS SECTION */}
            <section>
                <h3>Teams</h3>
                {teams.length === 0
                    ? <p>No teams listed for this college.</p>
                    : (
                        <ul>
                            {teams.map(team => (
                                <li key={team.id}>
                                    <strong>{team.team_name || 'Team'}</strong> — {team.game.name || team.game} <br />
                                    Rank: {team.rank}<br />
                                    Coach: {team.coach_name} (<a href={`mailto:${team.coach_email}`}>{team.coach_email}</a>)<br />
                                    {team.coach_phone && <>Phone: {team.coach_phone}</>}
                                </li>
                            ))}
                        </ul>
                    )
                }
            </section>

            {/* RECRUITERS SECTION */}
            <section>
                <h3>Coaches / Recruiters</h3>
                {recruiters.length === 0
                    ? <p>No coaches found.</p>
                    : recruiters.map(r => (
                        <RecruiterCard key={r.id} recruiter={r} />
                    ))
                }
            </section>
        </div>
    );
}