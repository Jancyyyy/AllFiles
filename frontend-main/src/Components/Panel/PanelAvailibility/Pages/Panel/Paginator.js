 import "./Paginator.scss";
 import {useSelector} from "react-redux";
function Paginator({
  children,
  onPrevious,
  onNext,
  totalPages,
  page,
  lastPage,
  currentPage,
}) {
  let buttons= useSelector(state=>state.panelAvailability.buttons)
  return (
    <>
      <nav className=''>
        {children}
        <div className='btn-group' style={{ float: "right" }}>
                    <button className='btn btn-outline-primary col-sm-4' disabled={page === 1} onClick={onPrevious}>Prev</button>
                    {buttons}
                    <button className='btn btn-outline-primary col-sm-4' disabled={page >= Math.ceil(totalPages / 10)} onClick={onNext}>Next</button>
                </div>
      </nav>
    </>
  );
}

export default Paginator;
