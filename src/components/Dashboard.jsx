import { useState } from 'react';
import LanguageChart from './LanguageChart';

export default function Dashboard({ repos, events }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div className="stats-grid">
                <div className="card">
                    <h2>📊 Core Language Breakdown</h2>
                    <LanguageChart repos={repos} />
                </div>

                <div className="card">
                    <h2>⚠️ Recent Activity Timeline</h2>
                    <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
                        {events.length > 0 ? (
                            events.map((event) => (
                                <div key={event.id} className="repo-item">
                                    <strong>🎬 {event.type.replace('Event', '')}</strong> in{' '}
                                    <span style={{ color: 'var(--accent-color)' }}>{event.repo.name}</span>
                                    <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                        {new Date(event.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: 'var(--text-muted)' }}>No recent activity found.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h2 style={{ margin: 0 }}>📁 Public Repositories ({filteredRepos.length})</h2>
                    <input
                        type="text"
                        placeholder="Filter repositories by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '220px', padding: '8px 12px', fontSize: '0.9rem' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    {filteredRepos.map((repo) => (
                        <div key={repo.id} className="card" style={{ margin: 0, padding: '15px', background: '#1c2128' }}>
                            <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem' }}>
                                {repo.name}
                            </a>
                            <p style={{ margin: '8px 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                {repo.description || 'No description provided.'}
                            </p>
                            <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 🌐 {repo.language || 'Misc'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
