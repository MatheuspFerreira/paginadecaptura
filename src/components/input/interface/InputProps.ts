import { InputHTMLAttributes } from 'react';
import { TooltipPlacement } from 'antd/es/tooltip';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placement: TooltipPlacement;
    title: string;
    label:string;
}