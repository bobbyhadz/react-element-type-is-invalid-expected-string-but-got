import './App.css';

import Header from './Header';

// 👇️ Is now a function
const Button = () => {
  return <button>Click</button>;
};

export default function App() {
  return (
    <div>
      <Header />
      <Button />
      <h1>hello world</h1>
    </div>
  );
}
