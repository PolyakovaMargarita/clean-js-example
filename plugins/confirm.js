$.confirm = function(options) {
    return new Promise((resolve, rejecr) => {
        const modal = $.modal({
            title: options.title,
            width: "400px",
            closable: false,
            onClose() {
                modal.destroy()
            },
            content: options.content,
            footerButtons: [
                {text: 'Return', type: 'secondary', handler() {
                    modal.close();
                    rejecr();
                }},
                {text: 'Remove', type: 'danger', handler() {
                    modal.close();
                    resolve();
                }}
            ]
        })
        setTimeout(() => modal.open(), 100);
    })
}