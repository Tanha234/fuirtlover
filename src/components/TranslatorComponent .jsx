import { useState } from 'react';
import axios from 'axios';

const TranslatorComponent = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = 'AIzaSyCZTwQ7PI6dZHAVQQlDQW7DhVpfZzeTMKk';
  const apiUrl = 'https://translate.googleapis.com';
  const targetLanguage = 'bn'; // Bangla language code

  const translateText = async () => {
    setLoading(true);

    try {
      const response = await axios.post(apiUrl, {
        q: inputText,
        target: targetLanguage,
        key: apiKey,
      });

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      setError('Translation error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={translateText} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Translated Text: {translatedText}</p>
    </div>
  );
};

export default TranslatorComponent;
