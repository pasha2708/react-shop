function Header(props) {
  return(
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className='mr-30 cu-p' onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/card.svg" alt="Card" />
            <span>300$</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
  );}

  export default Header;