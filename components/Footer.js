import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div> 

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibilty</p>
            <p>Disaster Relief</p>
            <p>Donate </p>
            <p>Charity Projects</p>
        </div> 

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Try Hosting</p>
            <p>AirCover for Hosts</p>
            <p>Explore Hosting Resources</p>
            <p>How to Host Responsibly</p>
            <p>Forum</p>
        </div> 

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>AirCover</p>
            <p>Support Disabled People</p>
            <p>Cancellation Options</p>
            <p>Report Concerns</p>
        </div> 

    </div>
  )


}

export default Footer