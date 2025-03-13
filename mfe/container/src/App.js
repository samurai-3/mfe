import React, {useState, useEffect} from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userId) return;

        setLoading(true);
        fetch(`https://api.example.com/user/${userId}`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.log('Failed to fetch user data:', error))
            .finally(() => setLoading(false));
    }, [userId]);

    if (loading) return <p>Loading user data...</p>;
    if (!userData) return <p>No user data available.</p>;
    
    return (
        <div>
            <MarketingApp />
        </div>
    )
}

export default App;
