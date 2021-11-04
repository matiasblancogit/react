import React from 'react';

const List = ({ heroes }) => {
  return (
    <>
      {heroes.map((heroe) => {
        const { id, localized_name, attack_type, img } = heroe;
        return (
          <article key={id} className='heroe'>
            <img src={"https://api.opendota.com"+img} alt={localized_name} />
            <div>
              <h4>{localized_name}</h4>
              <p> Ataque : {attack_type}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;