function skillsMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Skills Member');
            resolve();
        }, 3000);
    });
}