import  {create} from 'zustand';

interface REgisterModalStore {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;

}

const useRegisterModal = create<REgisterModalStore>((set)=>({
    isOpen: false,
    onOpen :() => set({isOpen : true}),
    onClose: () => set({isOpen: false})
}));



export default  useRegisterModal;