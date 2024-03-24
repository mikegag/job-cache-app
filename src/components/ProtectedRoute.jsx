import React from "react"
import { Navigate, Outlet } from "react-router-dom"


const isAuthenticated = () => {
  // Check if the user is authenticated
  // For testing purposes, you can return true or false.
  // Later, replace this with your authentication logic.
  return true; // Assuming the user is not authenticated initially
}

export default function ProtectedRoute() {
  
    return (
       
        isAuthenticated() ? (
            <Outlet />
            ) 
            : (
            <Navigate to="/signup" replace />
            )
    )
}

