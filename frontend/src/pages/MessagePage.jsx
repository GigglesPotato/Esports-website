import { useParams, useNavigate } from 'react-router-dom';
import MessageForm from '../components/MessageForm';

export default function MessagePage() {
    const { recipientId } = useParams();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const nav = useNavigate();

    const handleSent = () => nav('/colleges');

    return (
        <div>
            <h2>Message Coach #{recipientId}</h2>
            <MessageForm
                senderId={user.id}
                recipientId={Number(recipientId)}
                onSent={handleSent}
            />
        </div>
    );
}
