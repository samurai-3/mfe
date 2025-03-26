import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
    const API_KEY = 'your-hardcoded-api-key';
const ANOTHER_API_KEY = 'another-hardcoded-api-key';
    
    const [cookieValue, setCookieValue] = useState('');

  // Set a cookie on component mount
  useEffect(() => {
    // Set a cookie named 'userSession' with a 7-day expiration
    Cookies.set('userSession', 'sessionData123', { expires: 7 });

    // Retrieve and set the cookie value to the state
    const cookieData = Cookies.get('userSession');
    setCookieValue(cookieData);
    
    // Log the API keys (just as an example, not recommended for production)
    console.log('API Key 1:', API_KEY);
    console.log('API Key 2:', ANOTHER_API_KEY);
  }, []);
    
    return (
        <div>
            <MarketingApp />
        </div>
    )
}

export default App;
