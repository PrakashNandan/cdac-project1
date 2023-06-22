import React, {useState} from 'react'
import '../style/Pagination.css'

function Pagination({totalUsers, pageSize,setPageSize,setPageNumber, pageNumber, lastIndex, firstIndex, totalElements, totalPages}) {


    const pages=[];
   

    for(let i=1;i<=totalPages;i++){
        pages.push(i);
    }

    const handlePageChange = (newPageNumber) => {
      setPageNumber(newPageNumber);
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
                    <input type="number" className='userPerPageClass pagiInputClass' id='Pagi_input_id' name='userPerPage' value={pageSize} onChange={(e) => {setPageSize(e.target.value) }} />
                    <div className="spacer"></div>
                    <span>{firstIndex+1}-{lastIndex} of {totalElements}</span>

                    <button
                    className='btn btn-primary btn-sm pagiBtn '
                    disabled={pageNumber === 1}
                    onClick={() => handlePageChange(pageNumber - 1)}
                    >
                    Prev
                  </button>
               
                    <span>Page : {pageNumber}</span>

                    <button
                    className='btn btn-primary btn-sm pagiBtn'
                    disabled={pageNumber === totalPages}
                    onClick={() => handlePageChange(pageNumber + 1)}
                    >
                    next
                  </button>
                  




    </div>
    </>
  )
}

export default Pagination