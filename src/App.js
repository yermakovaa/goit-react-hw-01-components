import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </Container>
  );
}

export default App;
