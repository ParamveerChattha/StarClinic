const patientTable = (patientDetails) => {
  return (
    <>
      {patientDetails?.map((details) => {
        return <h1> {details.name}</h1>;
      })}
    </>
  );
};
