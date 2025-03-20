import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
    const [count, setCount] = useState(0);

    // Incorrectly using useEffect (infinite loop risk)
    useEffect(() => {
        setCount(count + 1);
    });

    // Incorrect event handler binding in render
    const handleClick = () => {
        alert('Count is: ' + count);
    };
    return (
        <div>
            <MarketingApp />
        </div>
    )
}

export default App;
