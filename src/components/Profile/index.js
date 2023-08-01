import React, {useEffect, useState} from 'react'
import './index.css'

const Profile = () => {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    // Fetch profile data from the API
    fetchProfileData()
  }, [])

  const fetchProfileData = () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching profile data
    fetch('https://bursting-gelding-24.hasura.app/api/rest/profile', {
      method: 'GET',
      headers: {
        // Add necessary headers here (if required)
      },
    })
      .then(response => response.json())
      .then(data => {
        // Set the profile data in the state
        setProfileData(data)
      })
      .catch(error => {
        console.error('Error fetching profile data:', error)
      })
  }

  return (
    <div className="profile">
      {profileData ? (
        <>
          <div className="profile-icon">
            <img src={profileData.profileIcon} alt="Profile Icon" />
          </div>
          <div className="profile-details">
            <p>Name: {profileData.name}</p>
            <p>Username: {profileData.username}</p>
            <p>Email: {profileData.email}</p>
            <p>Date Of Birth: {profileData.dateOfBirth}</p>
          </div>
        </>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  )
}

export default Profile
