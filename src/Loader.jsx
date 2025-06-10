import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <Spinner animation="border" role="status" variant="secondary">
      <span className="mt-2 text-muted">Chargement...</span>
    </Spinner>
  </div>
);

