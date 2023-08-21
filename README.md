# Pintu Technical Assesment

### Tech Stack
- Next JS 13 with App Directory
I use the latest Next JS (version 13.*.*) to support App Directory & Better caching strategy4

- Zustand as State Management
I choose this library because Zustand is the lighter state management library on the market

- Tailwind CSS for styling
I Choose Tailwind for rapid styling with css

### How to use this project

Access the web at: https://crypto-exchange-dashboard.vercel.app/

If you want to run this project locally:
- Clone this Frontend project
- Install the package with `npm install`, `yarn install` or `pnpm install`
- Run the Project with command `npm run dev`, `yarn dev` or `pnpm run dev` depends on your package manager
- Open file `.env` and change `NEXT_PUBLIC_WS_URL` to `ws:\\localhost:3001`
- You need also to run the webserver project silmutaneously with this frontend project

Since you want to run this project locally, you also need to clone the `websocket server`. You can find the project within (this link)[https://github.com/andreepratama27/crypto-websocket-api] and run locally. You can follow this to setup the project:

- Clone the Webserver project (with link above)
- Install the package with `npm install`, `yarn install` or `pnpm install`
- Run the Project with command `npm run dev`, `yarn dev` or `pnpm run dev` depends on your package manager
- The websocket can be accessed on ws:\\localhost:3001