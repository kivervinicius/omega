if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log('service worker registered');
        })
        .catch(function(error) {
            console.warn('service worker failed');
            console.error(error);
        });
}

function main() {
    $.ajax({
        url: "localhost:83/"
    })
}



function actionModal() {
    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#view-source');
    
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });

    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });    
}

function actionSnackedBar() {

    var snackbarContainer = document.querySelector("#snackbar");  
    var data = {
    message: 'Button color changed.',
        timeout: 2000,
        actionHandler: handler,
        actionText: 'Undo'
    };

    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

//actionSnackedBar();
actionModal();