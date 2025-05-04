
export async function sendMessage(sender, recipient, body) {
    const res = await fetch('/api/messages/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender, recipient, body }),
    });

    if (!res.ok) {
        throw new Error('Failed to send message');
    }

    return res.json();
}