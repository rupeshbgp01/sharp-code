import React from 'react'
import TestinomialCard from './TestinomialCard'
import "./Testinomial.css"


export default function Testinomial() {
  return (
    <div>
      <h1 className="ourcourses">TESTINOMIALS</h1>
      <div className='testinomial__main__container'>
        <div className="scroll_infinite">

          <div className="card1">
            <TestinomialCard
              name="Anuj Dubey"
              degination="Senior Manager"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
              linkedin="https://www.linkedin.com/in/rupeshkumar2001/"
            />
          </div>

          <div className="card1">
          <TestinomialCard
              name="Aditya Sharma"
              degination="Manager"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
              linkedin="https://www.linkedin.com/in/rupeshkumar2001/"
            />
          </div>

          <div className="card1">
          <TestinomialCard
              name="Keshav Arora"
              degination="Senior Manager"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
              linkedin="https://www.linkedin.com/in/rupeshkumar2001/"
            />
          </div>

          <div className="card1">
          <TestinomialCard
              name="Anuj Dubey"
              degination="Senior Manager"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
              linkedin="https://www.linkedin.com/in/rupeshkumar2001/"
            />
          </div>

        </div>
      </div>
    </div>

  )
}
