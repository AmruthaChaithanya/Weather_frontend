# Weather App – Frontend

## Overview

This is the frontend of the Weather App, built using **React** and **TanStack Query**. It provides a simple and responsive interface for users to select an Indian state and district, and view real-time weather data.

The application communicates with a Django backend API to fetch weather information.

---

## Tech Stack

* React (Vite)
* TanStack Query (React Query)
* JavaScript (ES6+)
* CSS

---

## Features

* State and district selection (India-focused)
* Dynamic district dropdown based on selected state
* Real-time weather data display
* API integration with backend
* Intelligent caching using TanStack Query
* Loading and error state handling

---

## Project Structure

```
src/
│── api/
│   └── weather.js          # API calls to backend
│── components/
│   ├── StateSelector.jsx
│   ├── DistrictSelector.jsx
│   └── WeatherDisplay.jsx
│── hooks/
│   └── useWeather.js       # Custom TanStack Query hook
│── data/
│   └── districts.js        # Static state-district mapping
│── App.jsx
│── main.jsx
```

---

## How It Works

1. User selects a **state**
2. District dropdown updates dynamically
3. User selects a **district**
4. Weather data is fetched from backend via:

   ```
   /api/weather/?district=<district>
   ```
5. TanStack Query:

   * Caches results per district
   * Avoids unnecessary API calls
   * Manages loading and error states

---

## Best Practices Implemented

* Separation of concerns (API, hooks, UI)
* Controlled components for form inputs
* Query caching and performance optimization
* Reusable custom hooks
* Clean component structure

---

## Deployment

* Deployed on **Vercel**

---
