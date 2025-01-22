import React, { useEffect, useState } from 'react'
import Cart from '../components/profile/Cart'
import getProfileDetails from '../functionalities/getProfile';
import LoadingPage from './Loading';
import ProfileDetails from '../components/profile/ProfileDetails';
import Avatar from '../components/profile/Avatar';

function Profile() {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const loadProfile = async () => {
            const profileDetails = await getProfileDetails();
            console.log(profileDetails);
            setProfile(profileDetails);
        }
        loadProfile();
    }, []) 
    return (
        <>
            <section className="profile px-24 mt-10 w-full">
                <div className='flex flex-row gap-4'>
                <Avatar />
                <ProfileDetails profile={profile} />
                </div>
            </section>
        </>
    )
}

export default Profile