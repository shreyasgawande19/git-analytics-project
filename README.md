# 📊 GitPulse // Advanced Developer Analytics Dashboard

GitPulse is a modern, metrics-driven React application engineered specifically for the **Elite Coders Summer of Code (ECSoC)**. The platform aggregates public GitHub REST API streams, transforming raw data into highly visual, gamified developer velocity portfolios.

## 🚀 Live Demo
Explore the production deployment link here:  
👉 **[Live Vercel Deployment Link](http://git-analytics-project.vercel.app)**

---

## 🔥 Core Features

* **⚡ Real-Time Profile Aggregation:** Leverages parallel asynchronous fetch queries to extract profile details, code repositories, and event timelines instantly.
* **🏆 Gamified Dev Score & Ranks:** Applies an impact-tracking algorithm `(Public Repos × 10) + (Followers × 5) + (Repository Stars × 15)` to dynamically calculate a user's open-source rank (e.g., *Open Source Legend*, *Rising Contributor*).
* **📊 Visual Language Breakdown:** Utilizes `Chart.js` to render interactive doughnut charts displaying accurate programming language percentage (%) distributions.
* **🔍 Client-Side Repository Filter:** Implements an instant, state-driven search bar allowing users to filter massive repository lists dynamically without re-triggering API limits.
* **🛡️ Smart API Fallback Protocol:** If GitHub's public API rate limits are exceeded, a graceful structural fallback interceptor triggers a responsive demo profile layout so presentation pipelines never crash.

---

## 🛠️ Tech Stack Utilized

* **Frontend Architecture:** React.js, Vite
* **Data Visualization Engine:** Chart.js, React-Chartjs-2
* **Styling Palette:** Custom Dark Theme CSS (GitHub-inspired responsive UI layout)
* **Environment Security:** Dotenv (`.env`) abstraction layers guarding pipeline execution scopes.

---

## 💻 Local Installation & Setup

Follow these structured steps to set up and execute the project locally on your machine:

1. Clone the public repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the targeted source directory:
   ```bash
   cd Git-Analytics-Project
   ```
3. Install the required compilation dependencies:
   ```bash
   npm install
   ```
4. Initiate the local development server pipeline:
   ```bash
   npm run dev
   ```

---

## 🔮 Scalability Roadmap for ECSoC Contributors (45-Day Scope)

GitPulse was intentionally constructed with a highly modular, component-driven structural layout, ensuring external community members can seamlessly contribute during the summer program:

1. **GitHub OAuth Core Integration:** Enable users to securely log in via GitHub to pull and calculate private repository commit velocities safely.
2. **AI-Powered Contributor Matching:** Establish a lightweight LLM microservice layer that analyzes a developer's visual language chart and matches them automatically with open `good first issue` repository tags across GitHub.
3. **Resume Compiler Engine:** Build a single-click compiler function allowing developers to export their visual dashboard directly into a professional, formatted open-source PDF resume.
