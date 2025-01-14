/**
 * title: 基础用法
 * description: 你需要使用 `usePdfViewerRef` 来加载 PDF 文件
 */

import React from 'react';
import PdfViewer, { PDFPainterPlugin, PDFTooltipPlugin, usePdfViewerRef } from '@orca-fe/pdf-viewer';

const Page = () => {
  const pdfViewerRef = usePdfViewerRef();
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const { files } = e.target as HTMLInputElement;
          if (files?.length) {
            const file = files[0];
            const pdfViewer = pdfViewerRef.current;
            if (pdfViewer) {
              pdfViewer.load(file);
            }
          }
        }}
      />
      <PdfViewer ref={pdfViewerRef} pdfJsParams={{ cMapUrl: '/pdfjs-bcmaps/' }} style={{ height: 600 }}>
        <PDFTooltipPlugin />
        <PDFPainterPlugin />
      </PdfViewer>
    </div>
  );
};

export default Page;
