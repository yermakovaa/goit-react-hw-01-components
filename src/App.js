import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';

function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
