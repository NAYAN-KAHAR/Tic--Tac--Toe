
const Square = ({value,onClick}) => {

  return (
    <div onClick={onClick} className="square">
        {value}
      </div>

  );
};

export default Square;
