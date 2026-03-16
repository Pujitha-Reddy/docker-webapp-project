# Project 1 — Dockerized Web App Deployed to AWS EC2

## Overview
A simple Node.js web application containerized with Docker and deployed to a live AWS EC2 server. This is Project 1 of my Cloud DevOps Engineer learning journey.

## Live Demo
App was live at: http://18.118.45.195 (EC2 instance stopped to avoid charges)

## What I Built
- A Node.js + Express web application
- Dockerized the app using a custom Dockerfile
- Used Docker Compose for multi-container setup
- Pushed the image to Docker Hub
- Deployed it on a real AWS EC2 server

## Tech Stack
- **App:** Node.js + Express
- **Containerization:** Docker + Docker Compose
- **Registry:** Docker Hub
- **Cloud:** AWS EC2 (t3.micro, Amazon Linux 2023)

## Project Structure
```
docker-webapp-project/
├── app.js              # Node.js Express application
├── package.json        # Node dependencies
├── Dockerfile          # Docker image instructions
├── docker-compose.yml  # Multi-container setup
└── .dockerignore       # Files to exclude from image
```

## How to Run Locally

### Using Docker
```bash
# Clone the repo
git clone https://github.com/Pujitha-Reddy/docker-webapp-project.git
cd docker-webapp-project

# Build the image
docker build -t my-webapp:1.0 .

# Run the container
docker run -d -p 3000:3000 --name my-webapp my-webapp:1.0

# Open browser at http://localhost:3000
```

### Using Docker Compose
```bash
docker-compose up -d
# Open browser at http://localhost:3000
```

## How to Deploy to AWS EC2

### 1. Build for linux/amd64 and push to Docker Hub
```bash
docker buildx build --platform linux/amd64 -t yourusername/my-webapp:1.0 --push .
```

### 2. SSH into EC2
```bash
ssh -i ~/.ssh/my-ec2-key.pem ec2-user@YOUR-EC2-IP
```

### 3. Pull and run on EC2
```bash
docker run -d -p 80:3000 --name my-webapp --restart always yourusername/my-webapp:1.0
```

## Docker Hub
Image available at: https://hub.docker.com/r/pujitha2366/my-webapp

## What I Learned
- How to write a Dockerfile from scratch
- Docker image layers and build caching
- Difference between ARM and AMD64 architectures
- How to push/pull images from Docker Hub
- How to launch and configure an AWS EC2 instance
- How to SSH into a Linux server from Mac
- How to install and run Docker on a Linux server
- Deploying a containerized app to the cloud

## Next Project
**Project 2 — CI/CD Pipeline with GitHub Actions**
Automating the entire build → push → deploy process using GitHub Actions.

