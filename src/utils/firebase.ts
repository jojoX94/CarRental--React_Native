import firestore from '@react-native-firebase/firestore';

const addDefaultFields = {
  toFirestore: (docData: any) => {
    // TODO: Add created_at and other fields
    return {
      created_at: firestore.FieldValue.serverTimestamp(),
      ...docData,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      ...data,
    };
  },
};

export default addDefaultFields;
