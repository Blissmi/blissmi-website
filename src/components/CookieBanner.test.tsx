import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CookieBanner } from './CookieBanner';
import { CONSENT_KEY } from '../analytics/consent';

describe('CookieBanner', () => {
  beforeEach(() => {
    localStorage.clear();
    window.gtag = vi.fn();
    window.__blissmiInitApollo = vi.fn();
    window.__blissmiApolloStarted = false;
  });

  it('shows when the visitor has not decided yet', async () => {
    render(<CookieBanner onNavigate={() => {}} />);
    expect(await screen.findByRole('dialog', { name: /cookie consent/i })).toBeTruthy();
  });

  it('stays hidden once a decision is stored', () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    render(<CookieBanner onNavigate={() => {}} />);
    expect(screen.queryByRole('dialog', { name: /cookie consent/i })).toBeNull();
  });

  it('grants analytics and starts Apollo on Accept', async () => {
    render(<CookieBanner onNavigate={() => {}} />);
    await userEvent.click(await screen.findByRole('button', { name: /accept/i }));

    expect(localStorage.getItem(CONSENT_KEY)).toBe('granted');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update',
      expect.objectContaining({ analytics_storage: 'granted' }));
    expect(window.__blissmiInitApollo).toHaveBeenCalled();
  });

  it('leaves analytics denied and never starts Apollo on Decline', async () => {
    render(<CookieBanner onNavigate={() => {}} />);
    await userEvent.click(await screen.findByRole('button', { name: /decline/i }));

    expect(localStorage.getItem(CONSENT_KEY)).toBe('denied');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update',
      expect.objectContaining({ analytics_storage: 'denied' }));
    expect(window.__blissmiInitApollo).not.toHaveBeenCalled();
  });

  it('never grants advertising storage, even on Accept', async () => {
    render(<CookieBanner onNavigate={() => {}} />);
    await userEvent.click(await screen.findByRole('button', { name: /accept/i }));

    expect(window.gtag).toHaveBeenCalledWith('consent', 'update',
      expect.objectContaining({ ad_storage: 'denied' }));
  });
});
