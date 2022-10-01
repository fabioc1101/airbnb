import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import searchResults from '../files/searchResults.JSON'


function Map() {

    const [selectedLocation, setSelectedLocation] = useState({});
    //Transform the search result object into the {latitude: 45.634634, longitude: 45.674564}
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    console.log(coordinates)
    // end of transformation (forEach can't return value, which is why we used map)

    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });

    

 return (
    <div>
        <ReactMapGL
            mapStyle="mapbox://styles/fabiocattolico/cl881o5de000j14s1vzugutij"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={evt => setViewport(evt.viewport)}
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-0.2}
                        offsetTop={-0.1}
                    >
                        <p onClick={() => setSelectedLocation(result)} 
                            className='cursor-pointer text-2xl animate-bounce'
                            aria-label="push-pin"
                            role="img"
                        >
                            📌
                        </p>
                    </Marker>

                    {/* The pop up that should show when marker is clicked */}
                    {selectedLocation.long === result.long ? (
                        <Popup 
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitiude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>

    </div>
  )
}

export default Map