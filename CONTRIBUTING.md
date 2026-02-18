# Contributing to Infragate Solutions

Thank you for your interest in contributing to Infragate Solutions! This guide will help you get started.

## Code of Conduct

By participating in this project, you agree to maintain a professional and respectful environment.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Infragate-Solutions.git
   cd Infragate-Solutions
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming

Use descriptive branch names with prefixes:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests

Example: `feature/add-user-authentication`

### Commit Messages

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(contact): add email validation to contact form

fix(layout): resolve mobile menu toggle issue

docs(readme): update installation instructions
```

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` type - use proper types or `unknown`
- Enable strict mode compliance
- Document complex types with JSDoc comments

### React

- Use functional components with hooks
- Prefer named exports over default exports for components
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

### Styling

- Use Tailwind CSS utility classes
- Follow existing design system (colors, spacing)
- Ensure responsive design (mobile-first)
- Maintain dark theme consistency

### Accessibility

- Add ARIA labels to interactive elements
- Ensure keyboard navigation works
- Use semantic HTML
- Test with screen readers when possible
- Maintain color contrast ratios (WCAG 2.1 AA)

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Writing Tests

- Write tests for all new features
- Maintain test coverage above 80%
- Use descriptive test names
- Follow Arrange-Act-Assert pattern

**Example:**

```typescript
describe('ComponentName', () => {
  it('should render correctly with props', () => {
    // Arrange
    const props = { name: 'Test' };
    
    // Act
    render(<ComponentName {...props} />);
    
    // Assert
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Test Coverage Requirements

- Components: 80%+
- Utilities: 90%+
- Services: 85%+

## Pull Request Process

### Before Submitting

1. **Update from main:**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Build project:**
   ```bash
   npm run build
   ```

4. **Lint code:**
   ```bash
   # If linter is available
   npm run lint
   ```

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added/updated for changes
- [ ] All tests passing
- [ ] Build succeeds without errors
- [ ] Documentation updated (if needed)
- [ ] Accessibility considerations addressed
- [ ] SEO implications considered (if applicable)
- [ ] No console errors or warnings

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Tests pass
- [ ] Build succeeds
- [ ] Documentation updated
- [ ] Accessibility verified
```

## Code Review Process

1. Maintainers will review your PR
2. Address feedback in new commits
3. Once approved, PR will be merged
4. Branch will be deleted after merge

### Review Timeline

- Initial review: 2-3 business days
- Follow-up reviews: 1-2 business days

## Reporting Issues

### Bug Reports

Include:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, Node version)
- Screenshots or error messages
- Possible solutions (if known)

### Feature Requests

Include:
- Clear description of the feature
- Use cases and benefits
- Potential implementation approach
- Alternatives considered

## Questions?

- **Email**: info@infragatesolutions.com
- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community support

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Infragate Solutions! 🚀
