import { useState } from 'react'
import Button from './Button'

function Calculator() {
    const [operation, setOperation]=useState('')
    const [label, setLabel]=useState('')
    const [result, setResult]=useState(0)

    function handleClick(label){
        setOperation(opr =>opr.concat(label))
        setLabel(label)
    }
    function deleteOpr(){
        setOperation(opr=>opr.slice(0,-1))
    }
    function calculate(){
        setResult(eval(operation))

    }
    function clear(){
        setOperation('')
        setResult(0)
    }
  return (
    <div>
        <div className="relative w-96 h-36 bg-slate-700">
            <div className='absolute top-8 right-8 text-4xl text-yellow-500'>{result}</div>
            <div className='absolute bottom-4 left-4 text-xl text-white'>{operation}</div>
        </div>
        <table className='bg-slate-800 text-white w-full text-center'>
        <tr>
            <td className='bg-red-700'><Button label='DEL' delete={deleteOpr}/></td>
            <td><Button label='C' clear={clear}/></td>
            <td><Button label='(' write={(label)=>handleClick(label)}/></td>
            <td><Button label=')'  write={(label)=>handleClick(label)}/></td>
            
        </tr>
        <tr>
            <td><Button label='7'  write={(label)=>handleClick(label)}/></td>
            <td><Button label='8'  write={(label)=>handleClick(label)}/></td>
            <td><Button label='9'  write={(label)=>handleClick(label)}/></td>
            <td className='oprationBtn'><Button label={'-'}  write={(label)=>handleClick(label)}/></td>
        </tr>
        <tr>
            <td><Button label='4'  write={(label)=>handleClick(label)}/></td>
            <td><Button label='5'  write={(label)=>handleClick(label)}/></td>
            <td><Button label='6'  write={(label)=>handleClick(label)}/></td>
            <td className='oprationBtn'><Button label='*'  write={(label)=>handleClick(label)}/></td>
        </tr>
        <tr>
            <td><Button label='1'  write={(label)=>handleClick(label)}/></td>
            <td><Button label='2'  write={(label)=>handleClick(label)}/></td>
            <td><Button label='3'  write={(label)=>handleClick(label)}/></td>
            <td className='oprationBtn'><Button label='/'  write={(label)=>handleClick(label)}/></td>
        </tr>
        
        <tr>
            <td><Button label={'0'}  write={(label)=>handleClick(label)}/></td>
            <td><Button label={'.'}  write={(label)=>handleClick(label)}/></td>
            <td className=' bg-green-600'><Button label={'='} result={calculate}/></td>
            <td className='oprationBtn'><Button label={'+'}  write={(label)=>handleClick(label)}/></td>
            
        </tr>
        

    </table>
    </div>
  )
}

export default Calculator