import React, { useState } from 'react';

function ListeDeTaches() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = () => {
    setTaches([...taches, nouvelleTache]);
    setNouvelleTache('');
  };

  return (
    <div>
      <h1>Liste de Tâches</h1>
      <input
        type="text"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
      />
      <button onClick={ajouterTache}>Ajouter Tâche</button>
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeDeTaches;
