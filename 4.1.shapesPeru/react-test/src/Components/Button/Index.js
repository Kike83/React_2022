const Button = props => {
    const { color = 'primary', text = 'Soy un botón' } = props
    return <button className={`btn btn-${color}`}>{text}</button>
}




export default Button



/*

Esto en App.js


-> hasta arriba como import

import Button from './Components/Button/Index';


-> antes del return

const buttons = [
    {
      text: 'Botón 1',
      color: 'primary'
    },
    {
      text: 'Botón 2',
      color: "secondary"
    },
    {
      text: 'Botón 3',
      color: "success"
    },
    {
      text: 'Botón 4',
      color: "danger"
    },
    {
      text: 'Botón 5',
      color: "warning"
    }
  ]



-> después del return


<div className='d-flex justify-content-between w-50 mt-3 mx-auto'>
        {buttons
          //.filter(button => button.color !== 'primary')
          .map((button, index) => {
            return <Button text={button.text} color={button.color} />
          })}

      </div>
      



<Button text='Atras' color='danger' />
<Button text='Siguiente' color='success'/>
<Button />





*/