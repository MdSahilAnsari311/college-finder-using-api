# College Finder Using API

A simple web app that helps users find colleges/universities by searching a country name.
The app uses the Hipolabs Universities API to fetch and display university names.

# Features
- Search universities by entering any country name
- Fetches real-time data using Axios
- Displays results in a clean list format
- Simple and beginner-friendly JavaScript project

# Tech Used
- HTML
- JavaScript
- Axios (CDN)
- Hipolabs Universities API

# How It Works
1. User enters a country name
2. JavaScript sends a request to:
http://universities.hipolabs.com/search?name=<country>
3. The API returns an array of university objects
4. The app displays each college name inside a list.