function LoadMore({ onClick, isVisible }) {
  if (!isVisible) return null;

  return (
    <button onClick={onClick} style={{ marginTop: "30px" }}>
      Load more
    </button>
  );
}

export default LoadMore;
