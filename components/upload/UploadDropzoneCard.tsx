"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export default function UploadDropzoneCard() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Aquí puedes manejar los archivos
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // Ajusta si quieres restringir tipos/tamaño:
    // accept: { "image/*": [], "application/pdf": [] },
    // maxSize: 10 * 1024 * 1024,
    // minSize: 1 * 1024,
  });

  return (
    <Card
      {...getRootProps()}
      className={[
        "h-40 cursor-pointer select-none",
        "border-dashed",                    // borde discontinuo
        "flex items-center justify-center",
        "text-center",
        isDragActive ? "bg-muted/40" : "bg-background",
      ].join(" ")}
    >
      <input {...getInputProps()} />

      <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-4">
        {/* Icono de subida (arriba) */}
        <div className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
            <Upload className="h-4 w-4 text-foreground/80" />
          </div>
        </div>

        {/* Título */}
        <Label className="font-semibold">Upload files</Label>

        {/* Descripción */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          Drag and drop or click to upload
          <br />
          Accepts image/* and application/pdf
          <br />
          between 1.00KB and 10.00MB.
        </p>
      </div>
    </Card>
  );
}
