import { people } from './Data.js';
import { getImageUrl } from './Gallery';

function maping(Chemistpeople){
  return (
    Chemistpeople.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    )
  )
}

export default function List() {
  const Chemistpeople = people.filter(people => people.profession === 'chemist');
  const EveryoneElse = people.filter(people => people.profession !== 'chemist');
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{maping(Chemistpeople)}</ul>
      <h1>Everyone Else </h1>
      <ul>{maping(EveryoneElse)}</ul>
    </article>
  );
}
