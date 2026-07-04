import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const countries = [
  '🇺🇸 United States',
  '🇩🇪 Germany',
  '🇨🇦 Canada',
  '🇬🇧 United Kingdom',
  '🇫🇷 France',
  '🇯🇵 Japan',
  '🇸🇪 Sweden',
  '🇮🇳 India',
  '🇧🇷 Brazil',
  '🇦🇺 Australia',
  '🇨🇭 Switzerland',
  '🇳🇴 Norway',
  '🇳🇱 Netherlands',
  '🇪🇸 Spain',
  '🇮🇹 Italy',
  '🇰🇷 South Korea',
  '🇨🇳 China',
  '🇲🇽 Mexico',
  '🇿🇦 South Africa',
  '🇸🇬 Singapore',
  '🇩🇰 Denmark',
  '🇧🇪 Belgium',
  '🇦🇹 Austria',
  '🇮🇱 Israel',
  '🇸🇦 Saudi Arabia',
  '🇱🇹 Lithuania',
  '🇱🇻 Latvia',
  '🇪🇪 Estonia',
];

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
  const GROQ_MODEL = 'llama-3.3-70b-versatile';

const AiHealth = () => {
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!country1 || !country2 || country1 === country2) return;

    const prompt = `Compare the healthcare systems of ${country1} and ${country2} using the following structure:

1. Provide a **summary table** comparing key elements such as:
   - Healthcare model (public, private, mixed)
   - Primary funding source
   - Universal coverage (yes/no)
   - Average healthcare expenditure per capita
   - Wait times for services
   - Access to specialists
   - Patient satisfaction

2. Then list **key differences and similarities** in bullet points:
   - Highlight advantages and disadvantages of each system
   - Mention accessibility, quality, and affordability

Use **Markdown format** with a clear table and bullet points.`;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      const aiContent = data.choices?.[0]?.message?.content || 'No response from AI.';
      setResponse(aiContent);
    } catch (err) {
      setResponse('An error occurred while fetching the comparison.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const dropdownStyle = {
    flex: 1,
    padding: '0.5rem 0.75rem',
    borderRadius: '0.75rem',
    backgroundColor: '#FFFFFF',
    border: '1px solid #5C8C85',
    color: '#03353E',
    fontSize: '0.875rem',
    outline: 'none',
    boxShadow: '0 0 0 2px transparent',
    transition: 'box-shadow 0.2s ease-in-out',
  };

  return (
    <div
      className="flex flex-col h-full space-y-4"
      style={{ backgroundColor: '#F1E8DB', padding: '1rem', borderRadius: '1rem' }}
    >
      <div
        style={{ color: '#5C8C85', fontWeight: 'bold', fontSize: '1.125rem' }}
      >
        Compare Healthcare Systems
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={country1}
          onChange={e => setCountry1(e.target.value)}
          style={dropdownStyle}
          onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 2px #D1835A'}
          onBlur={e => e.currentTarget.style.boxShadow = '0 0 0 2px transparent'}
        >
          <option value="">Select Country 1</option>
          {countries.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={country2}
          onChange={e => setCountry2(e.target.value)}
          style={dropdownStyle}
          onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 2px #D1835A'}
          onBlur={e => e.currentTarget.style.boxShadow = '0 0 0 2px transparent'}
        >
          <option value="">Select Country 2</option>
          {countries.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button
  onClick={handleCompare}
  disabled={!country1 || !country2 || country1 === country2 || loading}
  style={{
    width: '100%',
    backgroundColor: '#D1835A',
    color: '#FFFFFF',
    padding: '0.5rem',
    borderRadius: '0.75rem',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    opacity: !country1 || !country2 || country1 === country2 || loading ? 0.5 : 1,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    outline: 'none',
    boxShadow: 'none',
  }}
  onMouseEnter={e => {
    if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#c6734e';
  }}
  onMouseLeave={e => {
    if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#D1835A';
  }}
  onFocus={e => {
    e.currentTarget.style.outline = 'none';
    e.currentTarget.style.boxShadow = 'none';
  }}
>
  {loading ? 'Comparing...' : 'Compare'}
</button>

      <div
        className="flex-1 overflow-y-auto max-h-[500px] pt-4 text-sm"
        style={{
          borderTop: '1px solid #D1835A',
          color: '#5E8E87',
        }}
      >
        {response && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#5C8C85' }} {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5C8C85' }} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#5C8C85' }} {...props} />
              ),
              p: ({ node, ...props }) => (
                <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem', color: '#5E8E87' }} {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', color: '#5E8E87' }} {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', color: '#5E8E87' }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <li style={{ marginBottom: '0.25rem' }}>{props.children}</li>
              ),
              table: ({ children }) => (
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.875rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  {children}
                </table>
              ),
              thead: ({ children }) => (
                <thead style={{ backgroundColor: '#5C8C85', color: '#FFFFFF' }}>{children}</thead>
              ),
              th: ({ children }) => (
                <th
                  style={{
                    padding: '0.5rem',
                    border: '1px solid #D1835A',
                    fontWeight: '600',
                    textAlign: 'left',
                  }}
                >
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td
                  style={{
                    padding: '0.5rem',
                    border: '1px solid #D1835A',
                    textAlign: 'left',
                    verticalAlign: 'top',
                  }}
                >
                  {children}
                </td>
              ),
              tr: ({ children }) => (
                <tr style={{ backgroundColor: '#FFFFFF' }}>{children}</tr>
              ),
            }}
          >
            {response}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default AiHealth;