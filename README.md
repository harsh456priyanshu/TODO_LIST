# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# React Todo List Application

This is a simple Todo List application built using **React**, **Vite**, **Tailwind CSS**, and **nanoid**. It allows users to create, view, and delete tasks efficiently.

## Features
- Add new tasks with a title.
- View a list of pending tasks.
- Delete tasks from the list.
- Responsive and visually appealing UI using Tailwind CSS.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development and build tool for modern web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **nanoid**: A library for generating unique IDs for todo items.

## Folder Structure
```
TODO_LIST
├── src
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for the React app
│   ├── index.css        # Tailwind CSS styles
│   └── Components
│       ├── Create.jsx   # Component for adding new todos
│       └── Read.jsx     # Component for displaying and deleting todos
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd TODO_LIST
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:5173`.

## Future Improvements
- Add task completion functionality.
- Implement local storage to persist tasks.
- Enhance UI with animations and additional styling.

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
