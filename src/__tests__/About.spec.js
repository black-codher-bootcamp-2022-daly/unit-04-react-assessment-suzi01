import React from 'react';
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import About from '../pages/About';

// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

describe("Components load as expected", () => {
  test('About page content', () => {
    const history = createMemoryHistory();
    const navigate = useNavigate()
    navigate('/about')
    // history.push('/about');

    render(
      <Router history={navigate}>
        <About />
      </Router>,
    );
  
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});