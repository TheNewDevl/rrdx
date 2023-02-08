# Redux - Argent B

Monorepo containing the front-end and back-end for the Argent B application.

Repo structure:

- `apps/` - contains the front-end and back-end applications
- `packages/` - contains ui, types and functions packages

## Getting Started

### Prerequisites

- Backend Server : To run the server, please follow the instructions in the [server README](apps/server/README.md). For
  exemple
  you will need a MongoDB database running in your computer and also run a db-populate script to populate de database.
- Client is a React application, so you will need to have Node.js installed in your computer. You can download it
  [here](https://nodejs.org/en/).

### Instructions

1. Clone the repo onto your computer
2. Open a terminal window in the root of the cloned project
3. Run the following commands:

```bash
# Install dependencies for all packages and apps
npm install
```

For convenience, I created a command to run all servers at the same time. So if you have a MongoDB database running and
already populated with the db-populate script given in the server package, you can simply run the following command in
the root directory:

```bash
# Run backend server, client server and ui storybook server
npm run dev
```

Otherwise, you can run each server separately:

```bash
# Move to the server directory, start local dev server and populate database
cd apps/server
npm run dev:server
npm run populate-db

# Move to the client directory ans start local dev client server
cd apps/client
npm run dev

# Move to the ui directory and start local storybook server
cd packages/ui
npm run dev
```

Your frontend client server should now be running at http://127.0.0.1:5173/

## API Documentation

If backend server is running, my suggest for the transactions API documentation is available
here : http://localhost:3001/api-docs/transactions
