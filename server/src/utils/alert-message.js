const AlertMessage = {
    createSuccess: 'Transaction has been created.',
    editSuccess: 'Transaction has been edited.',
    deleteConfirm: 'Confirmation: Are you sure?',
    deleteSuccess: (_id) => `Transaction (${_id}) has been deleted.`
}

export default AlertMessage