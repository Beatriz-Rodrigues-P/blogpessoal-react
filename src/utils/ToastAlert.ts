import { toast } from 'react-toastify';

export function ToastAlert(mensagem: string, tipo: string) {

    let style={};

    switch (tipo) {
            
        case 'sucesso':
            style={backgroundColor:"#C87B00", color: "#F9FAFB" }
            toast.success(mensagem, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
                style: style
            });
            break;

        case 'erro':
            style={backgroundColor:"#DC2626", color: "#F9FAFB" }
            toast.error(mensagem, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
                style: style
            });
            break;

            case 'info':
            default:
            style={backgroundColor:"#E5E7EB", color: "#374151" }
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
                style: style
            });
            break;
    }
}