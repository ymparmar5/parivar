# Admin Panel Implementation Notes

## Architecture Overview

### Authentication Flow
```
Login Page
  ↓ (email + password)
  ↓ POST /auth/login
Node Backend
  ↓ (returns { token, user })
AuthContext
  ↓ (stores in localStorage)
Protected Routes
  ↓ (checks user context)
Admin Layout + Pages
```

### Key Components

#### AuthContext (`src/context/AuthContext.jsx`)
- Global auth state management
- Stores user & token in localStorage
- Methods: `login()`, `logout()`
- Auto-loads from localStorage on app start

#### ProtectedRoute (`src/components/ProtectedRoute.jsx`)
- Wrapper for routes requiring authentication
- Redirects unauthenticated users to `/login`
- Shows loading state while checking auth

#### API Client (`src/lib/api.js`)
- Axios instance configured for Node backend
- Auto-injects JWT token in `Authorization: Bearer <token>` header
- Handles 401 responses by redirecting to login
- Configurable base URL via `VITE_API_BASE` env var

### Pages Implemented

#### Login (`src/pages/Login.jsx`)
- Email + Password form
- Form validation
- Error display
- Stores token & user on successful login

#### Dashboard (`src/pages/Dashboard.jsx`)
- Fetches stats from `/admin/stats`
- Displays user/order/revenue cards
- Extensible for more metrics

#### Users (`src/pages/Users.jsx`)
- Lists all users in table
- **Create**: Modal form, POST to `/admin/users`
- **Read**: GET `/admin/users`, display with pagination ready
- **Update**: Edit button opens modal, PUT to `/admin/users/:id`
- **Delete**: Confirm dialog, DELETE `/admin/users/:id`
- Real-time feedback (success/error messages)

#### Settings (`src/pages/Settings.jsx`)
- Placeholder for admin configuration
- Extend with your settings/preferences

### Components

#### Layout (`src/components/Layout.jsx`)
- Main wrapper with Sidebar + Header + content area
- Uses React Router's Outlet for page content

#### Sidebar (`src/components/Sidebar.jsx`)
- Navigation links (Home, Users, Settings)
- Lucide icons (Home, Users, Settings)
- Active link highlighting via React Router

#### Header (`src/components/Header.jsx`)
- Displays logged-in user name
- Search input (placeholder, ready to wire)
- Logout button with navigation

#### Modal (`src/components/Modal.jsx`)
- Reusable modal wrapper
- Close button, title, custom content
- Positioned centrally with overlay

#### UserForm (`src/components/UserForm.jsx`)
- Controlled form with validation
- Fields: name, email, phone, role, password (create only)
- Error display below each field
- Submit button with loading state

#### Table (`src/components/Table.jsx`)
- Generic table component (used for extensibility)
- Configurable columns with custom renderers

## Backend Requirements

Your Node backend must provide:

```
POST /auth/login
  Request:  { email, password }
  Response: { token: "jwt...", user: { id, name, email, role } }

GET /admin/users
  Headers:  Authorization: Bearer <token>
  Response: [ { id, name, email, phone, role }, ... ]

POST /admin/users
  Headers:  Authorization: Bearer <token>
  Request:  { name, email, phone, role, password }
  Response: { id, name, email, phone, role }

PUT /admin/users/:id
  Headers:  Authorization: Bearer <token>
  Request:  { name, email, phone, role }
  Response: { id, name, email, phone, role }

DELETE /admin/users/:id
  Headers:  Authorization: Bearer <token>
  Response: { success: true } or 204 No Content

GET /admin/stats
  Headers:  Authorization: Bearer <token>
  Response: { users: 42, orders: 100, revenue: 5000 }
```

## Environment Variables

```env
VITE_API_BASE=http://localhost:5000  # Backend URL
```

