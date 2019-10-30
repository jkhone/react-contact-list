import React from 'react'
import users from './randomUsers.json'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

function Contact(props) {
    const id = props.match.params.id
    const user = users.find(user => user.id === Number(id))

  return (
      <div className="contact">
        <Link to=''><div className='back'>&larr;</div></Link>
        <div className='personpic'>
          <img src={user.picture.large} alt=''></img>
        </div>
        <div className='info'>
          <p className='name'><i className="fa fa-user"></i> {user.name.first} {user.name.last}</p>
          <p><i className="fa fa-envelope"></i> {user.email}</p>
          <p><i className="fa fa-phone"></i> {user.cell}</p>
          <p className='location'><i class="fa fa-globe"></i> {user.location.city}, {user.location.state}</p>
        </div>
      </div>
  );
}

export default Contact;
