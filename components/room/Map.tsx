"use client"

import React, {useEffect} from "react";
//import {Loader} from "@googlemaps/js-api-loader";

export function Map(){
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async() => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version:"weekly"
            });

            const {Map} = await loader.importLibrary('maps');

            const position = {
                lat: 43.642693,
                lng: -79.3871189
            }
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;
            //const { google } = await loader.load();

            const mapOptions : google.maps.MapOptions = {
                center:position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                map: map,
                position: position
            });
        }

        initMap();
    }, []);

    return(
        <div style={{height: '600px'}} ref={mapRef} />
    );
}

/*
"use client"

import React, {useEffect} from "react";
import {Loader} from "@googlemaps/js-api-loader";

interface MapProps {
    coordinates: { lat: number; lng: number };
}

export function Map({ coordinates }: MapProps){
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async() => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version:"weekly"
            });

            const {Map} = await loader.importLibrary('maps');

            const position = {
                lat: coordinates.lat,
                lng: coordinates.lng,
            }
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;
            //const { google } = await loader.load();

            const mapOptions : google.maps.MapOptions = {
                center:position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                map: map,
                position: position
            });
        }

        initMap();
    }, []);

    return(
        <div style={{height: '600px'}} ref={mapRef} />
    );
}
*/
