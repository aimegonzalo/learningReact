export const Square = ({children, updateBoard, index,}) =>{
  const handleClick = () =>{
    updateBoard(index);
  }
  return (
    <div onClick={handleClick} className="w-16 h-14 border rounded-xl border-white flex justify-center text-5xl">
    {children}
    </div>
  )
}


