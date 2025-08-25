# Contributing to MOOSH Protocol Website

Thank you for your interest in contributing to the MOOSH Protocol website! This document outlines the guidelines and processes for contributing to this project.

## 🚀 Quick Start

### 1. Fork and Clone
```bash
git clone https://github.com/your-username/moosh-website.git
cd moosh-website
```

### 2. Setup Development Environment
```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local

# Setup Git hooks
pnpm prepare

# Start development server
pnpm dev
```

## 📋 Development Workflow

### Branch Naming Convention
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `perf/` - Performance improvements
- `test/` - Testing related changes

```bash
git checkout -b feature/add-new-section
```

### Code Standards

#### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid using `any` type
- Use meaningful variable and function names

#### React Components
```tsx
// ✅ Good
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ❌ Avoid
export default function Button(props) {
  return <button className="btn">{props.children}</button>;
}
```

#### Styling
- Use Tailwind CSS classes
- Leverage design tokens from `tailwind.config.js`
- Follow BEM-like naming conventions for custom classes
- Ensure responsive design

```tsx
// ✅ Good
<div className="flex flex-col md:flex-row gap-4 p-4">
  <div className="flex-1">Content</div>
</div>

// ❌ Avoid
<div style={{ display: 'flex', gap: '1rem' }}>
  <div>Content</div>
</div>
```

### Commit Messages

We use [Conventional Commits](https://conventionalcommits.org/) format:

```bash
# ✅ Good
git commit -m "feat: add responsive navigation component"

git commit -m "fix: resolve button hover state in mobile view"

git commit -m "docs: update component API documentation"

# ❌ Avoid
git commit -m "add nav"

git commit -m "fix button"

git commit -m "update docs"
```

### Pre-commit Quality Checks

Before pushing your changes, ensure all quality checks pass:

```bash
# Run all checks
pnpm lint
pnpm type-check
pnpm format:check

# Fix issues automatically
pnpm lint:fix
pnpm format
```

These checks run automatically on pre-commit thanks to Husky.

## 🧪 Testing

### Writing Tests
- Write tests for all new components and utilities
- Use React Testing Library for component testing
- Mock external dependencies appropriately
- Aim for 70%+ code coverage

```tsx
// Example test file: Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Running Tests
```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## 🎨 Design Guidelines

### Color Usage
- Use the design tokens defined in `tailwind.config.js`
- Primary green: `moosh-green` (#32C466)
- Background colors: `moosh-black`, `moosh-gray-*`
- Text colors: `moosh-text-*`

### Typography
- Use the Typography component for consistent text styling
- Follow the font hierarchy: H1, H2, H3, Text, Eyebrow
- Respect line heights and spacing

### Animation & Interaction
- Use Framer Motion for animations
- Respect `prefers-reduced-motion` setting
- Keep animations subtle and purposeful

## 📱 Accessibility

### WCAG Compliance
- Ensure proper color contrast ratios
- Add `aria-*` attributes where needed
- Test with keyboard navigation
- Provide meaningful alt text for images

### Semantic HTML
```tsx
// ✅ Good
<button type="button" aria-label="Close menu">
  <XIcon />
</button>

// ❌ Avoid
<div onClick={handleClose} role="button">
  <XIcon />
</div>
```

## 🚀 Performance

### Code Splitting
- Use dynamic imports for large components
- Implement lazy loading for below-the-fold content
- Optimize images with Next.js Image component

### Bundle Analysis
```bash
# Analyze bundle size
pnpm build
# Check .next/analyze/client.html
```

## 📝 Pull Request Process

### 1. Create Pull Request
- Use the GitHub PR template
- Provide clear title and description
- Reference related issues

### 2. Code Review Process
- Address review comments promptly
- Make requested changes
- Keep PRs focused on single features

### 3. Before Merge
- All CI checks must pass
- At least one approval from maintainers
- No merge conflicts

## 🐛 Issue Reporting

### Bug Reports
When reporting bugs, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and device information
- Screenshots if applicable

### Feature Requests
When requesting features, please include:
- Use case description
- Benefits to the project
- Implementation suggestions

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🤝 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the original project (MIT License).

---

Thank you for contributing to MOOSH Protocol! 🎉
