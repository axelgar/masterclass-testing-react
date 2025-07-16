# Masterclass testing with React

## Tech stack

- JavaScript
- Vite
- React
- React Router
- TailwindCSS
- Vitest
- Prettier
- Eslint

## How to run the application

1. git clone repo
2. `nvm use`
3. `npm install`
4. `npm run dev`
5. Visit http://localhost:5173/

## How to run the server (for test 09)

```bash
npm run dev:server
```

## Specific setup instructions per exercise

#### 03 React Testing Library (RTL)

Install library

```bash
npm install --save-dev @testing-library/react @testing-library/dom
```

Install DOM matchers, to have access to `toBeInTheDocument` for example

```bash
npm install --save-dev @testing-library/jest-dom
```

#### 04 User Interactions

```bash
npm install --save-dev @testing-library/user-event
```

#### 09 Mock API calls

```bash
npm install --save-dev msw
```

## Resources

- [Vitest VSCode extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [Testing Playground](https://testing-playground.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Mock Service Worker](https://mswjs.io/docs)
- [Blog post about Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Blog post about Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Codecademy course](https://www.codecademy.com/learn/learn-react-testing)
