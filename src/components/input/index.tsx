import { Tooltip } from 'antd';
import { InputProps } from './interface/InputProps';


export function CustomInput ({ placement, title, label, ...rest }:InputProps) {
    return (
        <div className={`input-wrapper ${placement}`}>

            <label htmlFor={rest.id}>{title}</label>
            <Tooltip placement={placement} title={title}>
                <input {...rest} />
            </Tooltip>

        </div>
    );
};
