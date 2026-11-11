# QuickBid — Online Auction Platform

**QuickBid** is a collaborative academic **e-commerce web application focused on online auctions**, developed for *Laboratório de Bases de Dados e Aplicações Web (LBAW)* at the Faculty of Engineering, University of Porto (FEUP).

The project explores how buyers and sellers interact through listings and competitive bidding, with account management and administrative workflows.

## Project scope

The project's [OpenAPI specification](a7_openapi.yaml) describes endpoints for:

- **Accounts:** registration, sign-in and sign-out.
- **Auctions:** listing creation, viewing, editing and cancellation.
- **Bidding:** submitting bids and viewing an auction's bid history.
- **Search:** keyword and category filtering, price ranges and multiple search modes.
- **Profiles and administration:** user profiles, auction management and administrative account operations.

These are **documented API contracts**, not a claim that every endpoint is implemented in this GitHub snapshot.

## Technologies represented in this repository

- **Backend:** PHP, Laravel 10, Laravel Sanctum and Socialite
- **Database:** PostgreSQL
- **Frontend tooling:** Vite, Tailwind CSS and JavaScript
- **Infrastructure:** Docker / Docker Compose
- **Additional dependencies:** Pusher for real-time messaging infrastructure

The stack is based on the checked-in `composer.json`, `package.json` and Docker configuration.

## Where is the application source?

This GitHub repository is a **partial public snapshot** containing project documentation, configuration, an OpenAPI specification and Laravel tooling. It does **not** contain the full application source directories (such as `app/`, `routes/`, `resources/`).

The final project repository was maintained on FEUP's institutional GitLab:

**[QuickBid — original FEUP GitLab repository](https://gitlab.up.pt/lbaw/lbaw2425/lbaw2466)**

Access may depend on FEUP GitLab permissions. The historical deployment URL was `http://lbaw2466.lbaw.fe.up.pt`; its current availability has not been verified.

## Existing project documentation

- [OpenAPI specification](a7_openapi.yaml) — documented HTTP interface.
- [LBAW development environment guide](README_lbaw.md) — course setup instructions for PHP/Laravel, PostgreSQL and Docker.
- [Docker Compose configuration](docker-compose.yaml) — local PostgreSQL and pgAdmin services.

To start the local **database services** from this snapshot:

```bash
docker compose up -d
```

This does not start the complete QuickBid application because the application source is not part of this mirror.

The original course delivery also referenced a Docker image hosted in FEUP's GitLab Container Registry:

```bash
docker run -p 80:80 -t git.fe.up.pt:5050/lbaw/lbaw2425/lbaw2466
```

The image may require institutional access and has not been tested here. The repository's historical demo accounts and environment configuration are retained as supplied for the academic project; they are not credentials for a live production service.

## Project context

Collaborative university software engineering project in web application and database development, with an auction-based e-commerce use case.
