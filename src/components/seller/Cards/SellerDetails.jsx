import React, { useEffect, useState } from 'react';
import Cards from './Cards';

function SellerDetails() {
  const [stats, setStats] = useState({});
  useEffect(() => {
    const fetchStats = async () => {
      try {
        
        const dashboardUrl = import.meta.env.VITE_BACKEND + "dashboard";
        const data = await fetch(dashboardUrl, {
          credentials: 'include'
        });
        const stats = await data.json();
        console.log(stats.stats);
        
        setStats(stats.stats);
      } catch (error) {
        console.log("error at fetching stats : ", error);
      }
    }
    fetchStats()
  }, [])
  
  return (
    <div className='bg-white w-full min-h-screen flex flex-col  items-center'>
      <Cards data={stats}/>
    </div>
  );
}

export default SellerDetails;