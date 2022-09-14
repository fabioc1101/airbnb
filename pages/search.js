import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import {format} from 'date-fns'
import InfoCard from '../components/InfoCard'
import searchResults from '../files/searchResults.JSON'




function Search() {
    const router = useRouter();

  //ES6 destructuring
    const { location, startDate, endDate, noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), "MM/dd/yy");
    const formattedEndDate = format(new Date(endDate), "MM/dd/yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;



    return (
    <div>
        <Header
             placeholder= {`${location} | ${formattedStartDate}| ${formattedEndDate} | ${noOfGuests} guests `}
        />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs '>500+ Stays - {range} - {noOfGuests} guests</p>

                    <h1 className='text-3xl font-semibold mb-6 mt-2'>Stays in {location}</h1>

                    <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibilty</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(({ key, img, description, location, star, price, total, title, long, lat }) => (
                            <InfoCard 
                                key={key}
                                img= {img}
                                location = {location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                                long={long}
                                lat={lat}
                            />
                        ))}
                    </div>
                    
                </section>
            </main>

        <Footer />
    </div>
  )
}

export default Search;

// export async function getServerSideProps(){
//     const searchResults = await (await fetch ("https://links.papareact.com/isz")).then(res => res.json());
    
//     return{
//         props: {
//             searchResults,
//         }
//     }

// }