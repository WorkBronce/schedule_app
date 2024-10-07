import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import crossIcon from '../images/cross.png';
import './ContactLocation.css';

const ContactLocation = ({ address, onCancel }) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCSq9ZX4OXjHMY9PFeFm12Uc4cvYXU57nc',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Geocoding the address
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          new google.maps.marker.AdvancedMarkerElement({
            position: results[0].geometry.location,
            map,
            title: address,
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }, [address]);

  return (
    <div>
      <button className='backbutton' onClick={onCancel}>
        <img src={crossIcon} className='back' alt="back" />
      </button>
      <div className="Google-map" id="map" style={{ height: '50%', width: '80%', minHeight:'500px' }}></div>
    </div>
  );
};

export default ContactLocation;
