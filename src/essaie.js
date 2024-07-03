import './essaie.css';
import React, { useState, useEffect } from 'react';

const Ali = () => {
  const [noms, setNoms] = useState([]);
  const [nouveauNom, setNouveauNom] = useState('');
  const [nouveauPrenom, setNouveauPrenom] = useState('');
  const [nouveauReferentiel, setNouveauReferentiel] = useState('');

  const ajouterNoms = () => {
    setNoms([...noms, { nom: nouveauNom, prenom: nouveauPrenom, referentiel: nouveauReferentiel }]);
    setNouveauNom('');
    setNouveauPrenom('');
    setNouveauReferentiel('');
  };
  useEffect(() => {
    console.log("Noms mis à jour:", noms);
  }, [noms]);
  

  return (
    <div>
      <header>
        <div className="div1">
          <h2>Edoh241</h2>
        </div>
        <div className="div2">
          <div className="div21">
            <p>Accueil</p>
          </div>
          <div className="div22">
            <p>Apropos</p>
          </div>
          <div className="div23" style={{ marginRight: "10em" }}>
            <p>Contact</p>
          </div>
        </div>
      </header>
      <div className="section1">
        <h3>INSCRIVEZ-VOUS MAINTENANT!</h3>
        <label>
          NOM <br /><br />
          <input className='input'
            type="text"
            placeholder="votre NOM"
            value={nouveauNom}
            onChange={(e) => setNouveauNom(e.target.value)}
          />
        </label><br /><br />
        <label>
          PRENOM <br /><br />
          <input  className='input'
            type="text"
            placeholder="votre PRENOM"
            value={nouveauPrenom}
            onChange={(e) => setNouveauPrenom(e.target.value)}
          />
        </label><br /><br />
        <label>
          REFERENTIEL <br /><br />
          <select  className='input'
            name="REFERENTIEL"
            value={nouveauReferentiel}
            onChange={(e) => setNouveauReferentiel(e.target.value)}
          >
            <option value="" placeholder="votre referentiel"></option>
            <option value="Developpeur">Developpeur</option>
            <option value="Referent">Referent</option>
            <option value="Formateur">Formateur</option>
          </select>
        </label><br /><br /><br />
        <button onClick={ajouterNoms}>Valider</button>
        <ul>
          {noms.map((item, index) => (
            <li key={index}>
              {item.nom} - {item.prenom} - {item.referentiel}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ali;
