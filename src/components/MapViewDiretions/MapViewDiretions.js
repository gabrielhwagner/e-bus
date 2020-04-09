import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_KEY } from '~/utils';

export default function MapViewDiretions(props) {
  let waypoints;
  if (props.waypoints) {
    waypoints = props.waypoints.map(local => {
      return local.coordinates;
    });
  } else {
    waypoints = [];
  }
  return (
    <MapViewDirections
      origin={props.origin}
      waypoints={waypoints}
      destination={props.destination.coordinates}
      apikey={GOOGLE_KEY}
      strokeWidth={3}
      strokeColor={'#222'}
      precision={'high'}
      resetOnChange={false}
      optimizeWaypoints={props.optimizeWaypoints}
      onStart={call => props.onStart(call)}
      onReady={result => props.onReady(result)}
    />
  );
}
