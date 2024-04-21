document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('details').forEach((detail) => {
        detail.querySelector('summary').addEventListener('click', function() {
            const plusMinus = this.querySelector('.plus-minus');
            if (detail.open) {
                plusMinus.textContent = '+';
            } else {
                setTimeout(() => { plusMinus.textContent = '-'; }, 200);
            }
        });
    });

    function sanityCheck() {
        console.log('!Sanity check: all good!');
    }

    sanityCheck();
});
