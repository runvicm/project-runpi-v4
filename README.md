# Project RunPi V4

*Currently in active development.*

The development scaffolding for RunPi V4, an upcoming full-stack rewrite of my current V3 production site.

> 🌍 **View the current live V3 site:** [https://projectrunpi.com](https://projectrunpi.com)

## 🚀 Tech Stack

*   **Backend**: Laravel (API) served via Nginx (single container setup)
*   **Frontend**: React, TypeScript, React Router v8, Vite
*   **Styling & UI**: Mantine
*   **Infrastructure**: Docker / Podman, Docker Compose, Devcontainers (Compatible with both Docker and Podman)
*   **Deployment & Environment**: Raspberry Pi 5, Cloudflare Workers & Pages, Cloudflare Tunnels, Self-hosted database (internal Docker network)


## 🏗️ Architecture Overview

This project uses a monorepo layout to manage multiple client-facing applications alongside a centralized API backend:

```text
/
├── .devcontainer/      # Standardized development container config
├── docker/             # Local Docker orchestration configurations
├── src/
│   ├── api/            # Laravel API Backend
│   ├── homepage/       # Homepage (React Router V8 & Mantine)
│   ├── devlog/         # Development Log (to ne decided)
│   ├── minecraft/      # Server Info (To be decided)
│   └── events/         # PH Anime, Cosplay and related events (To be Decided)
└── README.md
```

## 📍 Current Status & Roadmap

Currently migrating the frontend from the **[live V3 production site](https://projectrunpi.com)**.

*   [x] Set up initial monorepo scaffolding
*   [ ] **Home Page** (Migrating V3 to React Router v8) — *In Progress*

---
**Project RunPi V4** 
*Last updated: August 24, 2026*