import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

// components
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'

function App() {

  return (

    // Navigate to the other pages
    <BrowserRouter>
      <Routes>

        {/* redirects to dashboard page when app is opened */}
        <Route 
          path="/" 
          element={
            <Navigate 
              replace to="/Dashboard" />
          } 
        />

        {/* Dashboard */}
        <Route
          index
          path='/Dashboard'
          element={<DashboardPage/>}
        />

        {/* Analytics */}
        <Route
          path='/Analytics'
          element={<AnalyticsPage/>}
        />

        {/* Settings */}
        <Route
          path='/Settings'
          element={<SettingsPage/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
