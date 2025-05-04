import { Link } from 'react-router-dom';

export default function CollegeCard({ college }) {
    return (
        <div className="card">
            <h3>{college.name}</h3>
            <p>{college.location}</p>
            <Link to={`/colleges/${college.id}`}>View Details</Link>
        </div>
    );
}
