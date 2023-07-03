import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { selectPdf } from "./billBoxSlice";




function PdfM(){
    const pdfRef=useRef();
    function Download(){
        const input= pdfRef.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p','mm','a4',true);
                const pdfWidth=pdf.internal.pageSize.getWidth();
                const pdfHeight=pdf.internal.pageSize.getHeight();
                const imgWidth=canvas.width;
                const imgHeight=canvas.height;
                const ratio=Math.min(pdfWidth/ imgWidth, pdfHeight/imgHeight);
                const imgX=(pdfWidth - imgWidth* ratio)/2;
                const imgY=30;

                pdf.addImage(imgData, 'PNG', imgX, imgY,imgWidth*ratio,imgHeight*ratio);
                pdf.save('downloadedPDF.pdf');
            })
    }
    const pdf = useSelector(selectPdf )
        //   console.log(useSelector(
        //     (state) => state.billBox
        //   ))
        console.log(pdf.BillType);
return (
    <><div ref={pdfRef}>
        <div style={{marginTop:'60px'}}>
                    <div>Bill Type : {pdf.BillType}</div>
                    <div>Department : {pdf.Department}</div>
                    <div>Payment Type : {pdf.PaymentType}</div>
                    <div>Invoice Number : {pdf.invoiceNo}</div>
                    <div>Invoice Date : {pdf.invoiceDate}</div>
                    <div>Bill Net Amount : Rs.{pdf.amount}</div>
                    </div>
      
       </div>
       <button onClick={()=>{Download()}}>Download</button>
    </>
)

}
export default PdfM;