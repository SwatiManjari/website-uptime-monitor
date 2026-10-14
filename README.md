# Website Uptime Monitor

A simple website uptime monitoring application built with Node.js, Express, HTML, CSS, and JavaScript. It checks website availability and displays HTTP status codes and response times.

## Features

- Check website availability.
- Display HTTP status codes.
- Measure response time.
- Configure the application port using environment variables.
- Run the application using Docker.
- Manage containers using Docker Compose.
- Publish and pull Docker images using Docker Hub.

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- Docker
- Docker Compose
- Docker Hub

## Project Structure

```text
website-uptime-monitor/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── compose.yaml
├── .dockerignore
├── .gitignore
└── README.md
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/SwatiManjari/website-uptime-monitor.git
```

Navigate to the project directory:

```bash
cd website-uptime-monitor
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
node server.js
```

Open the application at:

http://localhost:3000

## Run with Docker

Build the Docker image:

```bash
docker build -t website-uptime-monitor:v1 .
```

Run the container:

```bash
docker run -d --name uptime-monitor -p 3000:3000 website-uptime-monitor:v1
```

Open http://localhost:3000 in your browser.

## Run with Docker Compose

Build the image and start the application:

```bash
docker compose up -d --build
```

Check running services:

```bash
docker compose ps
```

View application logs:

```bash
docker compose logs
```

Stop and remove the Compose-managed containers and network:

```bash
docker compose down
```

## Environment Variables

The application uses the `PORT` environment variable to configure its listening port. The default port is `3000`.

Example:

```bash
docker run -d --name uptime-custom-port -e PORT=4000 -p 4000:4000 website-uptime-monitor:v1
```

The application will listen on port `4000` inside the container.

## Docker Hub

The Docker image is published on Docker Hub.

**Image:** `smpanda30/website-uptime-monitor:v1`

Pull the image:

```bash
docker pull smpanda30/website-uptime-monitor:v1
```

Run the published image:

```bash
docker run -d --name uptime-hub-test -p 4000:3000 smpanda30/website-uptime-monitor:v1
```

Open http://localhost:4000 in your browser.

## Learning Objectives

This project was used to practise Docker fundamentals, including:

- Dockerfiles and image building
- Container lifecycle management
- Port mapping
- Environment variables
- Volumes and bind mounts
- Docker networking
- Docker Compose
- Docker Hub image publishing and pulling

## License

This project is intended for learning and educational purposes.