# Readexa – GitHub Profile README Generator

**Readexa** is a web-based GitHub Profile README Generator built with **React and TypeScript**. The application helps developers create and customize professional GitHub profile READMEs without manually writing Markdown or HTML.

Users can enter their profile information, select technologies from categorized skill collections, and instantly preview their generated README. The application also supports copying Markdown and downloading a ready-to-use `README.md` file.

Readexa is designed as a lightweight, responsive, frontend-only application that does not require user authentication.

**Live Demo:** https://readexa.netlify.app/

## Key Features

### Profile Customization

- **Profile Information** – Customize the profile title, subtitle, and personal introduction
- **About Me Section** – Add information about current projects, collaboration interests, and learning goals
- **Optional Fields** – Leave unnecessary profile fields empty without displaying unused content in the generated README

### Skills Management

- **Categorized Skills** – Browse technologies organized into categories such as Programming Languages, Frontend Frameworks, Backend Frameworks, Databases, and DevOps Tools
- **Technology Selection** – Select multiple technologies to showcase technical skills
- **Technology Logos** – Display corresponding technology icons in the generated README
- **Dynamic Skill Updates** – Add or remove selected technologies and immediately update the preview

### README Generation

- **Automatic Markdown Generation** – Convert user-provided information into structured GitHub-compatible Markdown
- **Dynamic Sections** – Generate profile headers, About Me information, and technical skills sections
- **Conditional Rendering** – Automatically exclude empty fields and unused sections from the generated output
- **Live Preview** – Instantly update the rendered README whenever profile information or selected technologies change

### Export & Draft Management

- **Copy Markdown** – Copy the generated Markdown directly to the clipboard
- **Download README** – Export the generated content as a `README.md` file
- **Local Draft Storage** – Save README configuration in browser LocalStorage
- **Draft Restoration** – Restore previously saved information when revisiting the application
- **Reset Configuration** – Reset the README editor to its default state
- **Toast Notifications** – Display feedback for user actions such as copying, downloading, and resetting content

### Responsive Interface

- **Desktop Layout** – Display the editor and live preview side by side
- **Mobile Layout** – Switch between the editor and preview using a mobile-friendly view toggle
- **Reusable Components** – Organize the interface into modular and reusable React components
- **Responsive Design** – Support desktop, tablet, and mobile screen sizes

## Application Workflow

Readexa provides a simple workflow for creating GitHub profile READMEs:

1. **Enter Profile Information** – Add a title, subtitle, and About Me details
2. **Select Technologies** – Choose programming languages, frameworks, databases, and other tools
3. **Preview README** – Review the automatically generated README in real time
4. **Export Markdown** – Copy the Markdown or download the `README.md` file
5. **Use on GitHub** – Add the generated README to a GitHub profile repository

No account registration or backend setup is required.

## Tech Stack

- **Frontend:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React State and Context API
- **Local Storage:** Browser LocalStorage
- **Architecture:** Component-based architecture
- **Deployment:** Netlify

## Project Structure

```text
Readexa/
├─ public/│
├─ src/
│  ├─ assets/                      # Images, asset references
│  │
│  ├─ components/                  # Reusable UI components
│  │  ├─ common/                   # Shared application components
│  │  ├─ editor/                   # README editor components
│  │  ├─ home/                     # Home-specific components
│  │  └─ preview/                  # README preview components
│  │
│  ├─ context/                     # Shared React Context
│  │
│  ├─ layouts/                     # Application layouts
│  │
│  ├─ pages/                       # Application pages
│  │
│  ├─ utils/                       # Utility functions
│  │
│  ├─ App.tsx                      # Application root
│  ├─ index.css                    # Global styles
│  └─ main.tsx                     # Application entry point
│
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone <repository-url>
cd Readexa
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the local development URL displayed in the terminal to access the application.

## Future Improvements

Readexa is planned to evolve through additional development phases.

### Phase 2 – Advanced Customization

- GitHub Statistics and Streak Statistics
- Social Links and Profile Badges
- Custom Profile Banners
- README Themes and Templates
- Drag-and-Drop Section Reordering
- Section Visibility Controls
- Enhanced README Customization

### Phase 3 – Fullstack Platform

- User Authentication with Email/Password and OAuth
- Cloud-Based README Storage and Management
- Public README Template Gallery
- Template Likes and Bookmarks
- Community Template Sharing
- GitHub API Integration
- Direct README Updates to GitHub Repositories

These features are part of the planned roadmap and are not included in the current MVP.
