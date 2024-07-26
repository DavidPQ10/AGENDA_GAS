function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda de Google Apps Script');
}

function getMetaData(file){
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}