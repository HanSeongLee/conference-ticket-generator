'use client';

import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import Icon, { IconName } from '@/components/element/Icon';
import Text from '@/components/typography/Text';
import { Controller, useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

interface IImageFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    options?: RegisterOptions;
}

const ImageFileInput: React.FC<IImageFileInputProps> = ({
                                                            name, options, accept = '.jpg, .jpeg, .png', className,
                                                            ...props
                                                        }) => {
    const buttonRef = React.createRef<HTMLButtonElement>();
    const fileInputRef = React.createRef<HTMLInputElement>();
    const [isDragging, setIsDragging] = React.useState<boolean>(false);
    const [imageSrc, setImageSrc] = React.useState<string | null>(null);
    const formContext = useFormContext();

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        e.stopPropagation();
        fileInputRef.current?.click();
    };

    const updateImageSrc = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            updateImageSrc(file);
        }
    };

    const resetFileInput = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setImageSrc(null);
        fileInputRef.current!.value = '';
        buttonRef.current?.focus();
    };

    const handleDrop = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files.length !== 1) {
            return;
        }
        if (accept) {
            const acceptedTypes = accept.replace(/\s|\./g, '').split(',');
            const fileType = e.dataTransfer.files[0].type.split('/')[1];
            if (!acceptedTypes.includes(fileType)) {
                return;
            }
        }
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(e.dataTransfer.files[0]);
        fileInputRef.current!.files = dataTransfer.files;
        updateImageSrc(dataTransfer.files[0]);
    }

    const handleDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }

    return (
        <button className={cn(styles.fileInput, {
            [styles.isDragging]: isDragging,
        }, className)}
                type={'button'}
                onClick={handleButtonClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                ref={buttonRef}
        >
            {!imageSrc ? (
                <>
                    <div className={styles.iconBox}>
                        <Icon iconName={IconName.CLOUD}
                              size={30}
                        />
                    </div>
                    <Text preset={'text-preset-6'}>
                        Drag and drop or click to upload
                    </Text>
                </>
            ) : (
                <>
                    <div className={styles.imagePreviewBox}>
                        <img className={styles.imagePreview}
                             src={imageSrc}
                             alt={'Image Preview'}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.removeImageButton}
                             role={'button'}
                             tabIndex={0}
                             onClick={resetFileInput}
                             onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    resetFileInput(e);
                                }
                             }}
                        >
                            Remove image
                        </div>
                        <div className={styles.changeImageButton}
                                role={'button'}
                                tabIndex={0}
                                onClick={handleButtonClick}
                        >
                            Change image
                        </div>
                    </div>
                </>
            )}
            {formContext ? (
                <Controller control={formContext?.control}
                            rules={options}
                            render={({ field }) => (
                                <input className={styles.input}
                                       type={'file'}
                                       {...props}
                                       accept={accept}
                                       ref={fileInputRef}
                                       onChange={(e) => {
                                           field.onChange(e.target.files);
                                           handleFileChange(e);
                                       }}
                                       onBlur={field.onBlur}
                                />
                            )}
                            name={name}
                >
                </Controller>
            ) : (
                <input className={styles.input}
                       type={'file'}
                       {...props}
                       accept={accept}
                       ref={fileInputRef}
                       onChange={handleFileChange}
                />
            )}
        </button>
    );
};

export default ImageFileInput;
