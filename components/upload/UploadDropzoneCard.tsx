"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const MAX_BYTES = 10 * 1024 * 1024; // 10MB
const MIN_BYTES = 1 * 1024;         // 1KB

export default function UploadDropzoneCard() {
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    console.log("accepted", acceptedFiles);
    console.log("rejected", fileRejections);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: MAX_BYTES,
    minSize: MIN_BYTES,
    accept: { "image/*": [], "application/pdf": [] },
    noClick: false,
    noKeyboard: false,
  });

  return (
    <Card
      {...getRootProps()}
      className={`h-40 flex cursor-pointer items-center justify-center border-dashed ${
        isDragActive ? "border-foreground/60" : "border-muted"
      }`}
      onDoubleClick={open}
      title="Upload files"
    >
      <input {...getInputProps()} />
      <div className="text-center px-4">
        <div className="mb-2 text-sm font-medium">Upload files</div>
        <Label className="text-xs text-muted-foreground">
          Drag and drop or click to upload<br />
          Accepts image/* and application/pdf<br />
          between 1.00KB and 10.00MB.
        </Label>
      </div>
    </Card>
  );
}
