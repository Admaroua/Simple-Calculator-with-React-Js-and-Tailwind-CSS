
import PropTypes from 'prop-types';
function Button(props) {
  function handleClick(){
    if(props.write){
      props.write(props.label)
    }else if(props.delete){
      props.delete()
    }else if(props.result){
      props.result()
    }else if(props.clear){
      props.clear()
    }
  }
  return (
    <div className="w-full h-full cursor-pointer" onClick={handleClick}>{props.label}</div>
  )
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  write:PropTypes.func,
  delete:PropTypes.func,
  result:PropTypes.func,
  clear:PropTypes.func



};
export default Button