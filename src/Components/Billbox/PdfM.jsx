import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { selectPdf } from "./billBoxSlice";
import './Pdf.css'



function PdfM() {
    const pdfRef = useRef();
    function Download() {
        const input = pdfRef.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4', true);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 6;

                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save('downloadedPDF.pdf');
            })
    }
    const pdf = useSelector(selectPdf)
    //   console.log(useSelector(
    //     (state) => state.billBox
    //   ))
    console.log(pdf.BillType);





    return (
        <><div className='body' ref={pdfRef} style={{ marginTop: '20px' }}>
            <header className="header2"></header>
            <div className="pdfCont">

                <div className="pdfrow">
                    <div className="pdfcol">
                    Bill Type :
                    </div>
                    <div className="pdfcol">
                    {pdf.BillType}
                    </div>
                </div>

                <div className="pdfrow">
                    <div className="pdfcol">
                    Department :
                    </div>
                    <div className="pdfcol">
                    {pdf.Department}
                    </div>
                </div>

                <div className="pdfrow">
                    <div className="pdfcol">
                    Payment Type :
                    </div>
                    <div className="pdfcol">
                    {pdf.PaymentType}
                    </div>
                </div>

                <div className="pdfrow">
                    <div className="pdfcol">
                    Invoice Number :
                    </div>
                    <div className="pdfcol">
                    {pdf.invoiceNo}
                    </div>
                </div>

                <div className="pdfrow">
                    <div className="pdfcol">
                    Invoice Date :
                    </div>
                    <div className="pdfcol">
                    {pdf.invoiceDate}
                    </div>
                </div>
        
                <div className="pdfrow">
                    <div className="pdfcol">
                    Bill Net Amount :
                    </div>
                    <div className="pdfcol">
                    Rs.{pdf.amount}
                    </div>
                </div>

            </div>

        </div>
            <button style={{ marginTop: '30px' }} className='btn btn-primary' onClick={() => { Download() }}>Download</button>
        </>

    )

}
export default PdfM;