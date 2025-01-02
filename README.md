# Storybook Shots Project

This project is a Storybook setup for developing and testing UI components in isolation. Storybook provides a convenient way to build, test, and showcase your components without having to run your entire application.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/namanrjpt/storybook-design-shots.git
    cd storybook-design-shots
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

To run Storybook and start developing your components, use the following command:

```bash
npm run storybook
```

This will start the Storybook server and open it in your default web browser. You can now view and interact with your components.  


To run Normally and start developing your components, use the following command:

```bash
npm run dev
```
This will start the react development server and you can navigate between the components by selecting it.

## Components

The components are located in the `src/Components` directory. Each component has its own folder containing the component file and its corresponding stories file.

Example:
```
src/
└── Components/
    └── Swap Animation/
        └── Transfer/
            ├── Transfer.jsx
            └── Transfer.stories.jsx
```

## Contributing

We welcome contributions to this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b master`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin master`
5. Submit a pull request.