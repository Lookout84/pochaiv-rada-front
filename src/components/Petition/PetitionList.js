import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const PetitionList = () => {
  const [petitions, setPetitions] = useState([]);
  const db = initializeApp.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection('petitions')
      .orderBy('created_at', 'desc')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPetitions(data);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Список петицій</h2>
      <ul>
        {petitions.map(petition => (
          <li key={petition.id}>
            <h3>{petition.title}</h3>
            <p>{petition.description}</p>
            <p>Кількість голосів: {petition.votes}</p>
            <button>Голосувати</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetitionList;
