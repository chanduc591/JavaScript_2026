import fs from 'fs' ;
import xlsx from 'xlsx';

export class ExcelUtil {

    //Creating a common method to read the Excel by providing the Excel file path and sheet name to read the data 
    static readExcel(filepath: string, sheetName: string): any {

        //Verify whether the excel file exists or not. 
        if(!fs.existsSync(filepath)){  //if file does not exist. 
            throw new Error(`Excel file not found within the ${filepath}`);
        }

        //Read the workbook from the Excel file. 
        const workbook = xlsx.readFile(filepath);

        //Read specific sheet from the workbook. 
        const sheet = workbook.Sheets[sheetName] ;

        //Verify whether the specific sheet mentioned is available. 
        if(!sheet){
            throw new Error(`Sheet ${sheetName} not found within the Excel ${filepath}`);
        }

        //Read the data from the given sheet and convert it into JSON format. 
        return xlsx.utils.sheet_to_json(sheet);

    }

}

//Access read Excel method and read the data from test data file. 
let data = ExcelUtil.readExcel ("./files/TestData.xlsx" , "Sheet1");
console.log(data); //Print complete data. 
console.log(data[1]["Password"]); //Access data from the second row, and the column name should be password. 