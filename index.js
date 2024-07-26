function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda de Google Apps Script');
}

function getMetaData(file){
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function getContacts(){
    let sheet = SpreadsheetApp.openById('1BtMuZNSrUQToXU2i_EXMHoVkS2S420jJf5G0zjKmck0').getActiveSheet();
    let data = sheet.getDataRange().getValues();
    return data;
}