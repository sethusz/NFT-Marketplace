import React, {FC, useEffect, useRef, useState} from 'react';

interface ContextMenuProps {
  children: React.ReactNode
  isOpen: boolean,
 onClose: () => void
 x: number,
 y: number
};

export const ContextMenu: FC<ContextMenuProps> = ({x, y, onClose, children, isOpen}) => {
    const [visible, setVisible] = useState(true);
    const contextMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);

        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClose, isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className='fixed bg-gray-800 mt-10 ml-auto border border-gray-700 shadow-lg 
                        z-50 rounded p-2 w-48 opacity-100 transition-opacity flex flex-col
        '
             ref={contextMenuRef}
             style={{ top: y, left: x }}>
            {children}
        </div>
    );
};