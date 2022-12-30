import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe("Header functionality", () => {
  test('Displays header', () => {
    const count = 0;
    render(<Routes>
      <Route exact path="/" element={() => (
        <Header basketCount={count} />
      )} />
    </Routes>);
    expect(document.querySelectorAll("a").length).toBeGreaterThanOrEqual(3);
  });
});