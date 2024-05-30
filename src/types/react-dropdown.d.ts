// types/react-dropdown.d.ts
declare module 'react-dropdown' {
    import * as React from 'react';

    export interface Option {
        value: string;
        label: string;
    }

    export interface ReactDropdownProps {
        options: Option[];
        onChange: (option: Option) => void;
        value?: Option | string;
        placeholder?: string;
    }

    const Dropdown: React.FC<ReactDropdownProps>;

    export default Dropdown;
}
