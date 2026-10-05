import { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenAbout() {
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
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>About-test</h1>
      <p style={{ fontSize: '14px', lineHeight: '20px' }}>Sibling screen for multi-screen routing. Safe to edit and safe to delete.</p>
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
        Read more
      </button>
      {/* Registration Form Block */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          marginTop: '24px',
          padding: '24px',
          backgroundColor: theme?.sys?.surfaceVariant ?? '#f8fafc',
          borderRadius: '12px',
          border: `1px solid ${theme?.sys?.outlineVariant ?? '#e2e8f0'}`,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <h2 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>Registration</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: theme?.sys?.onSurfaceVariant ?? '#475569' }}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={{
                padding: '10px 12px',
                fontSize: '14px',
                border: `1px solid ${theme?.sys?.outline ?? '#cbd5e1'}`,
                borderRadius: '8px',
                backgroundColor: theme?.sys?.surface ?? '#ffffff',
                color: theme?.sys?.onSurface ?? '#0f172a',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: theme?.sys?.onSurfaceVariant ?? '#475569' }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '10px 12px',
                fontSize: '14px',
                border: `1px solid ${theme?.sys?.outline ?? '#cbd5e1'}`,
                borderRadius: '8px',
                backgroundColor: theme?.sys?.surface ?? '#ffffff',
                color: theme?.sys?.onSurface ?? '#0f172a',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: theme?.sys?.onSurfaceVariant ?? '#475569' }}>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              style={{
                padding: '10px 12px',
                fontSize: '14px',
                border: `1px solid ${theme?.sys?.outline ?? '#cbd5e1'}`,
                borderRadius: '8px',
                backgroundColor: theme?.sys?.surface ?? '#ffffff',
                color: theme?.sys?.onSurface ?? '#0f172a',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: theme?.sys?.onSurfaceVariant ?? '#475569' }}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              style={{
                padding: '10px 12px',
                fontSize: '14px',
                border: `1px solid ${theme?.sys?.outline ?? '#cbd5e1'}`,
                borderRadius: '8px',
                backgroundColor: theme?.sys?.surface ?? '#ffffff',
                color: theme?.sys?.onSurface ?? '#0f172a',
                outline: 'none',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: '8px',
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}