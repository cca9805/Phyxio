import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DynamicPage from './DynamicPage';
import { topicsData } from '../data/topics.generated';

describe('DynamicPage - Root Integration', () => {
  it('should render root page content when at "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DynamicPage />
      </MemoryRouter>
    );

    // Check if root topic content is rendered
    const rootTopic = topicsData[""];
    expect(screen.getByText(rootTopic.title)).toBeInTheDocument();
    expect(screen.getByText(rootTopic.intro)).toBeInTheDocument();
  });

  it('should render Física Clásica and Moderna cards on root page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DynamicPage />
      </MemoryRouter>
    );

    // Check for the main physics cards
    expect(screen.getByText('Física Clásica')).toBeInTheDocument();
    expect(screen.getByText('Física Moderna')).toBeInTheDocument();
    
    // Check for card descriptions
    expect(screen.getByText(/Mecánica, Termodinámica, Óptica/)).toBeInTheDocument();
    expect(screen.getByText(/Relatividad, Cuántica, Física de partículas/)).toBeInTheDocument();
  });

  it('should render comparison section on root page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DynamicPage />
      </MemoryRouter>
    );

    // Check for comparison content
    expect(screen.getByText('¿En qué se diferencian?')).toBeInTheDocument();
    expect(screen.getByText(/Objetos grandes y velocidades bajas/)).toBeInTheDocument();
    expect(screen.getByText(/Partículas subatómicas y altas velocidades/)).toBeInTheDocument();
  });

  it('should have correct navigation links on root page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DynamicPage />
      </MemoryRouter>
    );

    // Check for navigation links
    const links = screen.getAllByRole('link', { name: /explorar/i });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/clasica');
    expect(links[1]).toHaveAttribute('href', '/moderna');
  });

  it('should not show breadcrumbs on root page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DynamicPage />
      </MemoryRouter>
    );

    // Breadcrumbs should not be present on root page
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should detect root page type correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DynamicPage />
      </MemoryRouter>
    );

    // Should render root content, not error page
    expect(screen.queryByText('Página no encontrada')).not.toBeInTheDocument();
    expect(screen.getByText('¿Qué es la Física?')).toBeInTheDocument();
  });
});