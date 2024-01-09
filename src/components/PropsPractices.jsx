const PropsPratices = ({ value }) => {
  console.log("parent", value);
  return (
    <div>
      <button style={{ padding: "10px" }}>{value}</button>
    </div>
  );
};

export default PropsPratices;
