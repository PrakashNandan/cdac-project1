import React, {useState} from 'react'
import '../style/Pagination.css'

function Pagination({totalUsers, userPerPage,setUserPerPage,setCurrentPage, currPage, lastIndex, firstIndex}) {


    const pages=[];
    const totalPage = Math.ceil(totalUsers/userPerPage)

    for(let i=1;i<=totalPage;i++){
        pages.push(i);
    }

    const handlePageChange = (newPageNumber) => {
        setCurrentPage(newPageNumber);
      };


  return (
    <>
    <div className='pagination'>
        {
            // pages.map((page, index)=>{
            //     return (
                    
            //         <button key={index}  onClick={()=> setCurrentPage(page)}  className={page == currPage ? 'active' : ''}>{page}</button>
                    
            // )
            // })

        }
                    <span>Rows :</span>
                    <input type="number" className='userPerPageClass pagiInputClass' id='Pagi_input_id' name='userPerPage' value={userPerPage} onChange={(e) => {setUserPerPage(e.target.value) }} />
                    <div className="spacer"></div>
                    <span>{firstIndex+1}-{lastIndex} of {totalUsers}</span>

                    <button
                    className='btn btn-primary btn-sm pagiBtn '
                    disabled={currPage === 1}
                    onClick={() => handlePageChange(currPage - 1)}
                    >
                    Prev
                  </button>
               
                    <span>Page : {currPage}</span>

                    <button
                    className='btn btn-primary btn-sm pagiBtn'
                    disabled={currPage === totalPage}
                    onClick={() => handlePageChange(currPage + 1)}
                    >
                    next
                  </button>
                  




    </div>
    </>
  )
}

export default Pagination