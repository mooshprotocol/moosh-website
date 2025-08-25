# MOOSH Protocol Website

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, responsive website for MOOSH Protocol built with Next.js 15 and TypeScript, featuring multi-language support, optimized performance, and cutting-edge web technologies.

## ✨ Features

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for utility-first styling
- **Internationalization (i18n)** support for English and Chinese
- **Responsive design** optimized for all devices
- **SEO optimized** with proper metadata and sitemap
- **Performance optimized** with lazy loading and code splitting
- **Accessibility** compliant with WCAG guidelines
- **Security headers** configured for production
- **Modern animations** with Framer Motion

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19 with concurrent features
- **Language**: TypeScript 5.0 with strict configuration
- **Styling**: Tailwind CSS 3.3 with custom design tokens
- **Package Manager**: pnpm 10.12.2

### Key Libraries
- **Animation**: Framer Motion for smooth interactions
- **Internationalization**: Custom i18n solution
- **Smooth Scrolling**: Lenis for enhanced scroll experience
- **Icons**: Custom SVG icons with accessibility support

### Development Tools
- **Linting**: ESLint with TypeScript and React rules
- **Formatting**: Prettier with consistent code style
- **Git Hooks**: Husky for pre-commit quality checks
- **Type Checking**: TypeScript with strict mode enabled

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
cd moosh-website
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

#### Development
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production with optimizations
- `pnpm start` - Start production server
- `pnpm clean` - Clean build artifacts and cache

#### Code Quality
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm lint:fix` - Run ESLint with automatic fixes
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting without changes
- `pnpm type-check` - Run TypeScript type checking

#### Setup
- `pnpm prepare` - Setup Git hooks (runs automatically after install)

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

#### Typography & UI Consistency

- Use `src/components/ui/Typography.tsx` for page headings and text: `H1`, `H2`, `H3`, `Text`, `Eyebrow`.
- Use tokens under `moosh.*` (colors/shadows/spacing) from `tailwind.config.js`.
- Prefer primitives in `src/components/ui`: `Button`, `Card`, `Input`, `Label`, `Textarea`, `Skeleton`, `Spinner`, `EmptyState`.
- Avoid raw CSS values in components; if a token is missing, add it to Tailwind config first.

Examples:

```tsx
import { Typography } from '@/components/ui/Typography';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { EmptyState } from '@/components/ui/EmptyState';

<Typography.H2 align="center" className="mb-6">Section Title</Typography.H2>
<Typography.Text tone="secondary">Some paragraph...</Typography.Text>

<Label required>Email</Label>
<Input type="email" placeholder="you@example.com" />

<EmptyState title="No data yet" description="Please add your first item." />
```

## 🧪 Testing & Quality

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint**: Enforces coding standards and catches potential bugs
- **Prettier**: Maintains consistent code formatting
- **TypeScript**: Provides type safety and better IDE support
- **Husky**: Runs pre-commit hooks to ensure quality
- **lint-staged**: Runs linters on staged files only

### Before Committing

The project uses Git hooks to automatically run quality checks:

```bash
# These commands run automatically on pre-commit:
pnpm lint-staged    # Lint only staged files
pnpm type-check     # TypeScript type checking
pnpm format:check   # Check formatting
```

### Manual Quality Checks

```bash
# Run all quality checks
pnpm lint
pnpm type-check
pnpm format:check

# Fix issues automatically
pnpm lint:fix
pnpm format
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/moosh-website.git
   cd moosh-website
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Setup Development Environment**
   ```bash
   cp .env.example .env.local
   pnpm prepare  # Setup Git hooks
   ```

4. **Start Development**
   ```bash
   pnpm dev
   ```

### Contribution Guidelines

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Follow Code Standards**
   - Use TypeScript for all new code
   - Follow the established component patterns
   - Add proper TypeScript types
   - Use the design tokens from `tailwind.config.js`

3. **Code Quality**
   ```bash
   pnpm lint:fix      # Fix linting issues
   pnpm format        # Format code
   pnpm type-check    # Check types
   ```

4. **Testing**
   - Test your changes across different screen sizes
   - Verify accessibility compliance
   - Check performance impact

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Use conventional commit format
   - Provide clear description of changes
   - Reference any related issues

### Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/Moosh-Finance/moosh-website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Moosh-Finance/moosh-website/discussions)
- **Documentation**: Visit our [official website](https://moosh.finance)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons and graphics designed in-house