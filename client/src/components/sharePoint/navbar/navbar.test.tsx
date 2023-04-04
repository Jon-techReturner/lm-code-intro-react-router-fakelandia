import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './navbar';
import { HashRouter } from 'react-router-dom';

test('renders appropriate links when component is rendered', () => {
    render(<Navbar />, { wrapper: HashRouter }); 
    expect(screen.getByText(/Home/i)).toBeInTheDocument();    
    expect(screen.getByText(/Misdemeanours/i)).toBeInTheDocument();    
    expect(screen.getByText(/Confess to Us/i)).toBeInTheDocument();    
  });