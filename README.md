# WeWantWaste

![WeWantWaste](./public/og.png)

Redesigned of the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk/) with a completely fresh look and feel, while maintaining its original functionality.

## Overview

Our redesigned interface improves this critical selection phase with:

- **Visual-first approach**: Clear skip visualization with relevant details
- **Contextual filtering**: Easy filtering by skip size and placement requirements
- **Responsive design**: Seamless experience across all devices
- **Accessibility improvements**: Enhanced readability and navigation
- **Multi-view options**: Flexible grid and list views for different user preferences

## Tech Stack

### Core Technologies
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router for server-side rendering and routing
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and developer experience
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling and responsive design

### UI Components
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) - Selected for its non-opinionated, accessible components that provide maximum customizability while maintaining consistent design patterns
- **Icons**: [Lucide React](https://lucide.dev/) for consistent and beautiful iconography
- **Theme Support**: [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode

### Data Management
- **Server Actions**: Next.js server actions for data mutations
- **State Management**: React Context API for application state
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) for efficient data fetching, caching, and state management - chosen for its declarative approach and automatic background refetching capabilities

### UI/UX Enhancements
- **Drawer Component**: [Vaul](https://vaul.emilkowal.ski/) for smooth, accessible drawer animations
- **Step Navigation**: Custom stepper component for multi-step process
- **Error Boundaries**: [react-error-boundary](https://github.com/bvaughn/react-error-boundary) for graceful error handling

## Design Approach

The redesign focuses on several key principles:

1. **User-Centric Design**: Skip selection is simplified with clear visual indicators for size, placement options (road legal vs. private land), and waste type compatibility
   
2. **Visual Hierarchy**: Important information like skip size, availability, and pricing is prominently displayed

3. **Filtering Experience**: Advanced filtering with real-time updates and count indicators help users quickly narrow down options

4. **Visual Feedback**: Selected skips are clearly highlighted with distinctive borders and interactive elements

5. **Information Architecture**: Critical details are organized in a consistent, scannable layout in both grid and list views

## Folder Structure

```bash
app
├── api
│   ├── skips
│   │   ├── route.ts
│   │   └── [id]
│   │       └── route.ts
│   └── auth
│       └── [...nextauth]
├── components
│   ├── ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── drawer.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── modal.tsx
│   │   ├── radio.tsx
│   │   ├── select.tsx
│   │   └── spinner.tsx
│   ├── layout
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── skips
│   │   ├── skipCard.tsx
│   │   └── skipFilter.tsx
│   └── auth
│       ├── signIn.tsx
│       └── signUp.tsx
├── hooks
│   ├── useSkips.ts
│   └── useAuth.ts
├── lib
│   ├── db.ts
│   └── prisma.ts
├── middleware
│   └── auth.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── auth
│   │       └── [...nextauth].ts
│   ├── skips
│   │   ├── index.tsx
│   │   └── [id]
│   │       └── index.tsx
│   ├── auth
│   │   ├── signIn.tsx
│   │   └── signUp.tsx
│   └── index.tsx
├── public
│   ├── images
│   │   ├── logo.png
│   │   └── favicon.ico
│   └── og.png
├── styles
│   ├── globals.css
│   └── tailwind.css
└── utils
    ├── constants.ts
    └── helpers.ts
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
