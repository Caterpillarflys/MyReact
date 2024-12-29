function Son(props) {
  const divStyle = {
    border: "1px solid blue",
    width: "100px",
    height: "100px",
    margin: "20px",
  };

  return (
    <div style={divStyle}>
      子：{props.name}
      <button onClick={() => props.setSonName("子传父")}>子传父</button>
    </div>
  );
}

export default Son;
