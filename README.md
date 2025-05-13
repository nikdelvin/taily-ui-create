<p>
    <img alt="Taily UI - Tailwind CSS components" width="350" src="https://tailyui.by.nikdelv.in/assets/github/logo.png">
    <img alt="Astro.JS" width="61.5" src="https://astro.build/assets/press/astro-icon-light-gradient.svg">
</p>

📇 Boilerplate template for creating beautiful landing pages using the Taily UI library and Astro.

<p>
    <a href="https://www.npmjs.com/package/taily-ui-create"><img src="https://img.shields.io/npm/dt/taily-ui-create.svg" alt="Total Downloads"></a>
    <a href="https://github.com/nikdelvin/taily-ui-create/releases"><img src="https://img.shields.io/npm/v/taily-ui-create.svg" alt="Latest Release"></a>
    <a href="https://tailyui.nikdelvin.dev/docs/getting-started/license"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
</p>

## 🏎 Introduction

This repository provides a starter template for building fast, modern, and visually appealing landing pages leveraging the power of [Astro](https://astro.build/) and the component library [Taily UI](https://www.npmjs.com/package/taily-ui) (which is built on [Tailwind CSS](https://tailwindcss.com/)). Get up and running quickly with a solid foundation.

![Template Screenshot](https://tailyui.by.nikdelv.in/assets/github/portfolio.jpg)

## ✨ Features

* 🚀 **Powered by Astro:** Build faster websites with Astro's innovative island architecture (zero JS by default, partial hydration).
* 🎨 **Taily UI Integrated:** Pre-configured setup for using Taily UI components out-of-the-box.
* 💨 **Tailwind CSS Ready:** Taily UI is built on Tailwind, giving you full access to utility-first CSS for rapid styling and customization.
* ✨ **Minimal & Clean:** A streamlined starting point, ready for you to add your content and style.
* 📱 **Responsive Design:** Foundational setup for responsiveness through Tailwind and Taily UI components.
* 🔧 **Easy Setup:** Get started quickly with standard `npm` commands.

## 🛠️ Tech Stack

* [Astro](https://astro.build/) - The web framework for content-driven websites.
* [Taily UI](https://www.npmjs.com/package/taily-ui) - UI component library for Tailwind CSS.
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
* [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/) - Open-source JavaScript runtime environment.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (Version 18.x or higher recommended)
* [npm](https://www.npmjs.com/) package manager

### Installation

1. Just one command and you are ready!

    ```bash
    npx taily-ui-create
    ```

### Running Locally

To start the development server:

```bash
npm start
```

Open your browser and navigate to http://localhost:4321 (or the port specified in your terminal). You should see the landing page template. The server will automatically reload as you make changes to the code.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This command will generate a static build of your site in the dist/ directory. You can deploy the contents of this directory to any static web host.

## 🔧 Usage & Customization

* 📄 **Pages:** Add or modify pages within the src/pages/ directory. Astro uses file-based routing. src/pages/index.astro is your main landing page.
* 🗂 **Layouts:** Define common page structures (like headers, footers) in src/layouts/.
* 📋 **Components:** Create reusable UI elements (using Astro syntax or integrating UI framework components) in src/components/.
* 🪄 **Taily UI:** Import and use Taily UI components directly within your .astro files as needed. Refer to the Taily UI documentation for available components and usage.
* 💎 **Tailwind CSS:** Customize the design system, add plugins, or modify base styles in tailwind.config.mjs.
Static Assets: Place images, fonts, and other static files in the public/ directory. They will be served from the root (/).

## 📁 Project Structure

```
├── public/             # Static assets (images, fonts, favicons)
├── src/
│   ├── components/     # Reusable Astro/Taily UI components
│   ├── layouts/        # Base page layouts (e.g., BaseLayout.astro)
│   └── pages/          # Site pages/routes (e.g., index.astro)
├── .gitignore          # Git Ignore configuration file
├── .prettierrc.json    # Prettier configuration file
├── astro.config.mjs    # Astro configuration file
├── eslint.config.mjs   # ESLint configuration file
├── package-lock.json   # Project dependencies & scripts (lockfile)
├── package.json        # Project dependencies & scripts
├── postcss.config.mjs  # PostCSS configuration file
├── tailwind.config.ts  # Tailwind CSS configuration file
└── tsconfig.json       # TypeScript configuration file
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.   

1. Fork the Project

2. Create your Feature Branch

    ```bash
    git checkout -b feature/AmazingFeature
    ```

3. Commit your Changes

    ```bash
    git commit -m 'Add some AmazingFeature'
    ```

4. Push to the Branch 

    ```bash
    git push origin feature/AmazingFeature
    ```

5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

1. [Astro Team](https://astro.build/)
2. [Taily UI Team](https://www.npmjs.com/package/taily-ui)
3. [Tailwind CSS Team](https://tailwindcss.com/)