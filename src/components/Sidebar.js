import React from 'react'

const Sidebar = ({role}) => {
  const adminLinks = [
    {name: 'Dashboard', url: '/dashboard'},
    {name: 'All Transactions', url: '/all-transactions'},
    {name: 'Profile', url: '/profile'},
    {name: 'Logout', url: '/logout'},
  ]

  const userLinks = [
    {name: 'Dashboard', url: '/dashboard'},
    {name: 'Your Transactions', url: '/your-transactions'},
    {name: 'Profile', url: '/profile'},
    {name: 'Logout', url: '/logout'},
  ]

  const links = role === 'admin' ? adminLinks : userLinks

  return (
    <div>
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
