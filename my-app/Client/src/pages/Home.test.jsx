// src/pages/Home.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from './Home';

// Mock the Link component
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Link: ({ children, to, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  };
});

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home Component', () => {
  beforeEach(() => {
    renderWithRouter(<Home />);
  });

  it('renders Home component without crashing', () => {
    const element = screen.getByText('Welcome to My Portfolio');
    expect(element).toBeTruthy();
  });

  it('displays welcome message and introduction', () => {
    // Use getAllByText for elements that appear multiple times
    const welcomeElements = screen.getAllByText(/Welcome to My Portfolio/i);
    expect(welcomeElements.length).toBeGreaterThan(0);
    
    // Also use getAllByText for the intro text
    const introElements = screen.getAllByText(/Hi, I'm Ameesha!/i);
    expect(introElements.length).toBeGreaterThan(0);
  });

  it('has all navigation buttons', () => {
    const buttons = ['About Me', 'View Projects', 'Contact Me', 'Join My Network'];
    buttons.forEach(button => {
      const buttonElements = screen.getAllByText(button);
      expect(buttonElements.length).toBeGreaterThan(0);
    });
  });
});