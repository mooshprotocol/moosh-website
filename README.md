# Mega Moosh Website

A modern, responsive website built with Next.js 14 and TypeScript, featuring multi-language support and optimized performance.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Internationalization (i18n)** with next-intl
- **Responsive design** for all devices
- **SEO optimized** with proper metadata
- **Modern architecture** with component-based design

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── [locale]/          # Internationalized routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── services/      # Services page
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   └── ui/              # UI components
│       └── LanguageSwitcher.tsx # Language toggle
├── lib/                  # Utility functions
│   └── site-config.ts   # Site configuration
├── types/               # TypeScript definitions
│   └── index.ts        # Type definitions
├── i18n.ts             # Internationalization config
├── middleware.ts       # Next.js middleware
└── routing.ts          # Route configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mega-moosh-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Internationalization

The website supports multiple languages:

- **English** (default): `/`
- **Chinese**: `/zh`

### Adding New Languages

1. Add the locale to `src/routing.ts`
2. Create translation file in `messages/{locale}.json`
3. Update the routing configuration

### Translation Files

Translation files are located in the `messages/` directory:
- `messages/en.json` - English translations
- `messages/zh.json` - Chinese translations

## Deployment

This project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

```bash
pnpm build
```

### Other Platforms

1. Build the project:
```bash
pnpm build
```

2. Start the production server:
```bash
pnpm start
```

## Configuration

### Site Configuration

Edit `src/lib/site-config.ts` to update:
- Site name and description
- Navigation menu items
- SEO metadata

### Styling

The project uses Tailwind CSS. Configuration can be found in:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.