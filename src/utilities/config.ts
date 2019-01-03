const {
  REACT_APP_APIKEY,
  REACT_APP_SPREADSHEET_ID
} = process.env;

export const config = {
  apiKey: REACT_APP_APIKEY,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: REACT_APP_SPREADSHEET_ID
}
