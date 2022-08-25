import Home from './view/home';
import Header from './components/header';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <Header />
      <Home />
    </div>
  );
}
