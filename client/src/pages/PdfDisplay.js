import React from 'react';

class PdfDisplay extends React.Component {
  componentDidMount() {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    
    <head>
        <meta charset="utf-8" />
        <title>TNEA</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          content="Tailwind Multipurpose Admin & Dashboard Template"
          name="description"
        />
        <meta content="" name="Mannatthemes" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
        <!-- App favicon -->
    
        <script src="https://cdn.tailwindcss.com"></script>
    
    </head>
    
    <body class="watermark"  data-layout-mode="light">
      <style>
        .watermark::after {
      content: "";
      background-image: url("https://github.com/Jayaprakash2k3/MBAMCA/blob/master/client/src/images/logo2x.png?raw=true");
          background-repeat: no-repeat;
          background-size:contain;
      opacity: 0.1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;   
      background-position:center;
    }
        body {
    
          height: 100%;
     
        }
      </style>
      <div class="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
        <div class="card">
            <div class="card-body">
                <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                    <div class="container flex flex-wrap justify-between items-center mx-auto">
                      <a href="inbox.html" class="flex items-center text-center">
                        <img class="w-20 h-20 rounded inline-block mr-2" src="https://github.com/Jayaprakash2k3/MBAMCA/blob/master/client/src/images/logo2x.png?raw=true" alt="Rounded avatar">
                        <div class="container">
                          <span class="self-center text-center text-xl font-semibold whitespace-nowrap">Directorate of Technical Education - Chennai</span>
                          <span class="self-center text-center text-xl font-semibold whitespace-nowrap">Tamil Nadu Engineering Admission</span>
                        </div>
                      </a>
                    </div>
                </nav>
            </div><!--end card-body-->
        </div> <!--end card-->
        <div class="container-fluid my-5 flex items-center text-center justify-center">
        <h2 class="bg-green-100 text-green-800 text-2xl font-bold mr-5 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 border-4 border-green-800">DECLARATION FORM</h2>
        </div>
          <div class="card-body text-center">
              <h5 class=" font-medium text-base my-3 dark:text-slate-300">Donald Gonzalez</h5>
              <h5 class=" font-medium text-base my-3 dark:text-slate-300">Donald Gonzalez</h5>
              <h5 class=" font-medium text-base my-3 dark:text-slate-300">Donald Gonzalez</h5>
    
             
          </div><!--end card-body-->
    

    </div>    
    </body>
    
    </html>
    `;

    document.open();
    document.write(htmlContent);
    document.close();
  }

  render() {
    return null;
  }
}

export default PdfDisplay;
