import BannerIntroduction from './components/header/banner_introduction';
import CountdownTimer from './components/articles/countdown/countdown_timer'
import './scss/index.scss'

function App() {
  const THREE_DAYS_IN_MS = 17 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="App">
      <BannerIntroduction />
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />

    </div>
  );
}

export default App;
