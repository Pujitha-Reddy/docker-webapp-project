# Project — CI/CD Pipeline with GitHub Actions

## Overview
Automated the entire build and deploy process from Project (Dockerized Web App Deployed to AWS EC2) using 
GitHub Actions. Every push to main branch automatically builds, pushes, 
and deploys the app to AWS EC2 — no manual steps needed.

## Live Demo
App was live at: http://18.222.240.43 (EC2 stopped to save credits)

## How the Pipeline Works
Every time you push code to GitHub:
```
git push
    ↓
GitHub Actions automatically:
  1. Builds new Docker image
  2. Pushes it to Docker Hub
  3. SSHes into EC2 server
  4. Pulls the new image
  5. Restarts the container
    ↓
Live app updated in ~35 seconds!
```

## Tech Stack
- **CI/CD:** GitHub Actions
- **Registry:** Docker Hub
- **Cloud:** AWS EC2
- **Containerization:** Docker

## Pipeline File
Located at: `.github/workflows/deploy.yml`

## GitHub Secrets Used
| Secret | Purpose |
|--------|---------|
| DOCKER_USERNAME | Docker Hub login |
| DOCKER_PASSWORD | Docker Hub password |
| EC2_HOST | EC2 public IP address |
| EC2_SSH_KEY | EC2 private key for SSH |

## Pipeline History
4 successful deployments!

## What I Learned
- How to write GitHub Actions workflow YAML files
- How to store credentials securely using GitHub Secrets
- How CI/CD pipelines work end to end
- Automatic Docker build and push on every commit
- Zero-downtime container replacement on EC2
- How to debug failed pipeline runs in Actions tab
- Difference between ARM and AMD64 Docker images

