import Card from './Card/Card';

function App() {
  const cards = [
    {
      id: 123,
      taste: 'с фуа-гра',
      portions: 10,
      present: 'Мышь',
      weight: '0,5',
      outOfStock: Math.random() > 0.5,
      description: 'Печень утки разварная с артишоками.',
    },
    {
      id: 456,
      taste: 'с рыбой',
      portions: 40,
      present: '2 мыши',
      weight: '2',
      outOfStock: Math.random() > 0.5,
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    {
      id: 789,
      taste: 'с курой',
      portions: 100,
      present: ' 5 мышей',
      weight: '10',
      outOfStock: Math.random() > 0.5,
      description: 'Филе из цыплят с трюфелями в бульоне.',
    },
  ];

  return (
    <div id="app">
      <h1>Ты сегодня покормил кота?</h1>
      <ul className="cards">
        {cards.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
