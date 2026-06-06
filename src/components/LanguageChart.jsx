import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LanguageChart({ repos }) {
    const languageCounts = {};
    let totalValidRepos = 0;

    repos.forEach(repo => {
        if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            totalValidRepos++;
        }
    });

    const labels = Object.keys(languageCounts);
    // Counts ko automatic percentages (%) mein badalna
    const percentages = Object.values(languageCounts).map(count =>
        ((count / totalValidRepos) * 100).toFixed(1)
    );

    if (labels.length === 0) {
        return <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No language data found.</p>;
    }

    const data = {
        labels: labels.map((label, idx) => `${label} (${percentages[idx]}%)`),
        datasets: [
            {
                data: Object.values(languageCounts),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
                borderWidth: 1,
                borderColor: '#30363d',
            },
        ],
    };

    const options = {
        plugins: {
            legend: { position: 'right', labels: { color: '#c9d1d9' } },
            tooltip: {
                callbacks: {
                    label: (context) => ` Repos: ${context.raw} (${percentages[context.dataIndex]}%)`
                }
            }
        },
        maintainAspectRatio: false
    };

    return (
        <div style={{ height: '220px', position: 'relative', margin: '10px 0' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}
