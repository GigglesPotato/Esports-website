import { Link } from 'react-router-dom';

export default function RecruiterCard({ recruiter }) {
    return (
        <div className="card">
            <h4>{recruiter.user.username}</h4>
            <p>{recruiter.college.name}</p>
            <Link to={`/message/${recruiter.user.id}`}>Message</Link>
        </div>
    );
}
