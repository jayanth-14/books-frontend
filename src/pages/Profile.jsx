import React, { useEffect, useState } from 'react'
import { Context } from '../data/states'
import { useContext } from 'react'
import Cart from '../components/profile/Cart'
import getProfileDetails from '../functionalities/getProfile';
import LoadingPage from './Loading';

function Profile() {
    const [profile, setProfile] = useState({});
    const {user} = useContext(Context);
  useEffect(() => {
    const profileDetails = getProfileDetails(user);
    setProfile(profileDetails);
  }, [])
  


    return (
        <>
            <section className="profile px-24 mt-10">
      <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-16 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile?.fullName}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile?.email}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile?.phone ? profile.phone : "No Phone Number Available"}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile?.address ? profile.address : "No Address Available"}
                </dd>
            </div>
        </dl>
    </div>
</div>
    <Cart />
    </section>
        </>
    )
}

export default Profile