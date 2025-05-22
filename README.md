# ProProfile

## Setup and Run Instructions

Clone the repository

```bash
git clone <repo-url>
cd pronet-profile
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Technical Decisions

- Configured ESLint and Prettier for consistent styling and auto-import sorting.
- Avatar images are obtained through the [Pravatar API](https://www.pravatar.cc/)
- Where used, SVG Icons come from [Free SVG Icons](https://freesvgicons.com/)
- clsx to compose classnames
- Tailwind CSS v4, to get familiar with the latest config style changes.
- Added (limited) themes with toggle, centralized variables.

## Product Decisions

- Simple context-based login with hardcoded users for demonstration.
- Create a lander profile page. On login, user is redirected to their own profile first.
- When the logged in user has left a recommendation, it will be displayed at the top of the list.
- When the logged in user has left a recommendatino, the textarea will no longer be displayed.
- Inline editing (of recommendations) chosen over modals to reduce complexity and improve UX. User’s own recommendation is highlighted at the top of the list.
- Mobile-first approach; buttons on mobile omit icons as per design reference.
- Navbars (both top and bottom) are only minimally functional (only Home button), but adapt and respond properly to viewport changes
- Theme toggle with icon sun/moon

## Potential Improvements (for the mock app)

- Expand the currently limited testing coverage
- API calls are only partially mocked
- More robust loader and skeletons
- Profile enhancement: location, socials, and, in general, more user data.
- Functional network tab for better navigation between users.
- Log-out button and functionality.


### License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0).  
You may view and share the code with attribution but **not use it commercially or redistribute modified versions**.

