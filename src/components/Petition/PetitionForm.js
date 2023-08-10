import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const PetitionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const db = initializeApp.firestore();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const petitionsRef = db.collection('petitions');
      await petitionsRef.add({
        title,
        description,
        votes: 0,
        created_at: initializeApp.firestore.FieldValue.serverTimestamp(),
      });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Створення Петиції</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок петиції"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Опис петиції"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Створити петицію</button>
      </form>
    </div>
  );
};

export default PetitionForm;
