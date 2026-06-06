import React from 'react';

export default function ProfileCard({ user, repos }) {
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const devScore = (user.public_repos * 10) + (user.followers * 5) + (totalStars * 15);

    const getRank = (score) => {
        if (score > 500) return '🏆 Open Source Legend';
        if (score > 200) return '🚀 Elite Maintainer';
        if (score > 50) return '🌱 Rising Contributor';
        return '⚡ Code Enthusiast';
    };

    return (
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src={user.avatar_url} className="avatar" alt={user.name} />
                <div>
                    <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
                    <p style={{ color: 'var(--text-muted)', margin: '5px 0' }}>@{user.login}</p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>{user.bio || 'No bio provided.'}</p>
                </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 5px 0', color: 'var(--accent-color)' }}>{getRank(devScore)}</h3>
                <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>{devScore} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>pts</span></p>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Based on repos, followers, and repo stars
                </p>
            </div>
        </div>
    );
}
