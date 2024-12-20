import { readFileSync, createWriteStream } from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';

// Function to convert JSON to PDF
function jsonToPdf(jsonFilePath, outputPdfPath) {
  // Read the JSON file
  const jsonData = JSON.parse(readFileSync(jsonFilePath, 'utf-8'));
  
  // Create a new PDF document
  const doc = new PDFDocument();

  // Pipe the PDF document to a file
  doc.pipe(createWriteStream(outputPdfPath));

  // Add a title to the PDF
  doc.fontSize(16).text('Test Results Report', { align: 'center' });
  doc.moveDown(1);

  // Add a summary of the JSON data
  doc.fontSize(12).text('Summary:', { underline: true });
  doc.moveDown(1);

  // Format the JSON data to display in a readable way
  const formattedJson = JSON.stringify(jsonData, null, 2); // Pretty print JSON

  // Add the formatted JSON data to the PDF
  doc.fontSize(10).text(formattedJson);

  // Finalize the PDF and end the document
  doc.end();
  
  console.log(`PDF created: ${outputPdfPath}`);
}

// Example usage
const jsonFilePath = './results/results-0-0.firefox.json';  // Path to your JSON report
const outputPdfPath = './results/test1-results-report.pdf';  // Path to save the PDF

jsonToPdf(jsonFilePath, outputPdfPath);