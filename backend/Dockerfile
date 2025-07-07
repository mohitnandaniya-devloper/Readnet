FROM python:3.11-slim-bookworm

ENV PATH="/root/.local/bin:$PATH"

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl build-essential && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir pipx && pipx install uv

WORKDIR /backend

COPY pyproject.toml .
COPY uv.lock .

RUN uv sync --locked

COPY . .

HEALTHCHECK CMD curl --fail http://localhost:8000/health || exit 1

EXPOSE 8000

CMD ["uv", "run", "uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
