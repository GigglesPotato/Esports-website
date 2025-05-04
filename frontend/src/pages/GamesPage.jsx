import { useEffect, useState } from 'react';
import { fetchGames } from '../api/games';
import GameCard from '../components/GameCard';
import { useNavigate } from 'react-router-dom';

export default function GamesPage() {
    const [games, setGames] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        fetchGames().then(setGames);
    }, []);

    const selectGame = id => {
        nav(`/colleges?game=${id}`);
    };

    return (
        <div>
            <h2>All Games</h2>
            <div className="grid">
                {games.map(g => (
                    <GameCard key={g.id} game={g} onSelect={selectGame} />
                ))}
            </div>
        </div>
    );
}
