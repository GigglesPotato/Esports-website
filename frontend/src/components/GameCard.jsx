export default function GameCard({ game, onSelect }) {
    return (
        <div className="card" onClick={() => onSelect(game.id)}>
            {game.name}
        </div>
    );
}
