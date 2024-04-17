import Constants from 'expo-constants';
const GEMINI_KEY = Constants?.expoConfig?.extra?.GEMINI_KEY;
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

export const queryAI = async (query) => {
    try {
        console.log(query)
        const url = `${GEMINI_URL}?key=${GEMINI_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: query
                    }]
                }]
            })
        })

        const data = await response.json();
        console.log(data)
        console.log(data.candidates[0].content)
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        return text;
    } catch (error) {
        console.error('Error querying AI:', error);
        return null;
    }
};