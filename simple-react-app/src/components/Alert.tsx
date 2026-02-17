interface Props {
  readonly children: React.ReactNode;
  readonly onDismiss?: () => void;
}

function Alert({ children, onDismiss }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onDismiss}
      ></button>
    </div>
  );
}

export default Alert;
