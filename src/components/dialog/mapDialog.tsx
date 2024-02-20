import {Dialog} from '@rneui/themed';
import React, {useState} from 'react';
import MapLocation from '../map/mapLocation/mapLocation';
import LocationModel from '../../models/locationModel';

interface MapDialogProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  onSave: (location: any) => void;
  initialLocation: LocationModel;
}

const MapDialog = ({
  title,
  visible,
  onClose,
  onSave,
  initialLocation,
}: MapDialogProps) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationModel>(initialLocation);

  const handleSave = () => {
    onSave(selectedLocation);
    onClose();
  };

  return (
    <Dialog
      isVisible={visible}
      onDismiss={onClose}
      overlayStyle={{width: '80%', height: '80%'}}>
      <Dialog.Title>{title}</Dialog.Title>
      <MapLocation
        initialLocation={initialLocation}
        onLocationChange={setSelectedLocation}
      />
      <Dialog.Actions>
        <Dialog.Button onPress={handleSave}>Save</Dialog.Button>
        <Dialog.Button onPress={onClose}>Cancel</Dialog.Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default MapDialog;
