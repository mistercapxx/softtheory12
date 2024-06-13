import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  // incrementAsync,
  // incrementIfOdd,
  selectCount,
} from './counterSlice';
// import styles from './Counter.module.css';

export function Counter() {
   // Извлечение состояния counter с использованием селектора

   ///Этот хук используется для доступа к состоянию counter. Он берет состояние из store и использует селектор selectCount для получения конкретного значения value из counter.///
   ///Редюсеры в counterSlice обрабатывают действия и обновляют состояние counter.
   ///useSelector следит за изменениями состояния и обновляет компонент, когда значение count изменяется.//
  const count = useSelector(selectCount);

  ///Этот хук возвращает функцию dispatch, которую мы используем для отправки действий в store. Действия определены в counterSlice.///

  ///Когда пользователь нажимает на кнопку, соответствующее действие отправляется в store с помощью dispatch.///
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        {/* /// Извлечение состояния counter с использованием селектора/// */}
        <span>{count}</span>
        <button
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input ////простой инпут с начальным состоянием и юзаем сет если вводим в поле чтото
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
       ///Это означает, что когда действие incrementByAmount отправляется в Redux store, он передает в редюсер значение incrementValue в качестве payload (полезной нагрузки) этого действия. В данном случае payload содержит значение, введенное пользователем в поле ввода incrementAmount.///
          onClick={() => dispatch(incrementByAmount(incrementValue))}


        ///incrementValue - это число, которое будет добавлено к счетчику.//
        >
          Add Amount
        </button>
        {/* <button */}
{/*     
          // onClick={() => dispatch(incrementAsync(incrementValue))}
        // >
        //   Add Async
        // </button>
        // <button */}
 
          {/* // onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button> */} 
      </div>
    </div>
  );
}
