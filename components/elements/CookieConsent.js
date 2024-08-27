'use client'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  const declineCookies = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        We use cookies to ensure you get the best experience on our website. By continuing, you agree to our cookie policy.
      </p>
      <div style={styles.buttonContainer}>
        <button onClick={declineCookies} style={styles.declineButton}>
          Decline
        </button>
        <button onClick={acceptCookies} style={styles.acceptButton}>
          Accept
        </button>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    zIndex: 1000,
  },
  text: {
    margin: 0,
    padding: '10px',
    fontSize: '14px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  declineButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CookieConsent;
