/**
 * MessageForm.jsx
 * Description: Component for composing and sending a message to a coach.
 * Written by: Noah Leeper
 * Created on: 05/01/2025
 * Last Updated on: 05/04/2025
 */
import { useState } from 'react';
import { sendMessage } from '../api/messages';

export default function MessageForm({ sender, recipient }) {
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await sendMessage(sender, recipient, body);
            setStatus('Message sent!');
            setBody('');
        } catch (err) {
            console.error(err);
            setStatus('Failed to send message');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder="Write your message…"
            />
            <button type="submit">Send</button>
            {status && <p>{status}</p>}
        </form>
    );
}
