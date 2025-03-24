import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
    const [count, setCount] = useState;

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, []); 

  const increment = () => {
    setCount(count + 1);
  };
    return (
        <div>
            <MarketingApp />
        </div>
    )
}

export default App;
