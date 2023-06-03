import React from 'react'
import '../style/Pagination.css'

function Pagination({totalUsers, userPerPage,setCurrentPage, currPage}) {

    const pages=[];

    for(let i=1;i<=Math.ceil(totalUsers/userPerPage);i++){
        pages.push(i);
    }


  return (
    <>
    <div className='pagination'>
        {
            pages.map((page, index)=>{
                return <button key={index}  onClick={()=> setCurrentPage(page)}  className={page == currPage ? 'active' : ''}>{page}</button>
            })

        }
    </div>
    </>
  )
}

export default Pagination