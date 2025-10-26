"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), { ssr: false });

export default function PdfViewer({ fileUrl, className = "" }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(400);

  // Initialize pdfjs worker only on client
  useEffect(() => {
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;
    });
  }, []);

  // Handle responsive width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPdfWidth(300); // Mobile
      } else if (window.innerWidth < 1024) {
        setPdfWidth(450); // Tablet
      } else {
        setPdfWidth(600); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const handlePageChange = (newPage) => {
    setIsTransitioning(true);
    setPageNumber(newPage);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(Math.max(1, pageNumber - 1))}
        disabled={pageNumber <= 1}
        className="p-2 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex-shrink-0"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* PDF Viewer */}
      <div className="flex flex-col items-center flex-1 w-full min-w-0">
        <div className={`w-full flex justify-center transition-opacity duration-300 min-h-[300px] sm:min-h-[400px] ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
          <Document 
            file={fileUrl} 
            onLoadSuccess={onLoadSuccess}
            loading="Loading..."
          >
            <Page 
              pageNumber={pageNumber}
              width={pdfWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
        
        {/* Page Counter and Download */}
        <div className="mt-4 flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <span className="text-slate-300 text-xs sm:text-sm">
            Page {pageNumber} of {numPages || "..."}
          </span>
          <a
            href={fileUrl}
            download
            className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors flex items-center gap-2 text-blue-400 hover:text-blue-300"
            aria-label="Download PDF"
          >
            <Download className="w-4 h-4" />
            <span className="text-xs sm:text-sm hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(Math.min(numPages, pageNumber + 1))}
        disabled={pageNumber >= numPages}
        className="p-2 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex-shrink-0"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
}