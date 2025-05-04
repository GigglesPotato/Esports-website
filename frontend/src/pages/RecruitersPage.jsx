import { useEffect, useState } from 'react';
import { fetchRecruiters } from '../api/recruiters';
import RecruiterCard from '../components/RecruiterCard';

export default function RecruitersPage() {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        fetchRecruiters().then(setRecruiters);
    }, []);

    return (
        <div>
            <h2>All Coaches</h2>
            <div className="grid">
                {recruiters.map(r => <RecruiterCard key={r.id} recruiter={r} />)}
            </div>
        </div>
    );
}
