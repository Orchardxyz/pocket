/**
 * title: 调试用例
 * description: 你需要使用 `usePdfViewerRef` 来加载 PDF 文件
 * debug: true
 */

import React from 'react';
import PdfViewer, { PDFOpenFileButtonPlugin, PDFPainterPlugin, PDFTooltipPlugin, usePdfViewerRef } from '@orca-fe/pdf-viewer';

const Demo1 = () => {
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
      <PdfViewer ref={pdfViewerRef} dropFile pdfJsParams={{ cMapUrl: '/pdfjs-bcmaps/' }} style={{ height: 600 }}>
        <PDFOpenFileButtonPlugin />
        <PDFPainterPlugin />
        <PDFTooltipPlugin />
      </PdfViewer>
    </div>
  );
};

export default Demo1;
