import { Button } from 'antd';
import { CustomButtonProps } from './interface/CustomButtonProps';


export function CustomButton ({ text, ghost, onClick, className }:CustomButtonProps){
    return <Button type="primary" ghost={ghost} onClick={onClick} className={className}>
        {text}
    </Button>
}