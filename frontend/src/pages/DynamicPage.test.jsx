import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DynamicPage from './DynamicPage';

const RedirectTarget = () => <div>v2 page</div>;

function renderWithRouter(initialPath) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/*" element={<DynamicPage />} />
        <Route path="/v2" element={<RedirectTarget />} />
        <Route path="/v2/*" element={<RedirectTarget />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('DynamicPage - Redirect behavior', () => {
  it('redirects "/" to /v2', () => {
    renderWithRouter('/');
    expect(screen.getByText('v2 page')).toBeInTheDocument();
  });

  it('redirects "/fisica" to /v2', () => {
    renderWithRouter('/fisica');
    expect(screen.getByText('v2 page')).toBeInTheDocument();
  });

  it('redirects any other path to /v2', () => {
    renderWithRouter('/some-topic');
    expect(screen.getByText('v2 page')).toBeInTheDocument();
  });

  it('does not render old v1 root content', () => {
    renderWithRouter('/');
    expect(screen.queryByText('Física Clásica')).not.toBeInTheDocument();
    expect(screen.queryByText('Física Moderna')).not.toBeInTheDocument();
  });

  it('does not show "Página no encontrada"', () => {
    renderWithRouter('/');
    expect(screen.queryByText('Página no encontrada')).not.toBeInTheDocument();
  });

  it('does not render breadcrumb navigation', () => {
    renderWithRouter('/');
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});
