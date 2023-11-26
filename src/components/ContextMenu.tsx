import React, { FC, useEffect, useRef, useState } from 'react';

interface ContextMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
    toggleContext: (state: boolean) => void | undefined;
    isSecond?: boolean;
    toggleSubContext?: (state: boolean) => void | undefined;
}

export const ContextMenu = ({ children, isOpen, toggleContext, isSecond, toggleSubContext}: ContextMenuProps) => {
    const contextMenuRef = useRef<HTMLDivElement | null>(null);
    // useEffect(() => {
    //     const handleContextMenu = (event: MouseEvent) => {
    //         event.preventDefault();
    //         if (event.button === 2) {
    //             onClose();
    //         }
    //     };

    //     const handleClick = (event: MouseEvent) => {
    //         // if (contextMenuRef?.current?.contains(event.target as Node)) {
    //         //     console.log('Clicked inside context');
    //         // } else {
    //         //     console.log('Clicked outside context');
    //         //     onClose();
    //         // }
    //         // console.log('Clicked')
    //     };


    //     if (isOpen) {
    //         document.addEventListener('contextmenu', handleContextMenu);
    //         // document.addEventListener('click', handleClick);

    //         document.body.style.overflow = 'hidden';
    //     }

    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //         // document.removeEventListener('click', handleClick);

    //         document.body.style.overflow = 'auto';
    //     };
    // }, [isOpen]);

    if (!isOpen) {
        return null;
    }



    return (
        <>
            <div className='fixed inset-0'
                onClick={() => toggleContext(false)}></div>
            <div
                className={`absolute top-0 left-0 bg-gray-800 mt-10 ml-auto border border-gray-700 shadow-lg 
        z-200 rounded p-2 w-48 opacity-100 transition-opacity flex ${isSecond ? 'left-[190px]' : ''}`}
                ref={contextMenuRef}

                onMouseEnter={() => {!isSecond && toggleSubContext && toggleSubContext(true) 
                                    console.log('test')}}
                onMouseLeave={() => isSecond && toggleContext && toggleContext(false)}

            >
                {children}
            </div>
        </>
    );
};


