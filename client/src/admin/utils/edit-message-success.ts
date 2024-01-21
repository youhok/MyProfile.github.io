import { toast } from "vue3-toastify";

const editMessageSuccess = (message: string) => {
    setTimeout(() => {
        toast.success(message);
    }, 1800)
}

export default editMessageSuccess
