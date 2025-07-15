# Masterclass testing with React

## Set-up

1. git clone repo
2. `npm install`
3. `npm run dev`
4. Visit http://localhost:5173/

## Tech stack

- JavaScript
- Vite
- React
- React Router
- TailwindCSS
- Vitest
- Prettier
- Eslint

## Introduction

## Setup instructions per exercise

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

`npm install --save-dev @testing-library/user-event`

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
