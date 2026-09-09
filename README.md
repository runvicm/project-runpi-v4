# Project RunPi V4

*Currently in active development.*

The development scaffolding for RunPi V4,
a full-stack rewrite of the Project RunPi production site.

The homepage rewrite is complete, remaining routes are in progress.

> 🌍 **View the live site:** [https://projectrunpi.com](https://projectrunpi.com)

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
│   ├── devlog/         # Development Log (to be decided)
│   ├── minecraft/      # Server Info (To be decided)
│   └── events/         # PH Anime, Cosplay and related events (To be Decided)
└── README.md
```

## 📍 Current Status & Roadmap

Currently migrating the remaining frontend routes to V4, building on the **[live site](https://projectrunpi.com)**.

*   [x] Set up initial monorepo scaffolding
*   [x] **Home Page** - *Deployed*
*   [ ] **Development** - *In progress - refining UX/UI*

---
**Project RunPi V4** 
*Last updated: September 9, 2026*# Project RunPi V4

*Currently in active development.*

The development scaffolding for RunPi V4,
a full-stack rewrite of the RunPi production site.

The homepage rewrite is complete, remaining routes are in progress.

> 🌍 **View the live site:** [https://projectrunpi.com](https://projectrunpi.com)

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
│   ├── devlog/         # Development Log (to be decided)
│   ├── minecraft/      # Server Info (To be decided)
│   └── events/         # PH Anime, Cosplay and related events (To be Decided)
└── README.md
```

## 📍 Current Status & Roadmap

Currently migrating the remaining frontend routes to V4, building on the **[live site](https://projectrunpi.com)**.

*   [x] Set up initial monorepo scaffolding
*   [x] **Home Page** - *Deployed*
*   [ ] **Development** - *In progress - refining UX/UI*

---
**Project RunPi V4** 
*Last updated: September 9, 2026*