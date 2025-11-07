# React Router Setup Instructions

## Installation Required

Please run the following command to install React Router:

```bash
npm install react-router-dom
```

## What's Been Created

1. **Pages Structure**
   - `src/pages/Home.jsx` - Home page with Hero, Statistics, Categories, About
   - `src/pages/Services.jsx` - Services and Courses page with detailed offerings

2. **Data Files**
   - `src/data/courses.js` - Course data (English, French, AI)
   - `src/data/services.js` - Service data (AI Automations, Ads, Websites)

3. **Components**
   - `src/components/ServiceCard/ServiceCard.jsx` - Card component for services/courses
   - Updated `src/App.jsx` - Router configuration
   - Updated `src/main.jsx` - Router provider

4. **Navigation**
   - Updated Header component to use React Router Links

## After Installation

1. Run `npm install react-router-dom`
2. Start the dev server: `npm run dev`
3. Navigate to `/services` to see the services page

## Routes

- `/` - Home page
- `/services` - Services and Courses page

## Image URLs

You can replace the placeholder Unsplash URLs in:
- `src/data/courses.js`
- `src/data/services.js`

Just update the `image` property for each item with your preferred Unsplash URLs.
