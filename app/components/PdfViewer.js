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

  // Initialize pdfjs worker only on client
  useEffect(() => {
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;
    });
  }, []);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const handlePageChange = (newPage) => {
    setIsTransitioning(true);
    setPageNumber(newPage);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(Math.max(1, pageNumber - 1))}
        disabled={pageNumber <= 1}
        className="p-2 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex-shrink-0"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* PDF Viewer */}
      <div className="flex flex-col items-center">
        <div className={`w-full flex justify-center transition-opacity duration-300 min-h-[400px] sm:min-h-[600px] ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
          <Document 
            file={fileUrl} 
            onLoadSuccess={onLoadSuccess}
            loading="Loading..."
          >
            <Page 
              pageNumber={pageNumber}
              scale={0.75}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
        
        {/* Page Counter and Download */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-slate-300 text-sm">
            Page {pageNumber} of {numPages || "..."}
          </span>
          <a
            href={fileUrl}
            download
            className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors flex items-center gap-2 text-blue-400 hover:text-blue-300"
            aria-label="Download PDF"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Download</span>
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
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}