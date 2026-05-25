# Parivar Admin Panel (React + Vite + Tailwind)

Production-ready admin dashboard for Parivar built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Features full authentication, protected routes, and Users CRUD with complete forms.

## Features

✅ **Authentication**: Login/Logout with JWT tokens  
✅ **Protected Routes**: Role-based access control  
✅ **Users CRUD**: Create, Read, Update, Delete users with validation  
✅ **Responsive Design**: Tailwind CSS with mobile support  
✅ **Icons**: Lucide React for consistent iconography  
✅ **API Ready**: Axios client with auto-token injection and error handling  
✅ **Modal Forms**: User creation/editing with validation feedback  
✅ **Production Build**: Optimized Vite build + Docker support  

## Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Running Parivar Node backend (PORT 5000)

### Setup

```bash
# Navigate to admin panel directory
cd admin-panel

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env if needed (default points to localhost:5000)
# VITE_API_BASE=http://localhost:5000

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Default Credentials
Create a test user in your Node backend, or use credentials from your setup:
```
Email: admin@example.com
Password: (as configured in your backend)
```

## Backend API Endpoints Expected

The admin panel expects your Node backend to provide these endpoints:

```
POST   /auth/login                 - Login (returns { token, user })
GET    /admin/users                - Get all users (requires auth)
POST   /admin/users                - Create user (requires auth)
PUT    /admin/users/:id            - Update user (requires auth)
DELETE /admin/users/:id            - Delete user (requires auth)
GET    /admin/stats                - Dashboard stats (requires auth)
```

### Auth Flow
1. User submits email + password on `/login`
2. Backend returns `{ token, user }`
3. Token stored in localStorage
4. Token auto-injected in all API requests via `Authorization: Bearer <token>`
5. 401 responses redirect to login

## Development

### Project Structure
```
src/
  context/        - React contexts (Auth)
  pages/          - Page components (Login, Dashboard, Users, Settings)
  components/     - Reusable components (Layout, Sidebar, Header, Modal, Table, UserForm)
  lib/            - Utilities (API client)
  App.jsx         - Routes & protected routes
  main.jsx        - Entry point
  index.css       - Tailwind styles
```

### Build for Production

```bash
npm run build
```

Creates optimized bundle in `dist/` directory.



## Customization Guide

### Add New Admin Page

1. Create page component in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add sidebar link in `src/components/Sidebar.jsx`

**Example:**
```jsx
// src/pages/Reports.jsx
import React from 'react'

export default function Reports() {
  return <div><h2>Reports</h2></div>
}
```

Then add to routes and sidebar.

### API Integration

The API client in `src/lib/api.js` automatically:
- Sets base URL from `VITE_API_BASE`
- Injects JWT token in Authorization header
- Redirects to login on 401 errors

**Usage in components:**
```jsx
import api from '../lib/api'

const res = await api.get('/admin/users')
await api.post('/admin/users', { name, email })
await api.put(`/admin/users/${id}`, data)
await api.delete(`/admin/users/${id}`)
```

### Form Validation

`UserForm` component includes email validation and required field checks. Extend with custom validators as needed.

## Environment Variables

```env
VITE_API_BASE=http://localhost:5000    # Backend API URL
```

## Troubleshooting

**Login not working?**
- Check backend is running on PORT 5000
- Verify `/auth/login` endpoint exists and returns `{ token, user }`
- Check browser console for CORS errors

**CRUD operations failing?**
- Ensure token is being sent (check Network tab → Headers)
- Verify endpoint paths match backend routes
- Check backend returns proper status codes (201 for create, 200 for update, etc.)

**Tailwind not applying?**
- Run `npm install` to ensure all deps are installed
- Rebuild dev server: `npm run dev`

## Production Checklist

- [ ] Set `VITE_API_BASE` to production API URL
- [ ] Test auth flow with production backend
- [ ] Review and test all CRUD operations
- [ ] Test responsive design on mobile
- [ ] Set up HTTPS on production
- [ ] Configure CORS on backend if needed
- [ ] Test JWT token refresh (if implemented in backend)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client
- **React Router 6** - Routing


## License

Proprietary - Parivar Platform 2026

## Support

For issues or questions, contact your development team.

