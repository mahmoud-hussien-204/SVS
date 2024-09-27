import IconImage from "@/components/icons/IconImage";

import { useMemo } from "react";

import { useFormContext } from "react-hook-form";

interface IProps {
  locale?: boolean;
  name: string;
  title: string;
}

const ImageUploader = ({ locale = false, name, title }: IProps) => {
  const { setValue, watch } = useFormContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    // if locale that means the data will sent as form data
    if (locale) {
      setValue(name, file);
    } else {
      // if not locale that means the file will upload to server and returned url
    }
  };

  const fieldValue = watch(name);

  const imageFieldValue = useMemo(() => {
    if (!fieldValue) return null;
    else if (typeof fieldValue === "object") return window.URL.createObjectURL(fieldValue);
    return fieldValue;
  }, [fieldValue]);

  return (
    <div className='w-full'>
      <input type='file' hidden id={`imaga-uploader-${name}`} onChange={handleFileChange} />
      <label htmlFor={`imaga-uploader-${name}`} className='flex flex-col cursor-pointer gap-0.75rem'>
        <h5 className='mb-0.25rem capitalize text-left'>{title}</h5>
        <div className='flex h-52 w-full items-center justify-center rounded-box bg-base-300'>
          {!imageFieldValue ? (
            <IconImage />
          ) : (
            <img src={imageFieldValue} className='rounded-inherit h-full w-full object-cover' />
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageUploader;
