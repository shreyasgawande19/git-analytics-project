import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import Dashboard from './components/Dashboard';
import './App.css';

export default function App() {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGitHubData = async (username) => {
    setLoading(true);
    setUserData(null);

    try {
      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch(`https://github.com{username}`),
        fetch(`https://github.com{username}/repos?sort=updated&per_page=30`),
        fetch(`https://github.com{username}/events/public?per_page=10`)
      ]);

      if (!userRes.ok) throw new Error('GitHub user profile not found.');

      const user = await userRes.json();
      const repos = await reposRes.json();
      const events = await eventsRes.json();

      setUserData(user);
      setReposData(repos);
      setEventsData(events);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>📊 GitPulse</h1>
        <p>Advanced developer metrics & impact tracker for open-source contributors.</p>
        <SearchBar onSearch={fetchGitHubData} />
      </header>

      <main>
        {loading && <div className="loading">Processing repository graph matrices...</div>}

        {userData && (
          <>
            <ProfileCard user={userData} repos={reposData} />
            <Dashboard repos={reposData} events={eventsData} />
          </>
        )}
      </main>
    </div>
  );
}