## Development Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production (creates dist/)
npm run preview          # Preview production build locally
```

## Extending the Admin Panel

### Add New Page
1. Create `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx` inside the Layout route
3. Add sidebar link in `src/components/Sidebar.jsx`

### Add New API Integration
Use the API client in `src/lib/api.js`:
```jsx
import api from '../lib/api'

// GET
const res = await api.get('/admin/endpoint')

// POST
const res = await api.post('/admin/endpoint', { data })

// PUT
const res = await api.put('/admin/endpoint/:id', { data })

// DELETE
const res = await api.delete('/admin/endpoint/:id')
```

### Customize Styling
- Edit `src/index.css` for global styles
- Extend `tailwind.config.cjs` for theme customization
- Use Tailwind utility classes directly in components

### Add Role-Based Access Control
Extend ProtectedRoute to check `user.role`:
```jsx
if (user.role !== 'admin') {
  return <Navigate to="/" replace />
}
```

## Production Deployment

### Environment Setup
Set `VITE_API_BASE` to your production API URL before building.

### Security Checklist
- ✅ HTTPS only in production
- ✅ Secure token storage (localStorage is sufficient for SPA, consider httpOnly cookies)
- ✅ CORS configured on backend
- ✅ Token refresh mechanism (if needed)
- ✅ Input validation on forms
- ✅ XSS protection via React escaping

## Known Limitations & Future Enhancements

- [ ] Pagination for large user lists
- [ ] Search/filtering within user list
- [ ] Bulk actions (delete multiple)
- [ ] User roles/permissions management page
- [ ] Audit logs viewer
- [ ] Email templates editor
- [ ] SMS/Notification settings
- [ ] File upload (for user avatars)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics dashboard

## Troubleshooting

**Login fails with 404 or 500**
- Check `/auth/login` endpoint exists in Node backend
- Verify request/response format matches expectations

**CORS errors**
- Backend needs `Access-Control-Allow-Origin` header
- Or frontend must be served from same domain

**Token not persisting**
- Check localStorage is enabled
- Verify `auth_token` and `auth_user` keys in browser DevTools → Application

**Tailwind styles not applied**
- Ensure `npm install` completed successfully
- Rebuild dev server
- Check `tailwind.config.cjs` content paths include `src/`

## Architecture Decisions

1. **Context API over Redux**: Simple auth state doesn't need Redux complexity
2. **localStorage for tokens**: Standard for SPAs, secure with HTTPS
3. **Axios over fetch**: Better interceptor support for token injection
4. **Tailwind CSS**: Rapid UI development, consistent design
5. **Lucide Icons**: Lightweight, tree-shakeable icon library
6. **React Router v6**: Modern routing with loaders (extensible)
7. **Modal pattern**: Clean UX for CRUD forms

## File Structure
```
admin-panel/
├── public/                    # Static assets (favicon, etc)
├── src/
│   ├── context/
│   │   └── AuthContext.jsx   # Auth state & methods
│   ├── pages/
│   │   ├── Login.jsx         # Login page
│   │   ├── Dashboard.jsx     # Dashboard
│   │   ├── Users.jsx         # Users CRUD
│   │   └── Settings.jsx      # Settings
│   ├── components/
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   ├── Header.jsx        # Top header
│   │   ├── ProtectedRoute.jsx # Auth guard
│   │   ├── Modal.jsx         # Modal wrapper
│   │   ├── UserForm.jsx      # User form component
│   │   └── Table.jsx         # Generic table
│   ├── lib/
│   │   └── api.js            # Axios client
│   ├── App.jsx               # Routes
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind styles
├── .env                       # Environment variables
├── .env.example               # Example env
├── index.html                 # HTML template
├── vite.config.js            # Vite config
├── tailwind.config.cjs       # Tailwind config
├── postcss.config.cjs        # PostCSS config
├── package.json              # Dependencies
└── README.md                 # Documentation
```

---

**Version**: 1.0.0  
**Last Updated**: 2026-05-23  
**Status**: Production Ready
