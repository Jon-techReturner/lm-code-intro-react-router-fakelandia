import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';

test('render footer and display text', () => {
    render(<Footer />);    
    expect(screen.getByText(/Created by: Jon Damaso © 2023/i)).toBeInTheDocument();    
  });