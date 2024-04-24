export default function StyledBasic() {
  return( 
    <>
      <style jsx>{`
        .panel {
          width: 300px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: royalblue;
          color: white;
        }

        :global(h3) {
          color: red;
        }
      `}</style>
      <h3>Styled JSX</h3>
      <div className="panel"><b>Styled JSX</b>は、JSX式にスタイル定義</div>
    </>
  );
}