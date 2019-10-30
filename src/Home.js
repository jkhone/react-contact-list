import React from 'react'
import { Link } from 'react-router-dom'
import users from './randomUsers.json'

function Home(props) {
  return (
      <div className="home">
        <h2>My Peeps</h2>
        {users.map(user => (
            <Link className='peeplink' key={'user-link-' + user.id} to={'/contact/' + user.id}>
                <div className='people'>
                <img src={user.picture.thumbnail} alt=''/>
                <p>{user.name.first} {user.name.last}</p>
                </div>
            </Link>
        ))}

      </div>
  );
}

export default Home;
