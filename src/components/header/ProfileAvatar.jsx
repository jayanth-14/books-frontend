import React, { useContext } from 'react'
import { Link } from 'react-router'
import ProfileLinks from './ProfileLinks'
import { Context } from '../../data/states'

export default function ProfileAvatar() {
  const {user} = useContext(Context);
  const profileUrl = user ? `https://eu.ui-avatars.com/api/?name=${user?.fullName?.split(" ").join("+")}&size=250` : 'https://static-00.iconduck.com/assets.00/profile-circled-icon-256x256-r9etgs9q.png';

  return (
    <div className="relative md:relative md:block group z-40">

          <button
            type="button"
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
          >
            <span className="sr-only">Toggle dashboard menu</span>

            <img
              src={profileUrl}
              alt=""
              className="size-10 object-cover"
            />
          </button>
        <ProfileLinks />
    </div>
  )
}
