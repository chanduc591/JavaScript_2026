import fs from 'fs';
import {PDFParse} from 'pdf-parse';

export class PdfUtil {

    static async readPdf(filePath: string): Promise<string> {


        //Verify whether the PDF file exists. 
        if(!fs.existsSync(filePath)){
             throw new Error(`PDF file not found within the ${filePath}`);
        }

        //Read the PDF file As a buffer 
        const pdfBuffer = fs.readFileSync(filePath); //Convert it into raw byte format. 

        //Convert the PDF buffer into Uint8Array.  (Wrapping all the byte content into a single file )
        const unit8Array = new Uint8Array(pdfBuffer);

        //Convert all the bytes collected in Uint8Array into a string. 
        const pdfData = new PDFParse(unit8Array);
        const pdfText = (await pdfData.getText()).text;

        return pdfText ;

    }

}


    //Calling the function to read the data from the PDF file. 
    let data =await PdfUtil.readPdf("./files/Data.pdf");
    console.log(data);
    console.log(data.includes("Installing Playwright"));