//하위 컴포넌트
const Userrr = ({item, removeFunction}) => {
 

  return (
    <div key={item.id} className="component-style">
      {item.age}-{item.name}
      <button onClick={() => removeFunction(item.id)}>x</button>
    </div>
  );
};

export default Userrr;