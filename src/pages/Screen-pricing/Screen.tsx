import { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenPricing() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '64px',
        backgroundColor: theme?.sys?.surface ?? '#ffffff',
        color: theme?.sys?.onSurface ?? '#0f172a',
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Pricing</h1>
      <p style={{ fontSize: '14px', lineHeight: '20px' }}>Third screen — a good candidate to delete during acceptance.</p>
      <button
        style={{
          padding: '12px 20px',
          backgroundColor: theme?.sys?.primary ?? '#3b82f6',
          color: theme?.sys?.onPrimary ?? '#ffffff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        Choose a plan
      </button>
    </div>
  );
}
