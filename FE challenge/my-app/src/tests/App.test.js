import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';
test('renders home links', () => {
  const { getByText } = render(<App />);
  const homeLink = getByText(/home/i);  
  expect(homeLink).toBeInTheDocument();
});
test('renders beers links', () => {
    const { getByText } = render(<App />);
    const beersLink = getByText(/beers/i);
    expect(beersLink).toBeInTheDocument();
  });
  test('renders contact links', () => {
    const { getByText } = render(<App />);
    const contactLink = getByText(/contact/i);
    expect(contactLink).toBeInTheDocument();
  });
test('renders image text', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/GREAT IPA/i);
  expect(heading).toBeInTheDocument();
});
test('renders image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/some hops is plowed/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders centered image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Buzz/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders centered image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/the earthy and floral/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Trashy Blond/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Be careful not to collect/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders centered image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Berliner Weisse With Yuzu - B-Sides/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders centered image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Clean everything twice/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Pilsen Lager/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Play around with/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Avery Brown Dredge/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Make sure you have/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Electric India/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Source some really/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/AB:12/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Don't Worry too much/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Fake Lager/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Once the primary fermentation/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/AB:07/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Authentic heather honey/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Bramling X/i);
    expect(heading).toBeInTheDocument();
  });
  test('renders small image text', () => {
    const { getByText } = render(<App />);
    const paragraph = getByText(/Getting good Bramling/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('renders last bottom border text', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Copyright Foolproof 2019/i);
    expect(heading).toBeInTheDocument();
  });








