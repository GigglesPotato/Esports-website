import { useEffect, useState } from 'react';
import { fetchColleges } from '../api/colleges';
import CollegeCard from '../components/CollegeCard';
import { useSearchParams } from 'react-router-dom';

export default function CollegesPage() {
    const [colleges, setColleges] = useState([]);
    const [params] = useSearchParams();
    const gameFilter = params.get('game');

    useEffect(() => {
        fetchColleges().then(data => {
            setColleges(
                gameFilter
                    ? data.filter(c => c.games.includes(Number(gameFilter)))
                    : data
            );
        });
    }, [gameFilter]);

    return (
        <div>
            <h2>Colleges</h2>
            <div className="grid">
                {colleges.map(c => <CollegeCard key={c.id} college={c} />)}
            </div>
        </div>
    );
}
