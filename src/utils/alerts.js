import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showConfirmationAlert = (title, text = '', confirmText = 'Sí', cancelText = 'No') => {
    return MySwal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    });
};

export const showSuccessAlert = (message, icon, text = '') => {
    return MySwal.fire({
        title: message,
        text: text,
        icon: icon,
        confirmButtonColor: '#3085d6'
    });
};