# Documents
 
All supporting documents for this project will be organized in this directory.
Templates directory contains latex styles used in documents

## Compiling the PDF from command line

To compile a PDF version of one of the documents you can run the following command with any rmd file

Rscript -e 'library(rmarkdown);render("file.rmd", "pdf_document")'`
