import React, {useState, useEffect} from 'react'

const Profile = () => {
  const [profileData, setProfileData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true)

        // Make the API call to fetch the profile data
        const response = await fetch(
          'https://bursting-gelding-24.hasura.app/api/rest/profile',
        )

        if (response.ok) {
          const data = await response.json()
          setProfileData(data)
        } else {
          console.error('Failed to fetch profile data.')
        }

        setLoading(false)
      } catch (error) {
        console.error('Error fetching profile data:', error)
        setLoading(false)
      }
    }

    fetchProfileData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Profile</h1>
      {profileData && (
        <div>
          <div>
            <img src={profileData.profileIcon} alt="Profile Icon" />
          </div>
          <div>
            <p>Name: {profileData.name}</p>
            <p>Username: {profileData.username}</p>
            <p>Email: {profileData.email}</p>
            <p>Date Of Birth: {profileData.dateOfBirth}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
