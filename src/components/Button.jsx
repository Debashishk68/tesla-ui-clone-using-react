

const Button = ({value,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${className} w-[270px] font-semibold rounded-[4px]`}>{value}</button>
  )
}

export default Button