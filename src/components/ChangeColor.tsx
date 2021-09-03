import {useState} from 'react'
import {useAppDispatch } from '../app/hooks'
import {changeColor} from '../services/themeSlice'

const ChangeColor = () => {
  const [color, setColor] = useState('')
  const dispatch = useAppDispatch()

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />

      <button
        onClick={() => dispatch(changeColor(color))}>
          Change Color
      </button>
    </div>
  )
}

export default ChangeColor
