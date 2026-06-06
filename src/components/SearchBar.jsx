import { useState } from 'react';
export default function SearchBar({ onSearch }) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-box">
            <input
                type="text"
                placeholder="Type a GitHub username (e.g., torvalds)..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Analyze Profile</button>
        </form>
    );
}
