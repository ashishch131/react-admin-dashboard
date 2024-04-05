import "./widgetlg.css"

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={`lgBtn ${type} `}>{type} </button>
  }
  return (
    <div className="widgetLarge">
      <span className="lgTitle">Letest transactions</span>
 
        <ul className="lgTr" align="left">
          <li className="lgTh" >Costumer
          
          </li>
          <li className="lgTh">Date</li>
          <li className="lgTh">Amount</li>
          <li className="lgTh">Status</li>
        </ul>

        <ul className="lgUl" >
          <li className="lgDt" >
            <div className="lgProfile">
              <img className="lgImg" src="https://images.pexels.com/photos/1350606/pexels-photo-1350606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
            <span className="lgPrflName">Jane julia</span>
            </div>
            <span className="lgDate">27 Dec 2023</span>
            <span className="lgAmt">$154.00 </span>
          <Button type="Approved"/>
        </li>
        <li className="lgDt" >
            <div className="lgProfile">
              <img className="lgImg" src="https://images.pexels.com/photos/1350606/pexels-photo-1350606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
            <span className="lgPrflName">Jane julia</span>
            </div>
            <span className="lgDate">27 Dec 2023</span>
            <span className="lgAmt">$154.00 </span>
          <Button type="Pending"/>
        </li>
        <li className="lgDt" >
            <div className="lgProfile">
              <img className="lgImg" src="https://images.pexels.com/photos/1350606/pexels-photo-1350606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
            <span className="lgPrflName">Jane julia</span>
            </div>
            <span className="lgDate">27 Dec 2023</span>
            <span className="lgAmt">$154.00 </span>
          <Button type="Declined"/>
        </li>
        <li className="lgDt" >
            <div className="lgProfile">
              <img className="lgImg" src="https://images.pexels.com/photos/1350606/pexels-photo-1350606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
            <span className="lgPrflName">Jane julia</span>
            </div>
            <span className="lgDate">27 Dec 2023</span>
            <span className="lgAmt">$154.00 </span>
          <Button type="Approved"/>
          </li>
        </ul>
      </div>

  )
}

export default WidgetLg