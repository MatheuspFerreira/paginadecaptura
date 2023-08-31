import { Modal } from 'antd';
import { MyModalContentProps } from './interfaces/MyModalContentProps';


export function MyModal ({content, isModalOpen, setIsModalOpen, text=""}:MyModalContentProps){

    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      
        <Modal 
            title={text} 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
        >
          {content}
        </Modal>
      
    );
  
}

