import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Selectform from './select'; 
import './formulaire.css';
import React, { useEffect, useState } from 'react';

function FORMinput() {
  const [taches, setTaches] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [referentiel, setReferentiel] = useState('');

  const ajouterTache = () => {
    const nouvelleTache = { nom, prenom, referentiel };
    setTaches([...taches, nouvelleTache]);
    setNom('');
    setPrenom('');
    setReferentiel('');
  };
  useEffect (() => {
    console.log("Noms mis à jour:", taches);
  }, [taches]);
  

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleReferentielChange = (e) => {
    setReferentiel(e.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNom">
        <Form.Label>Nom</Form.Label>
        <Form.Control value={nom} onChange={handleNomChange} type="text" placeholder="Entrer votre nom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrenom">
        <Form.Label>Prénom</Form.Label>
        <Form.Control value={prenom} onChange={handlePrenomChange} type="text" placeholder="Entrer votre prénom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicReferentiel">
        <Form.Label>Formation</Form.Label>
        <Selectform value={referentiel} onChange={handleReferentielChange} />
      </Form.Group>

      <Button variant="primary" type="button" className="button" onClick={ajouterTache}>
        Submit
      </Button>
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>
            {tache.nom} {tache.prenom} - {tache.referentiel}
          </li>
        ))}
      </ul>
    </Form>
  );
}

export default FORMinput;
