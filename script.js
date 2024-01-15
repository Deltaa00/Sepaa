document.addEventListener('DOMContentLoaded', function () {
    let currentArticleIndex = 0;
    const articlesOrder = [1, 2, 3, 4]; // Atur urutan artikel sesuai kebutuhan

    function showArticle(articleNumber) {
        // Menyembunyikan semua artikel
        for (let i = 1; i <= articlesOrder.length; i++) {
            document.getElementById(`article-${i}`).classList.remove('active');
        }

        // Menampilkan artikel yang dipilih
        document.getElementById(`article-${articleNumber}`).classList.add('active');
    }

    // Menanggapi klik tombol "skip"
    document.getElementById('skipButton').addEventListener('click', function () {
        currentArticleIndex = (currentArticleIndex + 1) % articlesOrder.length;
        showArticle(articlesOrder[currentArticleIndex]);
    });

    // Tombol back
    function goBack() {
        if (currentArticleIndex > 0) {
            currentArticleIndex--;
            showArticle(articlesOrder[currentArticleIndex]);
        }
    }

    // Menanggapi klik tombol "back"
    document.getElementById('backButton').addEventListener('click', goBack);

    // Menampilkan artikel pertama saat halaman dimuat
    showArticle(articlesOrder[currentArticleIndex]);
});
