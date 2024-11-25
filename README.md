# The Uaso Ngiro Baboon Project Website

## Overview
This website showcases the groundbreaking work of the Uaso Ngiro Baboon Project (UNBP), a long-term primate research initiative based in Kenya. The project, led by Dr. Shirley C. Strum since 1972, combines scientific research with community-based conservation approaches.

## Project Structure
```
conservation-website/
├── public/
│   └── images/
│       ├── people/         # Researchers, staff, and community members
│       ├── wildlife/       # Animal photographs
│       ├── landscapes/     # Location and environment shots
│       ├── community/      # Community activities and events
│       ├── historical/     # Archive photos
│       └── artwork/        # Illustrations and artistic content
├── src/
│   ├── components/        # React components
│   │   ├── About/        # Project history and information
│   │   ├── Discoveries/  # Latest research findings
│   │   ├── HeroSection/  # Main landing section
│   │   ├── Layout/       # Header and footer
│   │   ├── Newsletter/   # Email subscription
│   │   ├── Research/     # Research tabs and content
│   │   ├── Stats/        # Key findings and statistics
│   │   └── UI/           # Reusable UI components
│   ├── data/            # Static data and content
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   └── types/           # TypeScript definitions
```

## Features
- **Interactive Research Showcase**: Dynamic presentation of research findings
- **Community Integration**: Highlighting local participation and knowledge
- **Historical Timeline**: Project evolution from 1972 to present
- **Media Gallery**: Comprehensive collection of project photographs
- **Resource Center**: Publications and educational materials
- **Newsletter Integration**: Updates on latest discoveries
- **Responsive Design**: Optimized for all devices

## Technology Stack
- React.js
- Tailwind CSS
- Lucide Icons
- Modern JavaScript (ES6+)
- Responsive Design Principles

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/conservation-website.git
cd conservation-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## Component Documentation

### HeroSection
The main landing section introducing the project's significance.
```jsx
<HeroSection 
  setShowVideo={function}
  setShowCitation={function}
  activeInfoPoint={number}
  setActiveInfoPoint={function}
/>
```

### AboutProject
Comprehensive overview of the project's history and achievements.
```jsx
<AboutProject />
```

### ResearchTabs
Interactive display of research areas and findings.
```jsx
<ResearchTabs 
  dnaData={object}
  selectedDnaSegment={string}
  setSelectedDnaSegment={function}
/>
```

### LatestDiscoveries
Showcase of recent research developments.
```jsx
<LatestDiscoveries 
  researchHighlights={array}
  activeStory={number}
  setActiveStory={function}
/>
```

## Data Structure

### research-data.js
```javascript
export const dnaData = {
  // DNA analysis data structure
};

export const researchHighlights = [
  // Research highlights array
];
```

## Styling
- Utilizes Tailwind CSS for responsive design
- Custom color scheme reflecting conservation themes
- Consistent typography using serif for headings and sans-serif for body text
- Responsive breakpoints for various screen sizes

## Development Guidelines

### Code Style
- Follow ESLint configuration
- Use functional components with hooks
- Implement proper TypeScript types
- Follow component-based architecture
- Maintain consistent naming conventions

### Best Practices
- Keep components focused and single-responsibility
- Implement proper error handling
- Use proper image optimization
- Follow accessibility guidelines
- Maintain responsive design principles

### Git Workflow
1. Create feature branches
2. Follow conventional commits
3. Submit pull requests for review
4. Maintain clean commit history

## Content Management
- Images stored in categorized directories
- Content managed through data files
- Easily updatable research information
- Modular component structure

## Performance Optimization
- Lazy loading for images
- Code splitting for routes
- Optimized build process
- Efficient state management
- Proper caching strategies

## Deployment
1. Build the project
```bash
npm run build
```

2. Test the build locally
```bash
npm run start
```

3. Deploy to your hosting platform of choice

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Dr. Shirley C. Strum and the UNBP team
- Local communities in Kenya
- Research partners and supporters
- Conservation organizations

## Contact
For questions and support, please contact:
- Project Website: [website-url]
- Email: [contact-email]
- Twitter: [@handle]

## Version History
- 1.0.0: Initial release
- 1.1.0: Added comprehensive research section
- 1.2.0: Integrated community features

---

© 2024 The Uaso Ngiro Baboon Project Website. All rights reserved.