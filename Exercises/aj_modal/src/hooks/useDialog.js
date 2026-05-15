import { useRef } from "react";

export const useDialog = () => {
    //ref to access dialog
    const dialogRef = useRef(null);

//open function
const openDialog = () => dialogRef.current.showModal();

//close function
const closeDialog = () => dialogRef.current.close();

return {
    dialogRef,
    openDialog,
    closeDialog
    };
};