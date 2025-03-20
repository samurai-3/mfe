import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
    const [count, setCount] = useState();
    return (
        <div>
            <MarketingApp />
        </div>
    )
}

export default App;
