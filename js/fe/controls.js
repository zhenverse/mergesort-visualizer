document.addEventListener('DOMContentLoaded', () => {
    //  HTML上的兩個按鈕
    const generateBtn = document.getElementById('generateBtn');
    const sortBtn = document.getElementById('sortBtn');

    // 點擊「產生隨機數列」 
    generateBtn.addEventListener('click', () => {
        // 測試
        console.log('產生隨機數列');

        if (window.app && typeof window.app.generateArray === 'function') {
            window.app.generateArray();
        }

        sortBtn.disabled = false;
    });

    // 點擊「開始排序」 
    sortBtn.addEventListener('click', () => {
        // 測試
        console.log('開始排序');

        if (window.app && typeof window.app.startSort === 'function') {
            window.app.startSort();
        }

        sortBtn.disabled = true;
        generateBtn.disabled = true;
    });
});