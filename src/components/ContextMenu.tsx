import React, { FC, useEffect, useRef, useState } from 'react';

interface ContextMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    x: number;
    y: number;
    setImgState: (state: boolean) => void;
}

export const ContextMenu = ({ x, y, onClose, children, isOpen, setImgState }: ContextMenuProps) => {
    const contextMenuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
            if (event.button === 2) {
                onClose();
            } 
        };

        const handleClick = (event: MouseEvent) => {

            
            if (contextMenuRef.current && contextMenuRef.current.contains(event.target as Node)) {
                console.log('In zone')
            } 
            if (!contextMenuRef.current || !contextMenuRef.current.contains(event.target as Node)) {
                console.log('No zone')
                // onClose();
            }

        };

        if (isOpen) {
            document.addEventListener('contextmenu', handleContextMenu);
            document.addEventListener('mousedown', handleClick);

            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('mousedown', handleClick);

            document.body.style.overflow = 'auto';
        };
    }, [onClose, isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className='fixed bg-gray-800 mt-10 ml-auto border border-gray-700 shadow-lg 
        z-200 rounded p-2 w-48 opacity-100 transition-opacity flex'
            ref={contextMenuRef}
            style={{ top: y, left: x }}

            onMouseEnter={() => setImgState(true)}
            onMouseLeave={() => setImgState(false)}
        >
            {children}
        </div>
    );
};

