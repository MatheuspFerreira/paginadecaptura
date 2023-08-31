import { ReactNode } from "react";

export interface MyModalContentProps {
    content:ReactNode;
    isModalOpen:boolean;
    setIsModalOpen:(value:boolean)=>void;
    text?:string;

}