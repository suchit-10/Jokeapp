// src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jokes');
                setJokes(response.data);
            } catch (error) {
                console.error("Error fetching jokes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJokes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Joke App</h1>
            <ul>
                {jokes.map(joke => (
                    <li key={joke.id}>{joke.joke}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;