const List = ({listFunction}) => {

  return(
    <div key={item.id}>
      {listFunction.title}{listFunction.content}

    </div>
  )
}
export default List;