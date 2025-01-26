"use client";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRef, useState } from "react";
import Image from "next/image";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface ImageUploadProps {
  icon: IconDefinition;
  name: string;
  defaultValue: string;
}

export default function ImageUpload({
  icon,
  name,
  defaultValue = "",
}: ImageUploadProps) {
  const fileInRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState(defaultValue);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  async function upload(ev: React.ChangeEvent<HTMLInputElement>) {
    const input = ev.target;
    if (input && input.files) {
      if (input.files.length > 0) {
        setIsUploading(true);
        const file = input.files[0];
        const data = new FormData();
        data.set("file", file);

        try {
          const response = await axios.post("/api/upload", data);
          if (response.data.url) {
            setUrl(response.data.url);
            setIsUploading(false);
            setIsImageLoading(true);
          }
        } catch (error) {
          console.error("Upload failed:", error);
        }
      }
    }
  }

  const imgLoading = isUploading || isImageLoading;

  return (
    <>
      <div
        className="bg-gray-200 border rounded-md size-24 inline-flex
         items-center content-center justify-center"
      >
        {imgLoading && (
          <FontAwesomeIcon
            icon={faSpinner}
            size="2x"
            className="text-gray-500 animate-spin"
          />
        )}
        {!isUploading && url && (
          <Image
            src={url}
            alt="uploaded image"
            width={200}
            height={200}
            onLoadingComplete={() => setIsImageLoading(false)}
            className="w-auto h-auto"
          />
        )}
        {!imgLoading && !url && (
          <FontAwesomeIcon icon={icon} size="2x" className="text-gray-500" />
        )}
      </div>

      <input type="hidden" name={name} value={url} />

      <div className="mt-2">
        <input
          onChange={upload}
          ref={fileInRef}
          type="file"
          className="hidden"
        />
        <Button
          type="button"
          onClick={() => fileInRef.current?.click()}
          variant="soft"
        >
          Select File
        </Button>
      </div>
    </>
  );
}
